import React from 'react'

import { cn } from '../../../lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from '../../'
import { ImageOff } from 'lucide-react'

interface ImageWithoutZoomProps {
  previewUrl: string
  imageContainerClassName: string
}

export const ImageWithoutZoom = ({ previewUrl, imageContainerClassName }: ImageWithoutZoomProps) => {
  return (
    <Avatar className={cn('w-full h-[237px] rounded-md', imageContainerClassName)}>
      <AvatarImage src={previewUrl} className='rounded-md object-contain m-auto h-full' style={{ width: '-webkit-fill-available' }} />
      <AvatarFallback className='w-full h-full rounded-md'>
        <ImageOff />
      </AvatarFallback>
    </Avatar>
  )
}
