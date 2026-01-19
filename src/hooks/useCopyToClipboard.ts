import { useState, useEffect, useCallback } from 'react';

interface CopyToClipboardResult {
  copiedText: string | null;
  copy: (text: string) => Promise<boolean>;
  reset: () => void;
}

export function useCopyToClipboard(resetDelay: number = 2000): CopyToClipboardResult {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard API not available');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed:', error);
      setCopiedText(null);
      return false;
    }
  }, []);

  const reset = useCallback(() => {
    setCopiedText(null);
  }, []);

  // Auto-reset after delay
  useEffect(() => {
    if (copiedText && resetDelay > 0) {
      const timer = setTimeout(reset, resetDelay);
      return () => clearTimeout(timer);
    }
  }, [copiedText, resetDelay, reset]);

  return { copiedText, copy, reset };
}

export default useCopyToClipboard;
