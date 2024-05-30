import { UseFormReturn } from 'react-hook-form';
import { ReactNode } from 'react';
import { ITableFilterOption } from './types';
interface FacetedFilterProps {
    form: UseFormReturn<any, any, any>;
    id: string;
    label: string;
    icon: ReactNode;
    options: ITableFilterOption[];
    onSubmit: any;
}
export declare const FacetedFilter: ({ id, form, icon, label, options, onSubmit }: FacetedFilterProps) => JSX.Element;
export {};
