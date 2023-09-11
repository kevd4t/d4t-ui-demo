export interface IHandleCompressionImageParams {
    imageFile: File;
    quality: number;
    maxWidth?: number;
    rotation?: number;
    minWidth?: number;
    maxHeight?: number;
    minHeight?: number;
    outputType?: string;
    compressFormat?: string;
}
export declare const compressImage: ({ imageFile, maxWidth, maxHeight, compressFormat, quality, rotation, outputType }: IHandleCompressionImageParams) => Promise<{
    data_url: string | Blob | File | ProgressEvent<FileReader>;
    file: File;
}>;
