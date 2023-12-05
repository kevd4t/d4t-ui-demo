import { ISidebarConfigProps } from "../schemas/IComponent-props";
import { LogOut, SidebarClose } from "lucide-react";
import { ToggleTheme, SidebarTheme } from "./toggle-theme";

interface ISidebarFooterProps {
  sidebar: ISidebarConfigProps;
  onCloseSideBar: () => void;
}

export default function BottomNavigationSidebarFooter({
  sidebar,
  onCloseSideBar,
}: ISidebarFooterProps) {
  return (
    <section className="pl-2 pr-3 my-2">
      <div className="border border-slate-200 w-full"></div>

      <ul className="mt-2 space-y-2">
        {/*Theme*/}
        {sidebar.theme && (
          <li>
            <ToggleTheme isExpanded={false} theme={sidebar.theme} />
          </li>
        )}

        {/*Close menu*/}
        <li>
          <button
            onClick={onCloseSideBar}
            className={`w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
          >
            <SidebarClose className="dark:text-white" size={20} />
            <span className="pl-2 dark:text-white text-sm">Cerrar Menu</span>
          </button>
        </li>

        {/*Logout*/}
        {sidebar.logout && (
          <li>
            <button
              onClick={() => {
                sidebar.logout();
              }}
              className={`w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
            >
              <LogOut className="dark:text-white" size={20} />

              <span className="pl-2 dark:text-white text-sm">
                Cerrar Sesión
              </span>
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}
