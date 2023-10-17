import { type SetStateAction, type Dispatch } from "react";
import type { IUploadImage, IUploadImageProps } from "../..";
interface IMultipleUploadImageProps extends Omit<IUploadImageProps, "setUploadImage"> {
    setUploadImages: Dispatch<SetStateAction<IUploadImage[]>>;
}
export declare const MultipleImages: ({ label, setUploadImages, format, uploadLabel, tabIndexs, emptyClassName, imageContainerClassName, zoom, compress, limit, }: IMultipleUploadImageProps) => JSX.Element;
export {};
