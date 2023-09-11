import React from 'react'

import { cn } from '../../lib/utils'

interface ImageWithoutZoomProps {
  previewUrl: string
  imageContainerClassName: string
}

export const ImageWithoutZoom = ({ previewUrl, imageContainerClassName }: ImageWithoutZoomProps) => {
  return (
    <div className={cn('w-full h-[237px]', imageContainerClassName)}>
      <img
        src={previewUrl}
        alt='image'
        className='rounded-md object-contain m-auto h-full'
        style={{ width: '-webkit-fill-available' }}
      />
    </div>
  )
}
