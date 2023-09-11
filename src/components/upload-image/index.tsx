import ImageUploading from 'react-images-uploading'
import { useState } from 'react'

import type { IUploadImageProps, ImageListType, onChangeImage } from './types'
import { compressImage } from './handleCompressionImage'
import { convertBytes } from '../../lib/utils'

import { ImageWithoutZoom } from './ImageWithoutZoom'
import { ImageWithZoom } from './ImageWithZoom'
import { UploadImageActions } from './Actions'
import { LoadImage } from './LoadImage'
import { Label } from '../label'

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
