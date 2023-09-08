export interface ImageType {
    data_url?: string;
    file?: File;
    [key: string]: any;
}
export declare type ImageListType = Array<ImageType>;
export declare type onChangeImage = (value: ImageListType, addUpdatedIndex?: number[]) => void;
