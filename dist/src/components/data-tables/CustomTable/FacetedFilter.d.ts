import { ReactNode } from 'react';
import { TableFilterOption } from './types';
interface FacetedFilterProps {
    id: string;
    label: string;
    icon: ReactNode;
    options: TableFilterOption[];
}
export declare const FacetedFilter: ({ id, icon, label, options }: FacetedFilterProps) => JSX.Element;
export {};
