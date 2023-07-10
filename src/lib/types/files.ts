export interface ImageType {
  data_url?: string
  file?: File
  [key: string]: any
}

export declare type ImageListType = Array<ImageType>

export type onChangeImage = (value: ImageListType, addUpdatedIndex?: number[]) => void
