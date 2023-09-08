import type { ImageListType, onChangeImage } from './types';
import { ReactNode } from 'react';
interface IUploadImageProps {
    imageToUpload: ImageListType;
    onChange: onChangeImage;
    label?: string;
    emptyClassName?: string;
    imageContainerClassName?: string;
    uploadLabel?: string;
    zoom?: boolean;
    compress?: {
        openComparisons: () => void;
    };
    icons?: {
        placeholder?: ReactNode;
        uploadButton?: ReactNode;
    };
    tabIndexs?: {
        viewCompress?: number;
        upload?: number;
        change?: number;
        delete?: number;
    };
}
export declare const UploadImage: ({ imageToUpload, onChange, label, uploadLabel, tabIndexs, emptyClassName, imageContainerClassName, icons, zoom, compress }: IUploadImageProps) => JSX.Element;
export {};
