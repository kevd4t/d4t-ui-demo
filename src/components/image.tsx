import { useState, type ReactNode } from 'react'
import { Download, ImageOff } from 'lucide-react'

import { downloadImage } from '../lib/utils/download-image'
import { cn } from '../lib/utils'

import { Dialog, DialogContent,  DialogTrigger } from './dialog'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'


export interface D4tImageProps {
  src?: string
  containerClassName?: string
  imageClassName?: string
  filename?: string
  zoom?: boolean
  download?: boolean
  fallback?: {
    className?: string
    children?: ReactNode
  }
}

export const D4TImage = ({ src, containerClassName, imageClassName, zoom, fallback, download, filename }: D4tImageProps) => {
  const [open, setOpen] = useState(false)

  if (src && zoom) {
    return (
      <div className='w-fit h-fit relative'>
        {
          download && (
            <Button className='absolute top-2 right-2 w-fit h-fit p-2 z-10' onClick={() => downloadImage(src, filename)}>
              <Download size={18} />
            </Button>
          )
        }

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className='w-fit'>
            <Avatar className={cn('h-[237px] rounded-md', containerClassName, src ? 'w-fit' : 'min-w-[300px]')}>

              <AvatarImage src={src} className={cn('rounded-md object-contain m-auto h-full cursor-zoom-in', imageClassName)} style={{ width: '-webkit-fill-available' }} />

              <AvatarFallback className={cn('w-full h-full rounded-md', fallback?.className)}>
                { fallback?.children || <ImageOff /> }
              </AvatarFallback>
            </Avatar>
          </DialogTrigger>

          <DialogContent className='p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none' style={{ background: 'transparent !important' }} onClick={() => setOpen(false)}>
            <Avatar className={cn('w-full h-full rounded-md', containerClassName)}>
              <AvatarImage src={src} className={cn('rounded-md object-contain m-auto h-full', imageClassName)} style={{ width: '-webkit-fill-available' }} />

              <AvatarFallback className={cn('w-20 h-full rounded-md', fallback?.className)}>
                { fallback?.children || <ImageOff /> }
              </AvatarFallback>
            </Avatar>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  return (
    <Avatar className={cn('w-full h-[237px] rounded-md', containerClassName)}>
      <AvatarImage src={src} className={cn('rounded-md object-contain m-auto h-full', imageClassName)} style={{ width: '-webkit-fill-available' }} />

      <AvatarFallback className={cn('w-full h-full rounded-md', fallback?.className)}>
        { fallback?.children || <ImageOff /> }
      </AvatarFallback>
    </Avatar>
  )
}