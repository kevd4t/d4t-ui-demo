import { Download, Edit, Trash } from 'lucide-react'
import { IconPhotoStar } from '@tabler/icons-react'

import { UploadImageCompress, UploadImageTabIndexs } from '../types'
import { downloadImage } from '../../../lib/utils/download-image'
import { Button } from '../../button'

interface UploadImageActionsProps {
  imageIndex: number
  compress?: UploadImageCompress
  tabIndexs?: UploadImageTabIndexs
  onImageUpdate: (index: number) => void
  onImageRemove: (index: number) => void
  disabled?: boolean
  src?: string
  download?: boolean
}

export const MultiUploadImageActions = ({ imageIndex, compress, tabIndexs, onImageUpdate, onImageRemove, disabled, download, src }: UploadImageActionsProps) => {
  return (
    <div className='mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent'>
      {
        (compress?.openComparisons && !disabled) && (
          <Button
            size='icon'
            type='button'
            tabIndex={tabIndexs?.viewCompress}
            onClick={() => compress.openComparisons()}
            className='w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1'
            >
            <IconPhotoStar size={16} />
          </Button>
        )
      }

      {
        !disabled && (
          <Button
            size='icon'
            type='button'
            tabIndex={tabIndexs?.change}
            onClick={() => onImageUpdate(imageIndex)}
            className='w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1'
          >
            <Edit size={16} />
          </Button>
        )
      }

      {
        !disabled && (
          <Button
            tabIndex={tabIndexs?.delete}
            type='button'
            size='icon'
            onClick={() => onImageRemove(imageIndex)}
            className='w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1'
          >
            <Trash size={16} />
          </Button>
        )
      }


      {
        (download && src) && (
          <Button
            size='icon'
            type='button'
            tabIndex={tabIndexs?.viewCompress}
            onClick={() => downloadImage(src, 'imagen.jpg')}
            className='w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1'
        >
            <Download size={16} />
          </Button>
        )
      }
    </div>
  )
}
