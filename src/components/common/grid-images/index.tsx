import React, { HTMLAttributes } from 'react'
import Zoom from 'react-medium-image-zoom'

import { cn } from '@/lib/utils'

interface ImageProps {
  image: string
  imageContainerProps?: HTMLAttributes<HTMLDivElement>
}

interface GridImagesProps {
  images: string[]
  zoom?: boolean
  imageContainerProps?: HTMLAttributes<HTMLDivElement>
}

const ImageWithZoom = ({ image, imageContainerProps }: ImageProps) => (
  <Zoom>
    <div className={cn('w-full h-[237px]', imageContainerProps?.className)}>
      <img
        src={image}
        alt='image'
        className='rounded-md object-contain m-auto h-full'
        style={{ width: '-webkit-fill-available' }}
      />
    </div>
  </Zoom>
)

const ImageWithOutZoom = ({ image, imageContainerProps }: ImageProps) => (
  <div className={cn('w-full h-[237px]', imageContainerProps?.className)}>
    <img
      src={image}
      alt='image'
      className='rounded-md object-contain m-auto h-full'
      style={{ width: '-webkit-fill-available' }}
    />
  </div>
)

export const GridImages = ({ images, zoom, imageContainerProps }: GridImagesProps) => {
  return (
    <div className='grid grid-cols-3 grid-flow-row gap-4'>
      {
        images.map(image => {
          return (
            zoom
              ? <ImageWithZoom key={image} image={image} imageContainerProps={imageContainerProps} />
              : <ImageWithOutZoom key={image} image={image} imageContainerProps={imageContainerProps} />
          )
        })
      }
    </div>
  )
}
