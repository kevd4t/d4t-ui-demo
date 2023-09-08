import ImageUploading from 'react-images-uploading'
import { IconPhotoPlus } from '@tabler/icons-react'
import Zoom from 'react-medium-image-zoom'

import type { ImageListType, onChangeImage, ReactNode } from '@/lib/types'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui'
import { Label } from '../labels'
// import { GridSlider } from '../sliders/GridSlider'

interface IUploadImageProps {
  imageToUpload: ImageListType
  onChange: onChangeImage
  label?: string
  emptyClassName?: string
  imageContainerClassName?: string
  uploadLabel?: string
  zoom?: boolean
  multiple?: boolean
  compress?: {
    openComparisons: () => void
  }
  icons?: {
    placeholder?: ReactNode
    uploadButton?: ReactNode
  }
  tabIndexs?: {
    viewCompress?: number
    upload?: number
    change?: number
    delete?: number
  }
}

export const MultipleImages = ({
  imageToUpload,
  onChange,
  label,
  uploadLabel,
  tabIndexs,
  emptyClassName,
  imageContainerClassName,
  icons,
  zoom,
  compress
}: IUploadImageProps) => {
  return (
    <div>
      { label && <Label>{label}</Label> }

      <div className='my-2'></div>

      <ImageUploading
        multiple
        onChange={onChange}
        value={imageToUpload}
        dataURLKey='data_url'
        acceptType={['webp', 'png', 'jpg', 'jpeg']}
      >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => {
          return (
            (
              <>
                {
                  (imageList.length >= 1)
                    ? (
                      <div className='grid grid-cols-2 grid-flow-row gap-4'>
                        {
                          imageList.map((image, index) => {
                            return (
                              <div key={index} className ='imagen-container w-full flex flex-col justify-center items-center'>
                                {
                                  zoom
                                    ? (
                                      <Zoom>
                                        <div className={cn('w-full h-[237px] bg-slate-50 bg-opacity-10 rounded-md p-2', imageContainerClassName)}>
                                          <img
                                            src={image.data_url}
                                            alt='image'
                                            className='rounded-md object-contain m-auto h-full'
                                            style={{ width: '-webkit-fill-available' }}
                                          />
                                        </div>
                                      </Zoom>
                                    )
                                    : (
                                      <div className={cn('w-full h-[237px]', imageContainerClassName)}>
                                        <img
                                          src={image.data_url}
                                          alt='image'
                                          className='rounded-md object-contain m-auto h-full'
                                          style={{ width: '-webkit-fill-available' }}
                                        />
                                      </div>
                                    )
                                }

                                <div className='mt-2 gap-x-2 w-full flex justify-center items-start'>
                                  {
                                    compress && (
                                      <Button tabIndex={tabIndexs?.viewCompress} className='whitespace-nowrap' type='button' onClick={() => compress.openComparisons()}>
                                    Ver Compresión
                                      </Button>
                                    )
                                  }

                                  <Button tabIndex={tabIndexs?.change} className='max-w-[116.33px] w-full' type='button' onClick={() => onImageUpdate(index)}>
                                Cambiar
                                  </Button>

                                  <Button tabIndex={tabIndexs?.delete} className='max-w-[116.33px] w-full' type='button' onClick={() => onImageRemove(index)}>
                                Eliminar
                                  </Button>
                                </div>
                              </div>
                            )
                          })
                        }

                        <div className ='imagen-container'>
                          <div
                            {...dragProps}
                            className={cn(`w-full h-[237px] ${isDragging ? 'border-indigo-600' : 'border-slate-50'} flex flex-col justify-center items-center border-dashed border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`, imageContainerClassName)}>
                            <Button
                              type='button'
                              variant='outline'
                              className='p-2 h-min'
                              onClick={onImageUpload}
                            >
                              <IconPhotoPlus className='w-8 h-8'/>
                            </Button>
                          </div>
                        </div>

                        {/* <GridSlider
                          zoom={zoom}
                          images={imageList}
                        /> */}

                        {/* {
                          imageList.map((image, index) => {
                            return (
                              <div key={index} className ='imagen-container w-full flex flex-col justify-center items-center'>
                                {
                                  zoom
                                    ? (
                                      <Zoom>
                                        <div className={cn('w-full h-[237px]', imageContainerClassName)}>
                                          <img
                                            src={image.data_url}
                                            alt='image'
                                            className='rounded-md object-contain m-auto h-full'
                                            style={{ width: '-webkit-fill-available' }}
                                          />
                                        </div>
                                      </Zoom>
                                    )
                                    : (
                                      <div className={cn('w-full h-[237px]', imageContainerClassName)}>
                                        <img
                                          src={image.data_url}
                                          alt='image'
                                          className='rounded-md object-contain m-auto h-full'
                                          style={{ width: '-webkit-fill-available' }}
                                        />
                                      </div>
                                    )
                                }

                                <div className='mt-2 gap-x-2 w-full flex justify-center items-start'>
                                  {
                                    compress && (
                                      <Button tabIndex={tabIndexs?.viewCompress} className='whitespace-nowrap' type='button' onClick={() => compress.openComparisons()}>
                                    Ver Compresión
                                      </Button>
                                    )
                                  }

                                  <Button tabIndex={tabIndexs?.change} className='max-w-[116.33px] w-full' type='button' onClick={() => onImageUpdate(index)}>
                                Cambiar
                                  </Button>

                                  <Button tabIndex={tabIndexs?.delete} className='max-w-[116.33px] w-full' type='button' onClick={() => onImageRemove(index)}>
                                Eliminar
                                  </Button>
                                </div>
                              </div>
                            )
                          })
                        } */}
                      </div>
                    )
                    : <>
                      <div
                        {...dragProps}
                        className={cn(
                          `${isDragging ? 'border-indigo-600' : 'border-gray-300'}`,
                          'h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center',
                          emptyClassName
                        )}
                      >

                        { icons?.placeholder || <IconPhotoPlus className='text-zinc-400 w-10 h-10' /> }

                        <Button type='button' tabIndex={tabIndexs?.upload} className={`mt-2 ${isDragging && 'text-indigo-600'}`} onClick={onImageUpload}>
                          { icons?.uploadButton }
                          { uploadLabel || 'Cargar Imagen' }
                        </Button>
                        <span className='font-semibold text-zinc-500'>o arrastra y suelta imagenes</span>
                      </div>
                    </>
                }
              </>
            )
          )
        }}
      </ImageUploading>
    </div>
  )
}
