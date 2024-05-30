import { UseFormReturn } from 'react-hook-form';
import { ReactNode } from 'react';
interface SearchQueryProps {
    id: string;
    label: string;
    form: UseFormReturn<any, any, any>;
    icon?: ReactNode;
    queryText: string;
}
export declare const SearchQuery: ({ id, form, label, icon, queryText }: SearchQueryProps) => JSX.Element;
export {};
