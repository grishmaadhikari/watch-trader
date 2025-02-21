import type { Config } from "tailwindcss";
import forms from '@tailwindcss/forms';

const colors = {
  background: {
    DEFAULT: '#F9FAFB', // Light gray background
    card: '#FFFFFF',    // Pure white
    hover: '#F3F4F6',   // Light gray hover
  },
  brand: {
    primary: '#2563EB',   // Vibrant blue
    secondary: '#3B82F6', // Lighter blue
    dark: '#1D4ED8',      // Darker blue
  },
  text: {
    primary: '#1F2937',   // Near black
    secondary: '#4B5563', // Dark gray
    muted: '#6B7280',     // Medium gray
    light: '#F9FAFB',     // Light gray
  },
  accent: {
    success: '#059669',   // Green
    warning: '#D97706',   // Orange
    danger: '#DC2626',    // Red
  },
  border: {
    DEFAULT: 'rgba(229, 231, 235, 0.8)',
    hover: 'rgba(209, 213, 219, 0.8)',
  },
  glass: {
    DEFAULT: 'rgba(249, 250, 251, 0.9)',
    hover: 'rgba(249, 250, 251, 0.95)',
  }
};

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'dropdown': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(180deg, rgba(249, 250, 251, 0.5) 0%, rgba(249, 250, 251, 0) 100%)',
        'gradient-card': 'linear-gradient(to bottom right, rgba(37, 99, 235, 0.02), rgba(59, 130, 246, 0.02))',
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [forms({ strategy: 'class' })],
} satisfies Config;

export default config;