/// <reference types="react" />
interface IDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export default function DrawerBottomNavigation({ isOpen, onClose, children, }: IDrawerProps): JSX.Element;
export {};
