import { LucideIcon } from 'lucide-react';

export declare function NavMain({ items, }: {
    items: {
        title: string;
        url: string;
        icon?: LucideIcon;
        isActive?: boolean;
        items?: {
            title: string;
            url: string;
        }[];
    }[];
}): import("react").JSX.Element;
