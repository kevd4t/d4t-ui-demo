/// <reference types="react" />
import { UploadImageCompress, UploadImageTabIndexs } from './types';
interface UploadImageActionsProps {
    imageIndex: number;
    compress?: UploadImageCompress;
    tabIndexs?: UploadImageTabIndexs;
    onImageUpdate: (index: number) => void;
    onImageRemove: (index: number) => void;
}
export declare const UploadImageActions: ({ imageIndex, compress, tabIndexs, onImageUpdate, onImageRemove }: UploadImageActionsProps) => JSX.Element;
export {};
