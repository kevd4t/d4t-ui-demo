// @ts-ignore
// @ts-nocheck

import Zoom, { UncontrolledProps } from 'react-medium-image-zoom'
import React, { useState } from 'react'
import { ImageOff } from 'lucide-react'

import { cn } from '../../../lib/utils'

interface ImageWithZoomProps extends Omit<UncontrolledProps, 'children'> {
  previewUrl: string
  alt?: string
  imageContainerClassName?: string
}

export const ImageWithZoom = ({ previewUrl: src, alt, imageContainerClassName, ...rest }: ImageWithZoomProps) => {
  const [imageError, setImageError] = useState(false)

  return (
    <>
      <style jsx>{`
        [data-rmiz-modal-overlay="visible"] {
          background: rgba(0, 0, 0, 0.6) !important;
          backdrop-filter: blur(4px);
        }
      `}</style>

      <Zoom {...rest}>
        {imageError ? (
          <div style={{ textAlign: 'center' }}>
            <ImageOff size={34} />
            <p>Error al cargar la imagen</p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            style={{ width: '-webkit-fill-available' }}
            className={cn('object-contain m-auto h-aspect-square w-fit h-[237px] rounded-md', imageContainerClassName)}
            onError={() => setImageError(true)}
          />
        )}
      </Zoom>
    </>
  );
}
