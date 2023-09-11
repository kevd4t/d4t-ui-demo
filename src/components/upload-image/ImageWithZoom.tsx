import Zoom from 'react-medium-image-zoom'
import React from 'react'

import { cn } from '../../lib/utils'

interface ImageWithZoomProps {
  previewUrl: string
  imageContainerClassName: string
}

export const ImageWithZoom = ({ previewUrl, imageContainerClassName }: ImageWithZoomProps) => {
  return (
    <Zoom>
      <div className={cn('w-full h-[237px]', imageContainerClassName)}>
        <img
          src={previewUrl}
          alt='image'
          className='rounded-md object-contain m-auto h-full'
          style={{ width: '-webkit-fill-available' }}
        />
      </div>
    </Zoom>
  )
}
