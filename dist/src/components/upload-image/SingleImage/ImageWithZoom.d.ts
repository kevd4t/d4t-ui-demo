/// <reference types="react" />
import { UncontrolledProps } from 'react-medium-image-zoom';
interface ImageWithZoomProps extends Omit<UncontrolledProps, 'children'> {
    src: string;
    imageContainerClassName?: string;
}
export declare const ImageWithZoom: ({ src, imageContainerClassName }: ImageWithZoomProps) => JSX.Element;
export {};
