import { useState } from "react";
import { SidebarIcon } from "lucide-react";
import DrawerBottomNavigation from "./drawer";
import BottomNavigationButton from "./button";
import BottomNavigationSidebar from "./sidebar";

export interface IBottomNavItem {
  titleDescription: string;
  path: string;
  icon: React.ReactNode;
}

export interface IBottonNavProps {
  items: IBottomNavItem[];
}

export default function BottomNavigation({ items }: IBottonNavProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-[#09090B] dark:border-[#151313] rounded-t-xl">
      {/* Buttons */}
      <div
        className={`grid h-full max-w-lg grid-cols-${
          items.length <= 5 ? items.length + 1 : 4
        } mx-auto font-medium`}
      >
        {items.map((item, idx) => (
          <BottomNavigationButton
            key={idx}
            icon={item.icon}
            titleDescription={item.titleDescription}
          />
        ))}

        <BottomNavigationButton
          icon={<SidebarIcon />}
          titleDescription="Options"
          actionToSet={setIsDrawerOpen}
        />
      </div>

      {/* Drawer */}
      <DrawerBottomNavigation
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <BottomNavigationSidebar />
      </DrawerBottomNavigation>
    </div>
  );
}
