/// <reference types="react" />
import { ISidebarConfigProps } from "../schemas/IComponent-props";
export default function BottomNavigationSidebarFooter({ sidebar, onCloseSideBar, }: {
    sidebar: ISidebarConfigProps;
    onCloseSideBar: () => void;
}): JSX.Element;
