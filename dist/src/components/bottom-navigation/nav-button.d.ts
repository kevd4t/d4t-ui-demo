import { IBottomNavItem } from './schemas/IComponent-props';
import { ButtonHTMLAttributes } from 'react';
interface IBottomNavButton extends Pick<IBottomNavItem, "titleDescription">, ButtonHTMLAttributes<any> {
    icon: React.ReactNode;
    actionToSet?: React.Dispatch<React.SetStateAction<boolean>>;
    item: IBottomNavItem;
    Link: any;
}
export default function BottomNavigationButton({ icon, titleDescription, actionToSet, Link, item }: IBottomNavButton): import("react").JSX.Element;
export {};
