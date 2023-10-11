import { useState } from "react";
import { SidebarIcon } from "lucide-react";
import { IBottonNavProps } from "./schemas/IComponent-props";
import DrawerBottomNavigation from "./drawer";
import BottomNavigationButton from "./nav-button";
import BottomNavigationSidebar from "./sidebar/sidebar";

export function BottomNavigation({
  bottomItems,
  navLinksItems,
  subLinksItems,
  sidebar,
  Link,
}: IBottonNavProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-[#09090B] dark:border-[#151313] rounded-t-xl">
      {/* Buttons */}
      <div
        className={`grid h-full max-w-lg grid-cols-${5} mx-auto font-medium`}
      >
        {bottomItems.map((item, idx) => (
          <BottomNavigationButton
            key={idx}
            icon={item.icon}
            titleDescription={item.titleDescription}
            Link={null}
          />
        ))}

        <BottomNavigationButton
          icon={<SidebarIcon />}
          titleDescription="Options"
          actionToSet={setIsDrawerOpen}
          Link={null}
        />
      </div>

      {/* Drawer */}
      <DrawerBottomNavigation
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <BottomNavigationSidebar
          Link={Link}
          sidebar={sidebar}
          navLinksItems={navLinksItems}
          subLinksItems={subLinksItems}
          onCloseSideBar={() => setIsDrawerOpen(false)}
        />
      </DrawerBottomNavigation>
    </div>
  );
}
