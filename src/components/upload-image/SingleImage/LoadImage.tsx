import React from 'react'

import { cn } from '../../../lib/utils'
import { Button } from '../../button'
import { ImagePlus } from 'lucide-react'

export const LoadImage = ({ dragProps, isDragging, emptyClassName, tabIndexs, uploadLabel, onImageUpload }) => {
  return (
    <div
      {...dragProps}
      className={cn(
        `${isDragging ? 'border-indigo-600' : 'border-gray-300'}`,
        'h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center',
        emptyClassName
      )}
    >

      <Button
        size='icon'
        type='button'
        variant='outline'
        tabIndex={tabIndexs?.upload}
        className={`mt-2 ${isDragging && 'text-indigo-600'}`} onClick={onImageUpload}
      >
        <ImagePlus size={22} />
      </Button>
      <span className='font-normal text-sm text-zinc-500'>o arrastra y suelta una imagen</span>
    </div>
  )
}
