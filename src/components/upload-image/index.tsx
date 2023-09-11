import ImageUploading from 'react-images-uploading'
import Resizer from 'react-image-file-resizer'
import { useState } from 'react'

import type { IUploadImageProps, ImageListType, onChangeImage } from './types'
import { convertBytes } from '../../lib/utils'

import { ImageWithoutZoom } from './ImageWithoutZoom'
import { ImageWithZoom } from './ImageWithZoom'
import { UploadImageActions } from './Actions'
import { LoadImage } from './LoadImage'
import { Label } from '../label'

const dataURItoFile = (dataURI: string, filename: string): File => {
  const arr = dataURI.split(',')
  const mimeMatch = arr[0].match(/:(.*?);/)

  if (!mimeMatch) {
    throw new Error('Invalid data URI')
  }

  const mime = mimeMatch[1]
  const bstr = atob(arr[1])
  const buffer = new ArrayBuffer(bstr.length)
  const u8arr = new Uint8Array(buffer)

  for (let i = 0; i < bstr.length; i++) {
    u8arr[i] = bstr.charCodeAt(i)
  }

  return new File([buffer], filename, { type: mime })
}

interface IHandleCompressionImageParams {
  imageFile: File
  quality: number
  maxWidth?: number
  rotation?: number
  minWidth?: number
  maxHeight?: number
  minHeight?: number
  outputType?: string
  compressFormat?: string
}

const compressImage = ({
  imageFile,
  maxWidth = 1080, // Nueva resolución horizontal
  maxHeight = 720, // Nueva resolución vertical
  compressFormat = 'png', // Formato de salida (JPEG, PNG, WEBP)
  quality = 80, // Calidad de compresión (0-100)
  rotation = 0, // Rotación en grados (0, 90, 180, 270)
  outputType = 'base64'
}: IHandleCompressionImageParams): Promise<{ data_url: string | Blob | File | ProgressEvent<FileReader>, file: File }> => {
  return new Promise((resolve) => {
    Resizer?.imageFileResizer(
      imageFile,
      maxWidth,
      maxHeight,
      compressFormat,
      quality,
      rotation,
      async (uri) => {
        const file = dataURItoFile(uri?.toString(), imageFile.name)
        resolve({ data_url: uri, file })
      },
      outputType
    )
  })
}

export const UploadImage = ({
  setUploadImage,
  format,
  label,
  uploadLabel,
  tabIndexs,
  emptyClassName,
  imageContainerClassName,
  icons,
  zoom,
  compress
}: IUploadImageProps) => {
  const [localImage, setLocalImage] = useState<ImageListType>([])

  const onChangeImage: onChangeImage = async (imageList, addUpdateIndex) => {
    const originalFile = imageList[0]?.file
    const originalDataUrl = imageList[0]?.data_url

    if (!originalFile) {
      setLocalImage(([{ data_url: '', file: null }]))
      return
    }

    const { data_url: compressedUrl, file: compressedFile } = await compressImage({
      imageFile: originalFile,
      quality: format?.quality || 10,
      maxWidth: format?.width || 500,
      maxHeight: format?.width || 500,
      compressFormat: format?.extension || 'png',
      rotation: format?.rotation || 0
    })

    const originalSize = convertBytes(imageList[0]?.file.size)
    const compreesedSize = convertBytes(compressedFile.size)

    setLocalImage([{ data_url: originalDataUrl, file: originalFile }])

    setUploadImage({
      original: {
        preview: imageList[0]?.data_url as string,
        file: imageList[0]?.file,
        size: {
          formated: originalSize,
          bytes: imageList[0]?.file.size
        }
      },
      compressed: {
        preview: compressedUrl?.toString() as string,
        file: compressedFile,
        size: {
          formated: compreesedSize,
          bytes: compressedFile.size
        }
      }
    })
  }

  return (
    <div>
      {label && <Label>{label}</Label>}

      <div className='my-2'></div>

      <ImageUploading
        value={localImage}
        onChange={onChangeImage}
        dataURLKey='data_url'
        acceptType={['webp', 'png', 'jpg', 'jpeg']}
      >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => {
          return (
            (
              <>
                {
                  (imageList.length >= 1)
                    ? <div>
                      {
                        imageList.map((image, index) => {
                          return (
                            <div key={index} className='imagen-container w-full flex flex-col justify-center items-center'>
                              {
                                zoom
                                  ? <ImageWithZoom imageContainerClassName={imageContainerClassName} previewUrl={image?.data_url} />
                                  : <ImageWithoutZoom imageContainerClassName={imageContainerClassName} previewUrl={image?.data_url} />
                              }

                              <UploadImageActions
                                imageIndex={index}
                                onImageRemove={onImageRemove}
                                onImageUpdate={onImageUpdate}
                                compress={compress}
                                tabIndexs={tabIndexs}
                              />
                            </div>
                          )
                        })
                      }
                    </div>
                    : <>
                      <LoadImage
                        dragProps={dragProps}
                        emptyClassName={emptyClassName}
                        icons={icons}
                        isDragging={isDragging}
                        onImageUpload={onImageUpload}
                        tabIndexs={tabIndexs}
                        uploadLabel={uploadLabel}
                      />
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
