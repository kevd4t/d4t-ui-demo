import { Dispatch, SetStateAction } from 'react';
import { IUploadImage, ImageListType, UploadImageCompress, UploadImageTabIndexs } from '../types';
interface UploadImageActionsProps {
    imageIndex: number;
    compress?: UploadImageCompress;
    tabIndexs?: UploadImageTabIndexs;
    onImageUpdate: (index: number) => void;
    onImageRemove: (index: number) => void;
    setUploadImage: Dispatch<SetStateAction<IUploadImage>>;
    setLocalImage: Dispatch<SetStateAction<ImageListType>>;
}
export declare const UploadImageActions: ({ imageIndex, compress, tabIndexs, onImageUpdate, setUploadImage, onImageRemove, setLocalImage }: UploadImageActionsProps) => JSX.Element;
export {};
