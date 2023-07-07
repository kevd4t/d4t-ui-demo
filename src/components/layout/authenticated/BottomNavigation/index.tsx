import { useRouter } from "next/router"

export const BottomNavigation = () => {
  const router = useRouter()

  const routes = [
    {
      label: '',
      icon: <div></div>,
      isActive: router.pathname.startsWith('/')
    }
  ]

  return (
    <div className='xl:hidden z-40 fixed bottom-0 left-0 w-full'>
      <div className='bg-white rounded-t-md w-full px-4 py-2'>
        <ul>
          li
        </ul>
      </div>
    </div>
  )
}
