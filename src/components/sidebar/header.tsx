import { User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../'

export interface SidebarProfile {
  photo?: string
}

export interface SidebarHeaderProps {
  profile?: SidebarProfile
}

export const SidebarHeader = ({ profile }: SidebarHeaderProps) => {
  return (
    <header>
      <Avatar className='rounded-md'>
        <AvatarImage
          className='p-2 border border-gray-200'
          src={profile?.photo}
        />

        <AvatarFallback className='p-2 rounded-md'>
          <User className='text-black dark:text-white' />
          {/* {profile?.photo || 'KB'} */}
        </AvatarFallback>
      </Avatar>
    </header>
  )
}
