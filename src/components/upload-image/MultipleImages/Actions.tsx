import { UploadImageCompress, UploadImageTabIndexs } from '../types'
import { Button } from '../../button'
import { Edit, Trash } from 'lucide-react'
import { IconPhotoStar } from '@tabler/icons-react'

interface UploadImageActionsProps {
  imageIndex: number
  compress?: UploadImageCompress
  tabIndexs?: UploadImageTabIndexs
  onImageUpdate: (index: number) => void
  onImageRemove: (index: number) => void
}

export const MultiUploadImageActions = ({ imageIndex, compress, tabIndexs, onImageUpdate, onImageRemove }: UploadImageActionsProps) => {
  return (
    <div className='mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2'>
      {
        compress?.openComparisons && (
          <Button
            size='icon'
            type='button'
            variant='outline'
            tabIndex={tabIndexs?.viewCompress}
            onClick={() => compress.openComparisons()}
            className='whitespace-nowrap backdrop-blur-sm border-green-900 bg-green-900 bg-opacity-10 hover:bg-green-900 hover:bg-opacity-30'
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
        className='backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-30'
      >
        <Edit size={14} />
      </Button>

      <Button
        tabIndex={tabIndexs?.delete}
        type='button'
        size='icon'
        variant='outline'
        onClick={() => onImageRemove(imageIndex)}
        className='backdrop-blur-sm border-red-900 bg-red-900 bg-opacity-10 hover:bg-red-900 hover:bg-opacity-30'
      >
        <Trash size={14} />
      </Button>
    </div>
  )
}
