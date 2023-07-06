import { useRouter } from 'next/router'
import { toast } from 'sonner'
// import { useTheme } from '@/lib/hooks/useTheme'

// import { handleFetchErrors } from '@/lib/utils/handleFetchErrors'
// import { getLocalStorage } from '@/lib/utils/localStorage'
// import { useDrawerStore } from '@/lib/store/Drawer'
// import { useAuthStore } from '@/lib/store/Auth'
// import { signOut } from '@/lib/services/auth'

import { ScrollArea } from '@/components/ui/scroll-area'
import { useSidebarStore } from '@/lib/store/sidebar'
// import { SectionsFullWidth } from './SectionsFullWidth'
import { SectionsCollapsable } from './SectionsCollapsable'
// import { Badge, Divider } from '@tremor/react'

export const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore()
  // const { removeAuth } = useAuthStore()
  // const [, setIsLoading] = useState(false)
  // const { isOpen } = useDrawerStore()
  const router = useRouter()

  const logout = async () => {
    // setIsLoading(true)
    // const accessToken = getLocalStorage('accessToken')
    // const { error } = await signOut(accessToken)

    // if (error) {
    //   setIsLoading(false)
    //   handleFetchErrors(error.status, error.message)
    //   return
    // }

    // setIsLoading(false)
    // removeAuth()
    toast.message('Sesión Cerrada')
    router.push('/iniciar-sesion')
  }

  return (
    <div
      id='drawer-navigation'
      tabIndex={-1}
      aria-labelledby='drawer-navigation-label'
      className='authLayout_sidebar bg-main dark:border-transparent'
    >
      <ScrollArea className='w-full h-full p-4'>
        <SectionsCollapsable isOpen={isOpen} logout={logout} toggleSidebar={toggleSidebar} />
      </ScrollArea>
    </div>
  )
}
