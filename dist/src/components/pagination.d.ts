import * as React from 'react';
import { ButtonProps } from './button';
declare const Pagination: {
    ({ className, ...props }: React.ComponentProps<'nav'>): JSX.Element;
    displayName: string;
};
declare const PaginationContent: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "key" | keyof React.HTMLAttributes<HTMLUListElement>> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "key" | keyof React.LiHTMLAttributes<HTMLLIElement>> & React.RefAttributes<HTMLLIElement>>;
declare type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, 'size'> & React.ComponentProps<'a'>;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React.ComponentProps<'span'>): JSX.Element;
    displayName: string;
};
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, };
