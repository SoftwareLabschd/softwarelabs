import { useEffect, useCallback } from 'react';

type KeyCombo = string;
type KeyHandler = (event: KeyboardEvent) => void;

interface UseKeyboardShortcutsOptions {
  enabled?: boolean;
  preventDefault?: boolean;
}

export function useKeyboardShortcuts(
  shortcuts: Record<KeyCombo, KeyHandler>,
  options: UseKeyboardShortcutsOptions = {}
) {
  const { enabled = true, preventDefault = true } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      // Build key combo string
      const combo: string[] = [];
      if (event.ctrlKey || event.metaKey) combo.push('ctrl');
      if (event.altKey) combo.push('alt');
      if (event.shiftKey) combo.push('shift');
      combo.push(event.key.toLowerCase());
      
      const keyCombo = combo.join('+');

      // Check if this combo matches any registered shortcut
      const handler = shortcuts[keyCombo];
      
      if (handler) {
        if (preventDefault) {
          event.preventDefault();
          event.stopPropagation();
        }
        handler(event);
      }
    },
    [shortcuts, enabled, preventDefault]
  );

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, enabled]);
}

// Common shortcuts
export const commonShortcuts = {
  scrollToTop: 'ctrl+ArrowUp',
  scrollToBottom: 'ctrl+ArrowDown',
  toggleTheme: 'ctrl+shift+t',
  search: 'ctrl+k',
  escape: 'escape',
};

export default useKeyboardShortcuts;
