/// <reference types="react" />
import { SidebarProfile } from './header';
import { SidebarTheme } from './toggle-theme';
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    profile?: SidebarProfile;
    logout: () => void;
    theme: SidebarTheme;
}
interface SidebarStore {
    isExpanded: boolean;
    setIsExpanded: (value: boolean) => void;
    toggleExpandSidebar: () => void;
}
export declare const useSidebar: import("zustand").UseBoundStore<import("zustand").StoreApi<SidebarStore>>;
export declare const Sidebar: ({ children, className, profile, logout, theme }: SidebarProps) => JSX.Element;
export {};
