import { ReactNode } from 'react';
export interface SublinksItem {
    to: string;
    label: string;
    icon?: ReactNode;
}
interface NavSubLinkProps extends SublinksItem {
    isExpanded: boolean;
    Link?: any;
    pathname: string;
}
export declare const NavSubLink: ({ isExpanded, pathname, to, icon, label, Link }: NavSubLinkProps) => JSX.Element;
export {};
