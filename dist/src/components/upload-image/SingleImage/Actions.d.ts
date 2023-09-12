import { Dispatch, SetStateAction } from 'react';
import { IUploadImage, UploadImageCompress, UploadImageTabIndexs } from '../types';
interface UploadImageActionsProps {
    imageIndex: number;
    compress?: UploadImageCompress;
    tabIndexs?: UploadImageTabIndexs;
    onImageUpdate: (index: number) => void;
    onImageRemove: (index: number) => void;
    setUploadImage: Dispatch<SetStateAction<IUploadImage>>;
}
export declare const UploadImageActions: ({ imageIndex, compress, tabIndexs, onImageUpdate, setUploadImage, onImageRemove }: UploadImageActionsProps) => JSX.Element;
export {};
