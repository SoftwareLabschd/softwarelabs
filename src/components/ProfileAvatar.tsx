import { useState } from 'react';
import { User, LogOut, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';

export function ProfileAvatar() {
  const { user, profile, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const displayName = profile?.display_name || user.email?.split('@')[0] || 'User';
  const initials = displayName.substring(0, 2).toUpperCase();

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="relative group">
          <Avatar className="w-10 h-10 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
            <AvatarImage 
              src={profile?.avatar_url || undefined} 
              alt={displayName}
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-background rounded-full animate-pulse" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        align="end" 
        className="w-56 glass-card border-primary/20 animate-scale-in"
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-primary">
              {displayName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="bg-border/50" />
        
        <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10 cursor-pointer group">
          <User className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
          <span>Profile</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10 cursor-pointer group">
          <Settings className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
          <span>Settings</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-border/50" />
        
        <DropdownMenuItem 
          onClick={signOut}
          className="hover:bg-destructive/10 focus:bg-destructive/10 cursor-pointer group text-destructive focus:text-destructive"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}