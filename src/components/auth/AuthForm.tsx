import { SocialAuth } from './SocialAuth';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onToggleMode: () => void;
}

export function AuthForm({ mode, onToggleMode }: AuthFormProps) {

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome to SoftwareLabs
        </h1>
        <p className="text-muted-foreground">
          Sign in with your GitLab account to access the platform
        </p>
      </div>

      <SocialAuth />
    </div>
  );
}