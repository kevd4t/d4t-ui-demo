import { ReactNode } from "react";
declare type LinkNavigationProps = {
    to: string;
    label: string;
    icon?: ReactNode;
    pathname: string;
    Link?: any;
    isBottomNavLink?: boolean;
};
export declare const NavLink: ({ to, label, icon, pathname, Link, isBottomNavLink, }: LinkNavigationProps) => JSX.Element;
export {};
