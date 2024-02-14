/// <reference types="react" />
import { UncontrolledProps } from 'react-medium-image-zoom';
interface ImageWithZoomProps extends Omit<UncontrolledProps, 'children'> {
    previewUrl: string;
    alt?: string;
    imageContainerClassName?: string;
}
export declare const ImageWithZoom: ({ previewUrl, alt, imageContainerClassName, ...rest }: ImageWithZoomProps) => JSX.Element;
export {};
