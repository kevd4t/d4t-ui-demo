import { Button } from '@/components/ui'
import { useSidebarStore } from '@/lib/store/sidebar'
import { IconMenu2 } from '@tabler/icons-react'

export const BottomNavigation = () => {
  const { toggleSidebar } = useSidebarStore()

  return (
    <div className='xl:hidden z-40 fixed bottom-0 left-0 w-full'>
      <div className='bg-white rounded-t-md w-full px-4 py-4'>
        <ul className='text-black flex justify-center items-center gap-x-6'>
          <li>
            <Button
              onClick={toggleSidebar}
              variant='secondary'
              color='blue'
              className='px-2'
            >
              <IconMenu2 size={18} />
            </Button>
          </li>

          <li>
            <Button
              onClick={toggleSidebar}
              variant='secondary'
              color='blue'
              className='px-2'
            >
              <IconMenu2 size={18} />
            </Button>
          </li>

          <li>
            <Button
              onClick={toggleSidebar}
              variant='secondary'
              color='blue'
              className='px-2'
            >
              <IconMenu2 size={18} />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}
