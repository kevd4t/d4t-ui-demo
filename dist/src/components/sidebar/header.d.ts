/// <reference types="react" />
export interface SidebarProfile {
    role?: string;
    name?: string;
    photo?: string;
    lastname?: string;
}
export interface SidebarHeaderProps {
    profile?: SidebarProfile;
    isExpanded: boolean;
}
export declare const SidebarHeader: ({ profile, isExpanded }: SidebarHeaderProps) => JSX.Element;
