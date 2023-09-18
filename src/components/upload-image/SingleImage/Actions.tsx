import React, { Dispatch, SetStateAction } from 'react'

import { IUploadImage, ImageListType, UploadImageCompress, UploadImageTabIndexs } from '../types'
import { Button } from '../../button'

interface UploadImageActionsProps {
  imageIndex: number
  compress?: UploadImageCompress
  tabIndexs?: UploadImageTabIndexs
  onImageUpdate: (index: number) => void
  onImageRemove: (index: number) => void
  setUploadImage: Dispatch<SetStateAction<IUploadImage>>
  setLocalImage: Dispatch<SetStateAction<ImageListType>>
}

export const UploadImageActions = ({ imageIndex, compress, tabIndexs, onImageUpdate, setUploadImage, onImageRemove, setLocalImage }: UploadImageActionsProps) => {
  return (
    <div className='mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2'>
      {
        compress?.openComparisons && (
          <Button
            tabIndex={tabIndexs?.viewCompress}
            className='whitespace-nowrap'
            type='button'
            onClick={() => compress.openComparisons()}
          >
            Ver Compresión
          </Button>
        )
      }

      <Button
        tabIndex={tabIndexs?.change}
        className='max-w-[116.33px] w-full'
        type='button'
        onClick={() => onImageUpdate(imageIndex)}
      >
        Cambiar
      </Button>

      <Button
        tabIndex={tabIndexs?.delete}
        className='max-w-[116.33px] w-full'
        type='button'
        onClick={() => {
          onImageRemove(imageIndex);
          setLocalImage([])
          setUploadImage({ original: null, compressed: null })
        }}
      >
        Eliminar
      </Button>
    </div>
  )
}
