import { Dispatch, SetStateAction } from 'react';
import { ImageListType, OnChangeImage, SetUploadImage, UploadImageCompress, UploadImageTabIndexs } from '../types';
interface UploadImageActionsProps {
    imageIndex: number;
    compress?: UploadImageCompress;
    tabIndexs?: UploadImageTabIndexs;
    onImageUpdate: (index: number) => void;
    onImageRemove: (index: number) => void;
    setUploadImage: SetUploadImage | OnChangeImage;
    setLocalImage: Dispatch<SetStateAction<ImageListType>>;
}
export declare const UploadImageActions: ({ imageIndex, compress, tabIndexs, onImageUpdate, setUploadImage, onImageRemove, setLocalImage }: UploadImageActionsProps) => JSX.Element;
export {};
