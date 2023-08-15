import { Control, RegisterOptions } from 'react-hook-form';
import type { ReactNode, HTMLAttributes } from 'react';
interface IGenericSelectItems {
    label: string;
    icon?: ReactNode;
    value: boolean | string | number;
}
interface IGenericSelectProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
    value?: string;
    label: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    items?: IGenericSelectItems[];
    tabIndex?: number;
    fieldControlled?: {
        rules?: RegisterOptions<any>;
        control: Control<any, any>;
        formItemClassName?: string;
        formSelectClassName?: string;
    };
}
export declare const GenericSelect: ({ id, value, label, defaultValue, onValueChange, placeholder, items, fieldControlled, tabIndex, ...rest }: IGenericSelectProps) => JSX.Element;
export {};
