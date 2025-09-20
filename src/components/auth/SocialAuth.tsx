import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export function SocialAuth() {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSocialAuth = async (provider: 'gitlab') => {
    setIsLoading(provider);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        toast({
          title: "Authentication failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Authentication failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="flex justify-center">
      <Button
        variant="outline"
        onClick={() => handleSocialAuth('gitlab')}
        disabled={!!isLoading}
        className="w-full h-12 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
      >
        {isLoading === 'gitlab' ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#FC6D26"
                d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.387 9.452-.955 13.587a.924.924 0 0 0 .331 1.023L12 23.054l10.624-8.443a.924.924 0 0 0 .331-1.024Z"
              />
              <path
                fill="#E24329"
                d="M12 23.054 16.418 9.45H7.582L12 23.054Z"
              />
              <path
                fill="#FC6D26"
                d="M12 23.054 7.582 9.45H1.387L12 23.054Z"
              />
              <path
                fill="#FCA326"
                d="M1.387 9.45-.955 13.585a.924.924 0 0 0 .331 1.023L12 23.054 1.387 9.45Z"
              />
              <path
                fill="#E24329"
                d="M1.387 9.45h6.195L4.918 1.263a.455.455 0 0 0-.867 0L1.387 9.45Z"
              />
              <path
                fill="#FC6D26"
                d="M12 23.054 16.418 9.45h6.195L12 23.054Z"
              />
              <path
                fill="#FCA326"
                d="M22.613 9.45l1.342 4.135a.924.924 0 0 1-.331 1.023L12 23.054l10.613-13.604Z"
              />
              <path
                fill="#E24329"
                d="M22.613 9.45h-6.195L19.082 1.263a.455.455 0 0 1 .867 0l2.664 8.187Z"
              />
            </svg>
            Continue with GitLab
          </>
        )}
      </Button>
    </div>
  );
}