import { useState } from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const ThemeSelector = () => {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "p-3 rounded-full glass-card border border-primary/20",
            "hover:scale-110 transition-all duration-300",
            "hover:shadow-lg hover:shadow-primary/30",
            "animate-pulse-glow"
          )}
          aria-label="Change theme"
        >
          <Palette className="w-5 h-5 text-primary" />
        </button>

        {/* Theme Options */}
        {isOpen && (
          <div className={cn(
            "absolute top-full right-0 mt-2 p-2",
            "glass-card border border-primary/20 rounded-xl",
            "min-w-[200px] backdrop-blur-lg z-[100]",
            "animate-fade-in-up"
          )}>
            <div className="grid gap-2">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.value}
                  onClick={() => {
                    setTheme(themeOption.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-all duration-200",
                    "hover:bg-primary/10 hover:scale-105",
                    theme === themeOption.value 
                      ? "bg-primary/20 ring-2 ring-primary/50" 
                      : "hover:bg-muted/50"
                  )}
                >
                  {/* Color Preview */}
                  <div className="flex gap-1">
                    {themeOption.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  
                  {/* Theme Name */}
                  <span className="text-sm font-medium text-foreground">
                    {themeOption.label}
                  </span>
                  
                  {/* Current Theme Indicator */}
                  {theme === themeOption.value && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </button>
              ))}
            </div>
            
            <div className="mt-2 pt-2 border-t border-border/20">
              <p className="text-xs text-muted-foreground text-center">
                Choose your visual experience
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[90]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ThemeSelector;