import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			'tech-green': 'hsl(var(--tech-green))',
    			'tech-green-glow': 'hsl(var(--tech-green-glow))',
    			'cyber-purple': 'hsl(var(--cyber-purple))',
    			'cyber-purple-glow': 'hsl(var(--cyber-purple-glow))',
    			'neural-blue': 'hsl(var(--neural-blue))',
    			'primary-neon': 'hsl(var(--primary-neon))',
    			'secondary-neon': 'hsl(var(--secondary-neon))',
    			'accent-purple': 'hsl(var(--accent-purple))',
    			neon: 'hsl(var(--primary-neon))',
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		fontFamily: {
    			orbitron: [
    				'Orbitron',
    				'monospace'
    			],
    			rajdhani: [
    				'Rajdhani',
    				'sans-serif'
    			],
    			poppins: [
    				'Poppins',
    				'sans-serif'
    			],
    			jetbrains: [
    				'JetBrains Mono',
    				'monospace'
    			],
    			exo: [
    				'Exo 2',
    				'sans-serif'
    			],
    			sans: [
    				'Source Sans Pro',
    				'ui-sans-serif',
    				'system-ui',
    				'-apple-system',
    				'BlinkMacSystemFont',
    				'Segoe UI',
    				'Roboto',
    				'Helvetica Neue',
    				'Arial',
    				'Noto Sans',
    				'sans-serif'
    			],
    			serif: [
    				'Source Serif Pro',
    				'ui-serif',
    				'Georgia',
    				'Cambria',
    				'Times New Roman',
    				'Times',
    				'serif'
    			],
    			mono: [
    				'Source Code Pro',
    				'ui-monospace',
    				'SFMono-Regular',
    				'Menlo',
    				'Monaco',
    				'Consolas',
    				'Liberation Mono',
    				'Courier New',
    				'monospace'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'glow-pulse': {
    				'0%, 100%': {
    					boxShadow: '0 0 20px hsl(var(--tech-green) / 0.3)'
    				},
    				'50%': {
    					boxShadow: '0 0 40px hsl(var(--tech-green) / 0.6), 0 0 60px hsl(var(--tech-green) / 0.4)'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0px)'
    				},
    				'50%': {
    					transform: 'translateY(-10px)'
    				}
    			},
    			'fade-in-up': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(30px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'gradient-shift': {
    				'0%, 100%': {
    					backgroundPosition: '0% 50%'
    				},
    				'50%': {
    					backgroundPosition: '100% 50%'
    				}
    			},
    			shimmer: {
    				'0%': {
    					transform: 'translateX(-100%) translateY(-100%) rotate(45deg)',
    					opacity: '0'
    				},
    				'50%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'translateX(100%) translateY(100%) rotate(45deg)',
    					opacity: '0'
    				}
    			},
    			'rotate-3d': {
    				'0%, 100%': {
    					transform: 'perspective(1000px) rotateY(0deg)'
    				},
    				'50%': {
    					transform: 'perspective(1000px) rotateY(10deg)'
    				}
    			},
    			'pulse-glow': {
    				'0%, 100%': {
    					transform: 'scale(1)',
    					textShadow: '0 0 10px currentColor'
    				},
    				'50%': {
    					transform: 'scale(1.05)',
    					textShadow: '0 0 20px currentColor'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
    			float: 'float 3s ease-in-out infinite',
    			'fade-in-up': 'fade-in-up 0.8s ease-out',
    			'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
    			shimmer: 'shimmer 1s ease-in-out',
    			'rotate-3d': 'rotate-3d 4s infinite ease-in-out',
    			'pulse-glow': 'pulse-glow 2s infinite'
    		},
    		backgroundImage: {
    			'gradient-primary': 'var(--gradient-primary)',
    			'gradient-hero': 'var(--gradient-hero)',
    			'gradient-card': 'var(--gradient-card)',
    			'gradient-neon': 'var(--gradient-neon)',
    			'gradient-cyber': 'var(--gradient-cyber)'
    		},
    		boxShadow: {
    			'glow-green': 'var(--glow-green)',
    			'glow-purple': 'var(--glow-purple)',
    			'glow-neon': 'var(--glow-neon)',
    			tech: 'var(--shadow-tech)',
    			neon: 'var(--shadow-neon)',
    			'2xs': 'var(--shadow-2xs)',
    			xs: 'var(--shadow-xs)',
    			sm: 'var(--shadow-sm)',
    			md: 'var(--shadow-md)',
    			lg: 'var(--shadow-lg)',
    			xl: 'var(--shadow-xl)',
    			'2xl': 'var(--shadow-2xl)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
