import { type SetStateAction, type Dispatch } from "react";
import type { IUploadImage, IUploadImageProps, IImage } from "../..";
interface IMultipleUploadImageProps extends Omit<IUploadImageProps, "setUploadImage" | "initialPreview"> {
    setUploadImages: Dispatch<SetStateAction<IUploadImage[]>>;
    initialPreview?: IImage[];
}
export declare const MultipleImages: (props: IMultipleUploadImageProps) => JSX.Element;
export {};
