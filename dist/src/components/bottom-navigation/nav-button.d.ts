import { IBottomNavItem } from "./schemas/IComponent-props";
import { ButtonHTMLAttributes } from "react";
interface IBottomNavButton extends Pick<IBottomNavItem, "titleDescription">, ButtonHTMLAttributes<any> {
    icon: React.ReactNode;
    actionToSet?: React.Dispatch<React.SetStateAction<boolean>>;
    Link: any;
}
export default function BottomNavigationButton({ icon, titleDescription, actionToSet, Link, }: IBottomNavButton): JSX.Element;
export {};
