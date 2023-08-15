import { ReactNode } from 'react';
declare type LinkNavigationProps = {
    to: string;
    label: string;
    icon?: ReactNode;
    pathname: string;
    Link?: any;
};
export declare const NavLink: ({ to, label, icon, pathname, Link }: LinkNavigationProps) => JSX.Element;
export {};
