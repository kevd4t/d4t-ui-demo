import { Dispatch, SetStateAction } from 'react';
import { ImageListType, OnChangeImage, SetUploadImage, UploadImageCompress, UploadImageTabIndexs } from '../types';
interface UploadImageActionsProps {
    src?: string;
    download?: boolean;
    imageIndex: number;
    disabled?: boolean;
    compress?: UploadImageCompress;
    tabIndexs?: UploadImageTabIndexs;
    onImageUpdate: (index: number) => void;
    onImageRemove: (index: number) => void;
    setUploadImage: SetUploadImage | OnChangeImage;
    setLocalImage: Dispatch<SetStateAction<ImageListType>>;
}
export declare const UploadImageActions: (props: UploadImageActionsProps) => JSX.Element;
export {};
