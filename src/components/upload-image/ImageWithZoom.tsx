import Zoom from 'react-medium-image-zoom'
import React from 'react'

import { cn } from '../../lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../'
import { ImageOff } from 'lucide-react'

interface ImageWithZoomProps {
  previewUrl: string
  imageContainerClassName: string
}

export const ImageWithZoom = ({ previewUrl, imageContainerClassName }: ImageWithZoomProps) => {
  return (
    <Zoom>
      <Avatar className={cn('w-full h-[237px] rounded-md', imageContainerClassName)}>
        <AvatarImage src={previewUrl} className='rounded-md object-contain m-auto h-full' style={{ width: '-webkit-fill-available' }} />
        <AvatarFallback className='w-full h-full rounded-md'>
          <ImageOff />
        </AvatarFallback>
      </Avatar>
    </Zoom>
  )
}
