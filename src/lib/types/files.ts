export interface ImageType {
  dataURL?: string
  file?: File
  [key: string]: any
}

export declare type ImageListType = Array<ImageType>

export type onChangeImage = (value: ImageListType, addUpdatedIndex?: number[]) => void
