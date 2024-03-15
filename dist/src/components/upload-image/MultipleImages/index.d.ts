import { type SetStateAction, type Dispatch } from "react";
import type { IUploadImage, IUploadImageProps } from "../..";
interface IMultipleUploadImageProps extends Omit<IUploadImageProps, "setUploadImage" | "initialPreview"> {
    setUploadImages: Dispatch<SetStateAction<IUploadImage[]>>;
    initialPreview?: [{
        data_url?: string;
        file?: File;
        [key: string]: any;
    }];
}
export declare const MultipleImages: (props: IMultipleUploadImageProps) => JSX.Element;
export {};
