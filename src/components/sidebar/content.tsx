import { useSidebar } from "./"
import { ScrollArea } from "../"

export const SidebarContent = ({ children }) => {
  const { isExpanded } = useSidebar()

  return (
    <section className='w-full h-full py-3 scroll-content'>
      <div className={`w-full space-y-3 pr-2`}>
        {children}
      </div>
    </section>
  )
}
