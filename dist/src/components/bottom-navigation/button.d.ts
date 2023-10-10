import { IBottomNavItem } from "./index";
import { ButtonHTMLAttributes } from "react";
interface IBottomNavButton extends Pick<IBottomNavItem, "titleDescription">, ButtonHTMLAttributes<any> {
    icon: React.ReactNode;
    actionToSet?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function BottomNavigationButton({ icon, titleDescription, actionToSet, }: IBottomNavButton): JSX.Element;
export {};
