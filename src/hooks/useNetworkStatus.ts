import { useState, useEffect, useCallback, useRef } from 'react';

interface NetworkStatus {
  isOnline: boolean;
  effectiveType: string | null;
  downlink: number | null;
  rtt: number | null;
  saveData: boolean;
}

interface UseNetworkStatusOptions {
  onOnline?: () => void;
  onOffline?: () => void;
}

export function useNetworkStatus(options: UseNetworkStatusOptions = {}): NetworkStatus {
  const { onOnline, onOffline } = options;
  const onOnlineRef = useRef(onOnline);
  const onOfflineRef = useRef(onOffline);

  useEffect(() => {
    onOnlineRef.current = onOnline;
    onOfflineRef.current = onOffline;
  }, [onOnline, onOffline]);

  const getNetworkInfo = useCallback((): NetworkStatus => {
    const connection = (navigator as any).connection || 
                       (navigator as any).mozConnection || 
                       (navigator as any).webkitConnection;

    return {
      isOnline: navigator.onLine,
      effectiveType: connection?.effectiveType || null,
      downlink: connection?.downlink || null,
      rtt: connection?.rtt || null,
      saveData: connection?.saveData || false,
    };
  }, []);

  const [status, setStatus] = useState<NetworkStatus>(getNetworkInfo);

  useEffect(() => {
    const handleOnline = () => {
      setStatus(prev => ({ ...prev, isOnline: true }));
      onOnlineRef.current?.();
    };

    const handleOffline = () => {
      setStatus(prev => ({ ...prev, isOnline: false }));
      onOfflineRef.current?.();
    };

    const handleConnectionChange = () => {
      setStatus(getNetworkInfo());
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const connection = (navigator as any).connection;
    if (connection) {
      connection.addEventListener('change', handleConnectionChange);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (connection) {
        connection.removeEventListener('change', handleConnectionChange);
      }
    };
  }, [getNetworkInfo]);

  return status;
}

export default useNetworkStatus;
