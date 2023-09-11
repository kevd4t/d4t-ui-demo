import { IconPhotoPlus } from '@tabler/icons-react'
import React from 'react'

import { cn } from '../../lib/utils'
import { Button } from '../button'

export const LoadImage = ({ dragProps, isDragging, emptyClassName, icons, tabIndexs, uploadLabel, onImageUpload }) => {
  return (
    <div
      {...dragProps}
      className={cn(
        `${isDragging ? 'border-indigo-600' : 'border-gray-300'}`,
        'h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center',
        emptyClassName
      )}
    >

      {icons?.placeholder || <IconPhotoPlus className='text-zinc-400 w-10 h-10' />}

      <Button type='button' tabIndex={tabIndexs?.upload} className={`mt-2 ${isDragging && 'text-indigo-600'}`} onClick={onImageUpload}>
        {icons?.uploadButton}
        {uploadLabel || 'Cargar Imagen'}
      </Button>
      <span className='font-semibold text-zinc-500'>o arrastra y suelta una imagen</span>
    </div>
  )
}
