import { SetStateAction, useState, Dispatch } from 'react'
import ImageUploading from 'react-images-uploading'
import { IconPhotoPlus } from '@tabler/icons-react'
import Zoom from 'react-medium-image-zoom'

import type { ImageListType, onChangeImage, IUploadImage, IUploadImageProps } from '../types'
import { compressImage } from '../handleCompressionImage'
import { cn, convertBytes } from '../../../lib/utils'

import { Button } from '../../button'
import { Label } from '../../label'

interface IMultipleUploadImageProps extends Omit<IUploadImageProps, 'setUploadImage'> {
  setUploadImage: Dispatch<SetStateAction<IUploadImage[]>>
}

export const MultipleImages = ({
  label,
  setUploadImage,
  format,
  uploadLabel,
  tabIndexs,
  emptyClassName,
  imageContainerClassName,
  icons,
  zoom,
  compress
}: IMultipleUploadImageProps) => {
  const [localImage, setLocalImage] = useState<ImageListType>([])

  const onChange = (imageList) => {
    // const originalFile = imageList.slice(-1)[0]?.file
    // console.log({ originalFile })
    setLocalImage(imageList)
  }

  const onChangeImage: onChangeImage = async (imageList, addUpdateIndex) => {
    setLocalImage(imageList)

    const lastImage = imageList?.slice(-1)[0]
    const originalUrl = lastImage?.data_url
    const originalFile = lastImage?.file

    if (!originalFile) {
      setLocalImage(([]))
      setUploadImage([])
      return
    }

    const originalSize = convertBytes(originalFile.size)

    if (compress?.resizer) {
      const { data_url: compressedUrl, file: compressedFile } = await compressImage({
        resizer: compress?.resizer,
        imageFile: originalFile,
        quality: format?.quality || 10,
        maxWidth: format?.width || 500,
        maxHeight: format?.width || 500,
        compressFormat: format?.extension || 'png',
        rotation: format?.rotation || 0
      })

      const compreesedSize = convertBytes(compressedFile.size)

      setUploadImage(prevState => [
        ...prevState,
        {
          original: {
            preview: originalUrl as string,
            file: originalFile,
            size: { formated: originalSize, bytes: originalFile.size }
          },
          compressed: {
            preview: compressedUrl?.toString() as string,
            file: compressedFile,
            size: { formated: compreesedSize, bytes: compressedFile.size }
          }
        }
      ])

      return
    }

    setUploadImage(prevState => [
      ...prevState,
      {
        original: {
          preview: imageList.slice(-1)[0]?.data_url as string,
          file: imageList.slice(-1)[0]?.file,
          size: {
            formated: originalSize,
            bytes: imageList.slice(-1)[0]?.file.size
          }
        },
        compressed: null
      }
    ])
  }

  return (
    <div className='w-full'>
      {label && <Label>{label}</Label>}

      <div className='my-2'></div>

      <ImageUploading
        multiple
        value={localImage}
        dataURLKey='data_url'
        onChange={onChangeImage}
        acceptType={['webp', 'png', 'jpeg']}
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
                              <div key={index} className='imagen-container w-full flex flex-col justify-center items-center'>
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

                                  <Button
                                    tabIndex={tabIndexs?.change} className='max-w-[116.33px] w-full' type='button' onClick={() => onImageUpdate(index)}>
                                    Cambiar
                                  </Button>

                                  <Button
                                    tabIndex={tabIndexs?.delete}
                                    className='max-w-[116.33px] w-full'
                                    type='button'
                                    onClick={() => {
                                      // setLocalImage(prevState => prevState.slice(index))
                                      onImageRemove(index)
                                    }}
                                  >
                                    Eliminar
                                  </Button>
                                </div>
                              </div>
                            )
                          })
                        }

                        <div className='imagen-container'>
                          <div
                            {...dragProps}
                            className={cn(`w-full h-[237px] ${isDragging ? 'border-indigo-600' : 'border-slate-50'} flex flex-col justify-center items-center border-dashed border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`, imageContainerClassName)}>
                            <Button
                              type='button'
                              variant='outline'
                              className='p-2 h-min'
                              onClick={onImageUpload}
                            >
                              <IconPhotoPlus className='w-8 h-8' />
                            </Button>
                          </div>
                        </div>
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

                        {icons?.placeholder || <IconPhotoPlus className='text-zinc-400 w-10 h-10' />}

                        <Button type='button' tabIndex={tabIndexs?.upload} className={`mt-2 ${isDragging && 'text-indigo-600'}`} onClick={onImageUpload}>
                          {icons?.uploadButton}
                          {uploadLabel || 'Cargar Imagen'}
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
