/// <reference types="react" />
import { SidebarTheme } from "./toggle-theme";
interface SidebarFooterProps {
    logout: () => void;
    isExpanded: boolean;
    toggleExpandSidebar: () => void;
    theme: SidebarTheme;
}
export declare const SidebarFooter: ({ logout, isExpanded, toggleExpandSidebar, theme }: SidebarFooterProps) => JSX.Element;
export {};
