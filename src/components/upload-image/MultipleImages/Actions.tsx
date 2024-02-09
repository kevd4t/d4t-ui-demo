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
    <div className='mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2 bg-transparent'>
      {
        compress?.openComparisons && (
          <Button
            size='icon'
            type='button'
            variant='outline'
            tabIndex={tabIndexs?.viewCompress}
            onClick={() => compress.openComparisons()}
            className='whitespace-nowrap text-green-600 backdrop-blur-sm border-green-600 bg-green-600 bg-opacity-10 hover:bg-green-600 hover:bg-opacity-25 hover:text-green-600'
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
        onClick={() => onImageRemove(imageIndex)}
        className='text-red-700 backdrop-blur-sm border-red-700 bg-red-700 bg-opacity-10 hover:bg-red-700 hover:bg-opacity-25 hover:text-red-700'
      >
        <Trash size={14} />
      </Button>
    </div>
  )
}
