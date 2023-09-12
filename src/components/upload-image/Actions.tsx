import React from 'react'

import { UploadImageCompress, UploadImageTabIndexs } from './types'
import { Button } from '../button'

interface UploadImageActionsProps {
  imageIndex: number
  compress?: UploadImageCompress
  tabIndexs?: UploadImageTabIndexs
  onImageUpdate: (index: number) => void
  onImageRemove: (index: number) => void
}

export const UploadImageActions = ({ imageIndex, compress, tabIndexs, onImageUpdate, onImageRemove }: UploadImageActionsProps) => {
  return (
    <div className='mt-2 gap-x-2 w-full flex justify-center items-start'>
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
        onClick={() => onImageRemove(imageIndex)}
      >
        Eliminar
      </Button>
    </div>
  )
}
