import { SetStateAction, Dispatch } from 'react';
import { IMultiUploadImage, IMultiUploadImageProps, IImage } from '../..';
interface IMultipleUploadImageProps extends Omit<IMultiUploadImageProps, "setUploadImage" | "initialPreview"> {
    setUploadImages: Dispatch<SetStateAction<IMultiUploadImage[]>>;
    initialPreview?: IImage[];
}
export declare const MultipleImages: (props: IMultipleUploadImageProps) => import("react").JSX.Element;
export {};
