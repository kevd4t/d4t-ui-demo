import * as React from 'react';
declare const Breadcrumb: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "key" | keyof React.HTMLAttributes<HTMLElement>> & {
    separator?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "key" | keyof React.OlHTMLAttributes<HTMLOListElement>> & React.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "key" | keyof React.LiHTMLAttributes<HTMLLIElement>> & React.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "key" | keyof React.AnchorHTMLAttributes<HTMLAnchorElement>> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & React.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React.ComponentProps<'li'>): JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React.ComponentProps<'span'>): JSX.Element;
    displayName: string;
};
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis, };
