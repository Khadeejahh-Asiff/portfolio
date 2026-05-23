// Portfolio Types and Interfaces

export interface Technology {
  name: string;
  level: number;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
}

export interface Expertise {
  title: string;
  highlight: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  technologies: string[];
}

export interface ContactMethod {
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  href: string;
  color: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  href: string;
  color: string;
}

export interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  cursorType: 'default' | 'link' | 'button' | 'interactive' | 'text';
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface MotionProps {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  transition?: Record<string, unknown>;
  whileHover?: Record<string, unknown>;
  whileTap?: Record<string, unknown>;
}
