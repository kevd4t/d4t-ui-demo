/// <reference types="react" />
export interface IBottomNavItem {
    titleDescription: string;
    path: string;
    icon: React.ReactNode;
}
export interface IBottonNavProps {
    items: IBottomNavItem[];
}
export declare function BottomNavigation({ items }: IBottonNavProps): JSX.Element;
