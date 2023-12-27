import * as React from "react";
import { type EmblaCarouselType as CarouselApi, type EmblaOptionsType as CarouselOptions, type EmblaPluginType as CarouselPlugin } from "embla-carousel-react";
declare type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin[];
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
declare const Carousel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & CarouselProps & React.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CarouselPrevious: React.ForwardRefExoticComponent<Pick<import("./button").ButtonProps & React.RefAttributes<HTMLButtonElement>, "key" | keyof import("./button").ButtonProps> & React.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: React.ForwardRefExoticComponent<Pick<import("./button").ButtonProps & React.RefAttributes<HTMLButtonElement>, "key" | keyof import("./button").ButtonProps> & React.RefAttributes<HTMLButtonElement>>;
export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, };
