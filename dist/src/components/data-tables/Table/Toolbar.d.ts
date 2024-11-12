import { default as React } from 'react';
import { UseFormReturn } from 'react-hook-form';
interface IToolbarProps {
    form: UseFormReturn<any, any, any>;
    onSubmit: (data: any) => Promise<void>;
}
export declare const TableToolbar: ({ form, onSubmit }: IToolbarProps) => React.JSX.Element;
export {};
