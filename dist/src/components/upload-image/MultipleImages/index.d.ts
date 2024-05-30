import { type SetStateAction, type Dispatch } from "react";
import type { IMultiUploadImage, IMultiUploadImageProps, IImage } from "../..";
interface IMultipleUploadImageProps extends Omit<IMultiUploadImageProps, "setUploadImage" | "initialPreview"> {
    setUploadImages: Dispatch<SetStateAction<IMultiUploadImage[]>>;
    initialPreview?: IImage[];
}
export declare const MultipleImages: (props: IMultipleUploadImageProps) => JSX.Element;
export {};
