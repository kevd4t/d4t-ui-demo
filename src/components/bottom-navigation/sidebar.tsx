import { IBottomNavigationSidebarProps } from "./schemas/IComponent-props";
import { Sidebar, SidebarContent, NavLink, NavLinkNested } from "..";

export default function BottomNavigationSidebar({
  navLinksItems,
  subLinksItems,
  sidebar,
}: IBottomNavigationSidebarProps) {
  return (
    <Sidebar
      logout={sidebar.logout}
      profile={sidebar.profile}
      isDrawerSidebar={true}
      theme={sidebar.theme}
    >
      <SidebarContent>
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
      </SidebarContent>
    </Sidebar>
  );
}
