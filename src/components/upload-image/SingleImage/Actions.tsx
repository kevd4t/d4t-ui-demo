import React, { Dispatch, SetStateAction } from 'react'
import { IconPhotoStar } from '@tabler/icons-react'
import { Download, Edit, Trash } from 'lucide-react'

import { ImageListType, OnChangeImage, SetUploadImage, UploadImageCompress, UploadImageTabIndexs } from '../types'
import { downloadImage } from '../../../lib/utils/download-image'
import { Button } from '../../button'

interface UploadImageActionsProps {
  src?: string
  download?: boolean
  imageIndex: number
  disabled?: boolean
  compress?: UploadImageCompress
  tabIndexs?: UploadImageTabIndexs
  onImageUpdate: (index: number) => void
  onImageRemove: (index: number) => void
  setUploadImage: SetUploadImage | OnChangeImage
  setLocalImage: Dispatch<SetStateAction<ImageListType>>
}

export const UploadImageActions = (props: UploadImageActionsProps) => {
  const { imageIndex, compress, disabled, tabIndexs, onImageUpdate, setUploadImage, onImageRemove, setLocalImage, download, src } = props

  if (disabled) return null

  return (
    <div className='mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2 bg-transparent'>
      {
        compress?.openComparisons && (
          <Button
            size='icon'
            type='button'
            variant='outline'
            tabIndex={tabIndexs?.viewCompress}
            onClick={() => compress.openComparisons()}
            className='text-green-600 backdrop-blur-sm border-green-600 bg-green-600 bg-opacity-10 hover:bg-green-600 hover:bg-opacity-25 hover:text-green-600'
          >
            <IconPhotoStar size={16} />
          </Button>
        )
      }

      <Button
        size='icon'
        type='button'
        variant='outline'
        tabIndex={tabIndexs?.change}
        onClick={() => onImageUpdate(imageIndex)}
        className='text-yellow-600 backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-25 hover:text-yellow-600'
      >
        <Edit size={14} />
      </Button>

      <Button
        tabIndex={tabIndexs?.delete}
        type='button'
        size='icon'
        variant='outline'
        onClick={() => {
          onImageRemove(imageIndex)
          setLocalImage([])
          setUploadImage({ original: null, compressed: null })
        }}
        className='text-red-700 backdrop-blur-sm border-red-700 bg-red-700 bg-opacity-10 hover:bg-red-700 hover:bg-opacity-25 hover:text-red-700'
      >
        <Trash size={14} />
      </Button>


      {
        (download && src) && (
          <Button
            size='icon'
            type='button'
            variant='outline'
            tabIndex={tabIndexs?.viewCompress}
            onClick={() => downloadImage(src, 'imagen.jpg')}
            className='whitespace-nowrap text-blue-600 backdrop-blur-sm border-blue-600 bg-blue-600 bg-opacity-10 hover:bg-blue-600 hover:bg-opacity-25 hover:text-blue-600'
          >
            <Download size={18} />
          </Button>
        )
      }
    </div>
  )
}
