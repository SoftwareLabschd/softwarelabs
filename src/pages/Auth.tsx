import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { useAuth } from '@/contexts/AuthContext';
import ParticleSystem from '@/components/ParticleSystem';
import EnhancedFloatingShapes from '@/components/EnhancedFloatingShapes';

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background">
        <ParticleSystem />
        <EnhancedFloatingShapes />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <div className="hidden lg:block space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse-glow">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Welcome to SoftwareLabs
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join our innovative platform and unlock a world of possibilities. 
                Experience cutting-edge technology with a beautiful, intuitive interface.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Secure & Private</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Lightning Fast</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Always Available</span>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="w-full">
            <div className="glass-card p-8 rounded-2xl border border-primary/20 backdrop-blur-xl animate-fade-in pointer-events-auto z-20">
              <AuthForm mode={mode} onToggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float-up" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float-up" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float-up" style={{animationDelay: '4s'}} />
    </div>
  );
}