import Zoom, { UncontrolledProps } from 'react-medium-image-zoom'
import React from 'react'

import { cn } from '../../../lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../../'
import { ImageOff } from 'lucide-react'

interface ImageWithZoomProps extends Omit<UncontrolledProps, 'children'> {
  src: string
  imageContainerClassName?: string
}

export const ImageWithZoom = ({ src, imageContainerClassName }: ImageWithZoomProps) => {
  return (
    <Zoom>
      <Avatar className={cn('w-full h-[237px] rounded-md', imageContainerClassName)}>
        <AvatarImage src={src} className='rounded-md object-contain m-auto h-full' style={{ width: '-webkit-fill-available' }} />
        <AvatarFallback className='w-full h-full rounded-md'>
          <ImageOff />
        </AvatarFallback>
      </Avatar>
    </Zoom>
  )
}
