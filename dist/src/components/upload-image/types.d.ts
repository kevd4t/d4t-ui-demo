import { Dispatch, ReactNode, SetStateAction } from 'react';
import FileResizer from 'react-image-file-resizer';
export interface IImage {
    data_url?: string;
    file?: File | null;
    [key: string]: any;
}
export declare type ImageListType = Array<IImage>;
export declare type onChangeImage = (value: ImageListType, addUpdatedIndex?: number[]) => void;
export declare type ImageExtension = 'png' | 'jpeg' | 'webp';
export declare type QualityNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100;
export interface UploadImageCompress {
    openComparisons?: () => void;
    /**
   * @type Resizer
   * El compresor debe venir de la libreria *"react-image-file-resizer"*
   */
    resizer: typeof FileResizer;
}
export interface UploadImageIcons {
    placeholder?: ReactNode;
    uploadButton?: ReactNode;
}
export interface UploadImageTabIndexs {
    viewCompress?: number;
    upload?: number;
    change?: number;
    delete?: number;
}
export interface IMultiUploadImage {
    data_url: string;
    file: {
        original: {
            preview: string;
            file: File;
            size: {
                formated: string;
                bytes: number;
            };
        };
        compressed: {
            preview: string;
            file: File;
            size: {
                formated: string;
                bytes: number;
            };
        };
    };
    [key: string]: any;
}
export interface FormatImage {
    width?: number;
    height?: number;
    extension?: ImageExtension;
    quality?: QualityNumber;
    rotation?: number;
}
export declare type SetMultiUploadImage = Dispatch<SetStateAction<IMultiUploadImage>>;
export declare type OnChangeMultipleImage = (image: IMultiUploadImage) => void;
export declare type OnRemoveImage = (image: IImage) => void;
export declare type OnEditImage = (image: IImage) => void;
export interface IMultiUploadImageProps {
    initialPreview?: string;
    edit?: boolean;
    setUploadImage: SetMultiUploadImage | OnChangeMultipleImage;
    format?: FormatImage;
    label?: string;
    download?: boolean;
    disabled?: boolean;
    emptyClassName?: string;
    imageContainerClassName?: string;
    uploadLabel?: string;
    zoom?: boolean;
    compress?: UploadImageCompress;
    tabIndexs?: UploadImageTabIndexs;
    limit?: number;
    onRemove?: OnRemoveImage;
    onEdit?: OnRemoveImage;
}
export interface IUploadImageProps {
    initialPreview?: string;
    edit?: boolean;
    setUploadImage: SetUploadImage | OnChangeImage;
    format?: FormatImage;
    label?: string;
    download?: boolean;
    disabled?: boolean;
    emptyClassName?: string;
    imageContainerClassName?: string;
    uploadLabel?: string;
    zoom?: boolean;
    compress?: UploadImageCompress;
    tabIndexs?: UploadImageTabIndexs;
    limit?: number;
    onRemove?: OnRemoveImage;
    onEdit?: OnRemoveImage;
}
export interface IUploadImage {
    original: {
        preview: string;
        file: File;
        size: {
            formated: string;
            bytes: number;
        };
    };
    compressed: {
        preview: string;
        file: File;
        size: {
            formated: string;
            bytes: number;
        };
    };
}
export declare type SetUploadImage = Dispatch<SetStateAction<IUploadImage>>;
export declare type OnChangeImage = (image: IUploadImage) => void;
