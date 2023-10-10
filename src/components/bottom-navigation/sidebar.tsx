import { Sidebar, SidebarContent, NavLink } from "..";
import { Settings } from "lucide-react";

export default function BottomNavigationSidebar() {
  return (
    <Sidebar
      logout={() => {}}
      isDrawerSidebar={true}
      theme={{ toggleTheme: () => {}, value: "dark" }}
    >
      <SidebarContent>
        <NavLink
          to="/asd"
          pathname="/asd"
          label="Esto es un label muy largo asi que se va a cortar"
          icon={<Settings className="dark:text-white" size={20} />}
        />
      </SidebarContent>
    </Sidebar>
  );
}
