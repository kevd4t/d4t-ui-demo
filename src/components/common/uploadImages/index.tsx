import ImageUploading from 'react-images-uploading'
import { IconPhotoPlus } from '@tabler/icons-react'

import { ImageListType, onChangeImage } from '@/lib/types/files'
import { cn } from '@/lib/utils'
import { Label } from '../labels'
import { Button } from '@/components/ui'

interface IUploadImageProps {
  imageToUpload: ImageListType
  onChange: onChangeImage
  label?: string
  emptyClassName?: string
}

export const UploadImage = ({ imageToUpload, onChange, label, emptyClassName }: IUploadImageProps) => {
  return (
    <div>
      { label && <Label>{label}</Label> }

      <ImageUploading
        value={imageToUpload}
        onChange={onChange}
        dataURLKey='data_url'
        acceptType={['webp', 'png']}
      >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          <>
            {
              (imageList.length >= 1)
                ? <div>
                  {
                    imageList.map((image, index) => (
                      <div key={index} className ='w-full flex flex-col justify-center items-center'>
                        <div className='w-full h-[235px]'>
                          <img
                            src={image.data_url}
                            alt='image'
                            className='rounded-md object-contain m-auto h-full'
                            style={{ width: '-webkit-fill-available' }}
                          />
                        </div>

                        <div className='mt-2 gap-x-2 w-full flex justify-center items-start'>
                          <Button className='max-w-[116.33px] w-full' type='button' onClick={() => onImageUpdate(index)}>
                              Cambiar
                          </Button>

                          <Button className='max-w-[116.33px] w-full' type='button' onClick={() => onImageRemove(index)}>
                              Eliminar
                          </Button>
                        </div>
                      </div>
                    ))
                  }
                </div>
                : <>
                  <div
                    {...dragProps}
                    className={cn(
                      `${isDragging ? 'border-indigo-600' : 'border-gray-300'}`,
                      'h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center',
                      emptyClassName
                    )}
                  >
                    <IconPhotoPlus className='text-zinc-500 w-10 h-10' />

                    <span className={`${isDragging && 'text-indigo-600 underline'} text-blue-400 hover:text-blue-600 cursor-pointer`} onClick={onImageUpload}>
                    Sube una imagen
                    </span>

                    <span>o arrastra y suelta una imagen</span>
                  </div>
                </>
            }
          </>
        )}
      </ImageUploading>
    </div>
  )
}
