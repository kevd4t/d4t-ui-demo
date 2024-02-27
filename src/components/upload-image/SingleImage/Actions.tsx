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
    <div className='mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent'>
      {
        compress?.openComparisons && (
          <Button
            size='icon'
            type='button'
            tabIndex={tabIndexs?.viewCompress}
            onClick={() => compress.openComparisons()}
            className='w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1'
          >
            <IconPhotoStar size={16} />
          </Button>
        )
      }

      <Button
        size='icon'
        type='button'
        tabIndex={tabIndexs?.change}
        onClick={() => onImageUpdate(imageIndex)}
        className='w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1'
      >
        <Edit size={16} />
      </Button>

      <Button
        tabIndex={tabIndexs?.delete}
        type='button'
        size='icon'
        onClick={() => {
          onImageRemove(imageIndex)
          setLocalImage([])
          setUploadImage({ original: null, compressed: null })
        }}
        className='w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1'
        >
        <Trash size={16} />
      </Button>


      {
        (download && src) && (
          <Button
            size='icon'
            type='button'
            tabIndex={tabIndexs?.viewCompress}
            onClick={() => downloadImage(src, 'imagen.jpg')}
            className='w-fit h-fit p-2 z-10 hover:bg-zinc-600 dark:hover:bg-zinc-300 focus-visible:ring-offset-0 focus-visible:ring-1'
          >
            <Download size={16} />
          </Button>
        )
      }
    </div>
  )
}
