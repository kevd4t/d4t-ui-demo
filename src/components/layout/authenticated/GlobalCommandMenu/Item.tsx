import { type ReactElement } from 'react'
import Link from 'next/link'

import { TModuleRoutes } from '@/lib/types/routes'

import { CommandItem, CommandShortcut } from '@/components/ui/command'
import { KBD, type KBDProps } from '@/components/common/kbd'

export interface GlobalCommandItemProps {
  title: string
  value: string
  link?: TModuleRoutes
  icon?: ReactElement
  commandKey?: KBDProps
  closeGlobalCommandMenuDialog: () => void
}

export const GlobalCommandItem = ({ title, value, link, icon, commandKey, closeGlobalCommandMenuDialog }: GlobalCommandItemProps) => {
  if (link) {
    return (
      <Link href={link} onClick={closeGlobalCommandMenuDialog}>
        <CommandItem value={value}>
          {icon}
          <span>{title}</span>

          {
            commandKey && (
              <CommandShortcut>
                <KBD {...commandKey} />
              </CommandShortcut>
            )
          }
        </CommandItem>
      </Link>
    )
  }

  return (
    <CommandItem value={value}>
      {icon}
      <span>{title}</span>

      {
        commandKey && (
          <CommandShortcut>
            <KBD {...commandKey} />
          </CommandShortcut>
        )
      }
    </CommandItem>
  )
}
