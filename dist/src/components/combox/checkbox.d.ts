import { type ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';
interface Option {
    id: string;
    label: string;
    value: string;
    icon?: ReactNode;
}
interface ComboxCheckBoxProps {
    id: string;
    form: UseFormReturn<any, any, any>;
    options: Option[];
    label?: string;
    placeholder?: string;
    description?: string;
    icon?: ReactNode;
    classNameContainer?: string;
    tabIndex?: number;
}
export declare const ComboxCheckbox: ({ form, id, description, icon, placeholder, label, tabIndex, options, classNameContainer }: ComboxCheckBoxProps) => JSX.Element;
export {};
