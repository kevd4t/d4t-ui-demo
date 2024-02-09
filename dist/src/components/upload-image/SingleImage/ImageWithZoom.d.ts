/// <reference types="react" />
import { UncontrolledProps } from 'react-medium-image-zoom';
interface ImageWithZoomProps extends Omit<UncontrolledProps, 'children'> {
    src: string;
    alt?: string;
    imageContainerClassName?: string;
}
export declare const ImageWithZoom: ({ src, alt, imageContainerClassName, ...rest }: ImageWithZoomProps) => JSX.Element;
export {};
