import { ReactNode } from 'react';
import { SublinksItem } from './nav-sublink';
declare type LinkNavigationNestedProps = {
    label: string;
    icon?: ReactNode;
    pathname: string;
    Link?: any;
    sublinks: SublinksItem[];
};
export declare const NavLinkNested: ({ label, icon, sublinks, pathname, Link }: LinkNavigationNestedProps) => JSX.Element;
export {};
