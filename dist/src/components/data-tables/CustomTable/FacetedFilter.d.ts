import { ReactNode } from 'react';
import { ITableFilterOption } from './types';
interface FacetedFilterProps {
    id: string;
    label: string;
    icon: ReactNode;
    options: ITableFilterOption[];
}
export declare const FacetedFilter: ({ id, icon, label, options }: FacetedFilterProps) => JSX.Element;
export {};
