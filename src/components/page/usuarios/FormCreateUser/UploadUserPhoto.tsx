import ImageUploading from 'react-images-uploading'
import { IconUser } from '@tabler/icons-react'
import Zoom from 'react-medium-image-zoom'

import { ImageListType, onChangeImage } from '@/lib/types/files'
import { cn } from '@/lib/utils'
import { Button, Label } from '@/components/ui'

interface IUploadImageProps {
  imageToUpload: ImageListType
  onChange: onChangeImage
  label?: string
  emptyClassName?: string
  zoom?: boolean
  compress?: {
    openComparisons: () => void
  }
  tabIndexs?: {
    viewCompress?: number
    upload?: number
    change?: number
    delete?: number
  }
}

export const UploadUserPhoto = ({ imageToUpload, onChange, label, emptyClassName, tabIndexs, zoom, compress }: IUploadImageProps) => {
  return (
    <div className='w-full h-full'>
      { label && <Label>{label}</Label> }

      <ImageUploading
        value={imageToUpload}
        onChange={onChange}
        dataURLKey='data_url'
        acceptType={['webp', 'png', 'jpg', 'jpeg']}
      >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          <>
            {
              (imageList.length >= 1)
                ? <>
                  {
                    imageList.map((image, index) => (
                      <div key={index} className ='w-full h-full flex flex-col justify-center items-center'>
                        <Button tabIndex={tabIndexs?.viewCompress} className='whitespace-nowrap pb-2' type='button' onClick={() => compress.openComparisons()}>
                          Ver Compresión
                        </Button>

                        {
                          zoom
                            ? (
                              <Zoom>
                                <div className='w-full h-[235px]'>
                                  <img
                                    src={image.data_url}
                                    alt='image'
                                    className='rounded-md object-contain m-auto w-full h-full'
                                    style={{ width: '-webkit-fill-available' }}
                                  />
                                </div>
                              </Zoom>
                            )
                            : (
                              <div className='w-full h-[235px]'>
                                <img
                                  src={image.data_url}
                                  alt='image'
                                  className='rounded-md object-contain m-auto w-full h-full'
                                  style={{ width: '-webkit-fill-available' }}
                                />
                              </div>
                            )
                        }

                        <div className='mt-2 gap-x-2 w-full flex justify-between items-start'>
                          <Button tabIndex={tabIndexs?.change} className='w-full' type='button' onClick={() => onImageUpdate(index)}>
                            Cambiar
                          </Button>

                          <Button tabIndex={tabIndexs?.delete} className='w-full' type='button' onClick={() => onImageRemove(index)}>
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    ))
                  }
                </>
                : <>
                  <div
                    {...dragProps}
                    className={cn(
                      `${isDragging ? 'border-indigo-600' : 'border-gray-300'}`,
                      'w-full h-[223px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center',
                      emptyClassName
                    )}
                  >
                    <IconUser className='text-zinc-500 w-10 h-10' />
                  </div>

                  <Button tabIndex={tabIndexs?.upload} className={`w-full mt-4 ${isDragging ? 'text-indigo-600' : ''}`} type='button' onClick={onImageUpload}>
                    Cargar Foto
                  </Button>
                </>
            }
          </>
        )}
      </ImageUploading>
    </div>
  )
}
