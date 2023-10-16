import { type SetStateAction, type Dispatch, useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { IconPhotoPlus } from "@tabler/icons-react";
import Zoom from "react-medium-image-zoom";

import type {
  ImageListType,
  onChangeImage,
  IUploadImage,
  IUploadImageProps,
} from "../..";
import { compressImage } from "../handleCompressionImage";
import { convertBytes } from "../../../lib/utils";
import { cn } from "../../../lib/utils";

import { ImageWithoutZoom } from "./ImageWithoutZoom";
import { Button, Label } from "../../../components";
import { MultiUploadImageActions } from "./Actions";
import { ImageWithZoom } from "./ImageWithZoom";
import { LoadMultiImages } from "./LoadImage";

interface IMultipleUploadImageProps
  extends Omit<IUploadImageProps, "setUploadImage"> {
  setUploadImages: Dispatch<SetStateAction<IUploadImage[]>>;
}

export const MultipleImages = ({
  label,
  setUploadImages,
  format,
  uploadLabel,
  tabIndexs,
  emptyClassName,
  imageContainerClassName,
  zoom,
  compress,
  limit,
}: IMultipleUploadImageProps) => {
  const [localImage, setLocalImage] = useState<ImageListType>([]);

  useEffect(() => {
    console.log("Local images length", localImage.length);
  }, [localImage.length]);

  const onChangeImage: onChangeImage = async (imageList, addUpdateIndex) => {
    setLocalImage(imageList);

    const imageListFormated = imageList.map(async (image) => {
      const { data_url: compressedUrl, file: compressedFile } =
        await compressImage({
          resizer: compress.resizer,
          imageFile: image.file,
          quality: format?.quality || 10,
          maxWidth: format?.width || 500,
          maxHeight: format?.width || 500,
          compressFormat: format?.extension || "png",
          rotation: format?.rotation || 0,
        });

      const originalSize = convertBytes(imageList[0]?.file.size);
      const compreesedSize = convertBytes(compressedFile.size);

      return {
        original: {
          preview: imageList[0]?.data_url as string,
          file: imageList[0]?.file,
          size: {
            formated: originalSize,
            bytes: imageList[0]?.file.size,
          },
        },
        compressed: {
          preview: compressedUrl?.toString() as string,
          file: compressedFile,
          size: {
            formated: compreesedSize,
            bytes: compressedFile.size,
          },
        },
      };
    });

    Promise.all(imageListFormated).then(setUploadImages);
  };
  return (
    <div>
      {label && <Label>{label}</Label>}

      <div className="my-2"></div>

      <ImageUploading
        multiple
        value={localImage}
        dataURLKey="data_url"
        onChange={onChangeImage}
        acceptType={["webp", "png", "jpeg", "jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => {
          return (
            <>
              {imageList.length >= 1 ? (
                <div className="grid grid-cols-2 grid-flow-row gap-4">
                  {imageList.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="imagen-container w-full flex flex-col justify-center items-center relative"
                      >
                        {zoom ? (
                          <ImageWithZoom
                            imageContainerClassName={imageContainerClassName}
                            previewUrl={image?.data_url}
                          />
                        ) : (
                          <ImageWithoutZoom
                            imageContainerClassName={imageContainerClassName}
                            previewUrl={image?.data_url}
                          />
                        )}

                        <MultiUploadImageActions
                          imageIndex={index}
                          onImageRemove={onImageRemove}
                          onImageUpdate={onImageUpdate}
                          compress={compress}
                          tabIndexs={tabIndexs}
                        />
                      </div>
                    );
                  })}

                  {localImage.length < limit && (
                    <div className="imagen-container">
                      <div
                        {...dragProps}
                        className={cn(
                          `w-full h-[237px] ${
                            isDragging ? "border-indigo-600" : "border-slate-50"
                          } flex flex-col justify-center items-center border-dashed border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                          imageContainerClassName
                        )}
                      >
                        <Button
                          type="button"
                          variant="outline"
                          className="p-2 h-min"
                          onClick={onImageUpload}
                        >
                          <IconPhotoPlus className="w-8 h-8" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <LoadMultiImages
                  dragProps={dragProps}
                  emptyClassName={emptyClassName}
                  isDragging={isDragging}
                  onImageUpload={onImageUpload}
                  tabIndexs={tabIndexs}
                  uploadLabel={uploadLabel}
                />
              )}
            </>
          );
        }}
      </ImageUploading>
    </div>
  );
};
