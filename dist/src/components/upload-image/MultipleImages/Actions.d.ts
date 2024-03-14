/// <reference types="react" />
import { UploadImageCompress, UploadImageTabIndexs } from '../types';
interface UploadImageActionsProps {
    imageIndex: number;
    compress?: UploadImageCompress;
    tabIndexs?: UploadImageTabIndexs;
    onImageUpdate: (index: number) => void;
    onImageRemove: (index: number) => void;
    disabled?: boolean;
    src?: string;
    download?: boolean;
    handleOnRemoveImage: (idxImageRemoved: number) => void;
}
export declare const MultiUploadImageActions: ({ imageIndex, compress, tabIndexs, onImageUpdate, onImageRemove, disabled, download, handleOnRemoveImage, src }: UploadImageActionsProps) => JSX.Element;
export {};
