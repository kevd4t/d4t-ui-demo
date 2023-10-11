import { IBottomNavItem } from "./schemas/IComponent-props";
import { ButtonHTMLAttributes } from "react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "..";
import { NavLink } from "..";

interface IBottomNavButton
  extends Pick<IBottomNavItem, "titleDescription">,
    ButtonHTMLAttributes<any> {
  icon: React.ReactNode;
  actionToSet?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BottomNavigationButton({
  icon,
  titleDescription,
  actionToSet,
}: IBottomNavButton) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            onClick={
              actionToSet
                ? () => {
                    actionToSet(true);
                  }
                : null
            }
            role="button"
            className="w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-gray-[#eaeaea] rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none"
          >
            <NavLink
              to="/asd"
              pathname="/asd"
              label={titleDescription}
              icon={icon}
              isBottomNavLink={true}
            />
          </div>
        </TooltipTrigger>

        <TooltipContent>{titleDescription}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
