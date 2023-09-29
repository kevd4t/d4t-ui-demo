import ImageUploading from 'react-images-uploading'
import { useEffect, useState } from 'react'

import type { IUploadImageProps, ImageListType, onChangeImage } from '../types'
import { compressImage } from '../handleCompressionImage'
import { convertBytes } from '../../../lib/utils'

import { ImageWithoutZoom } from './ImageWithoutZoom'
import { ImageWithZoom } from './ImageWithZoom'
import { UploadImageActions } from './Actions'
import { LoadImage } from './LoadImage'
import { Label } from '../../label'

export const UploadImage = ({
  initialPreview = null,
  setUploadImage,
  format,
  label,
  uploadLabel,
  tabIndexs,
  disabled,
  emptyClassName,
  imageContainerClassName,
  zoom,
  compress
}: IUploadImageProps) => {
  const [localImage, setLocalImage] = useState<ImageListType>(initialPreview ? [{ data_url: initialPreview as string, file: null }] : [])

  const onChangeImage: onChangeImage = async (imageList, addUpdateIndex) => {
    const originalFile = imageList[0]?.file
    const originalDataUrl = imageList[0]?.data_url

    if (!originalFile) {
      setLocalImage([])
      setUploadImage({ original: null, compressed: null })
    }

    setLocalImage(imageList)
    const originalSize = convertBytes(imageList[0]?.file.size)

    if (compress?.resizer && originalFile) {
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

      setUploadImage({
        original: {
          preview: originalDataUrl as string,
          file: originalFile,
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

      return
    }

    setUploadImage({
      original: {
        preview: imageList[0]?.data_url as string,
        file: imageList[0]?.file,
        size: { formated: originalSize, bytes: imageList[0]?.file.size }
      },
      compressed: null
    })
  }

  useEffect(() => {
    if (initialPreview) {
      setLocalImage([{ data_url: initialPreview as string, file: null }])
    }
  }, [initialPreview])

  return (
    <div className='w-full h-full'>
      {label && <Label>{label}</Label>}

      {label && <div className='my-2'></div>}

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
                            <div key={index} className='imagen-container w-full flex flex-col justify-center items-center relative'>
                              {
                                zoom
                                  ? <ImageWithZoom imageContainerClassName={imageContainerClassName} src={image?.data_url} />
                                  : <ImageWithoutZoom imageContainerClassName={imageContainerClassName} previewUrl={image?.data_url} />
                              }

                              <UploadImageActions
                                disabled={disabled}
                                imageIndex={index}
                                setUploadImage={setUploadImage}
                                onImageRemove={onImageRemove}
                                onImageUpdate={onImageUpdate}
                                compress={compress}
                                tabIndexs={tabIndexs}
                                setLocalImage={setLocalImage}
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
