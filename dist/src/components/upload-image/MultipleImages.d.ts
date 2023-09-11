import { SetStateAction, Dispatch } from 'react';
import type { IUploadImage, IUploadImageProps } from './types';
interface IMultipleUploadImageProps extends Omit<IUploadImageProps, 'setUploadImage'> {
    setUploadImage: Dispatch<SetStateAction<IUploadImage[]>>;
}
export declare const MultipleImages: ({ label, setUploadImage, format, uploadLabel, tabIndexs, emptyClassName, imageContainerClassName, icons, zoom, compress }: IMultipleUploadImageProps) => JSX.Element;
export {};
