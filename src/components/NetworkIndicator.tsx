import { memo, useEffect, useState } from 'react';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface NetworkIndicatorProps {
  className?: string;
  showOnline?: boolean;
}

const NetworkIndicator = memo(({ className, showOnline = false }: NetworkIndicatorProps) => {
  const { isOnline, effectiveType, saveData } = useNetworkStatus({
    onOnline: () => {
      toast({
        title: "Back Online",
        description: "Your internet connection has been restored.",
        duration: 3000,
      });
    },
    onOffline: () => {
      toast({
        title: "You're Offline",
        description: "Please check your internet connection.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setShowBanner(true);
    } else {
      const timer = setTimeout(() => setShowBanner(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOnline]);

  // Only show indicator when offline or when explicitly requested
  if (isOnline && !showOnline && !showBanner) return null;

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 z-50 transition-all duration-300',
        showBanner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-full',
          'backdrop-blur-sm border text-sm font-medium',
          isOnline
            ? 'bg-green-500/20 border-green-500/50 text-green-400'
            : 'bg-red-500/20 border-red-500/50 text-red-400'
        )}
      >
        <span className={cn(
          'w-2 h-2 rounded-full',
          isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'
        )} />
        
        {isOnline ? (
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-wifi"></i>
            Online
            {effectiveType && (
              <span className="text-xs text-muted-foreground">
                ({effectiveType})
              </span>
            )}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-wifi-slash"></i>
            Offline
          </span>
        )}
        
        {saveData && (
          <span className="text-xs text-yellow-400">
            <i className="fa-solid fa-gauge-simple-min mr-1"></i>
            Data Saver
          </span>
        )}
      </div>
    </div>
  );
});

NetworkIndicator.displayName = 'NetworkIndicator';

export default NetworkIndicator;
