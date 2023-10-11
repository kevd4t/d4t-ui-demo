import { IBottomNavigationSidebarProps } from "../schemas/IComponent-props";
import { Button, NavLink, NavLinkNested, Separator } from "../../";

import BottomNavigationSidebarHeader from "./sidebar-header";
import { LogOut } from "lucide-react";

export default function BottomNavigationSidebar({
  navLinksItems,
  subLinksItems,
  sidebar,
  onCloseSideBar,
}: IBottomNavigationSidebarProps) {
  const { profile } = sidebar;

  return (
    <>
      <BottomNavigationSidebarHeader profile={profile} />

      <aside className="px-6">
        {navLinksItems?.map((navLinkItem, idx) => (
          <NavLink
            key={idx}
            to={navLinkItem.to}
            pathname={navLinkItem.pathname}
            label={navLinkItem.label}
            icon={navLinkItem.icon}
          />
        ))}

        {subLinksItems && (
          <NavLinkNested
            pathname={subLinksItems.pathname}
            label={subLinksItems.label}
            icon={subLinksItems.icon}
            sublinks={subLinksItems.subLinks}
          />
        )}

        {/* <Button
          className="my-1 outline-dashed bg-transparent colo"
          onClick={() => {
            sidebar.logout();
          }}
        >
          Cerrar sesion
        </Button>

        <Button className="my-1" onClick={onCloseSideBar}>
          Cerrar menu
        </Button>

        <Button className="my-1">Cambiar tema</Button> */}

        <section className="pl-2 pr-3 my-2">
          <div className="border border-slate-200 w-full"></div>

          <ul className="mt-2 space-y-2">
            {/* <li>
              <ToggleTheme isExpanded={!isExpanded} theme={theme} />
            </li> */}

            <li>
              <button
                onClick={onCloseSideBar}
                className={`w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
              >
                <span className="pl-2 dark:text-white text-sm">
                  Cerrar Menu
                </span>
              </button>
            </li>

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
      </aside>
    </>
  );
}
