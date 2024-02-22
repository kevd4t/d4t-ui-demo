import { type ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';
interface CheckBoxFieldProps {
    form: UseFormReturn<any, any, any>;
    id: string;
    description: string;
    icon: ReactNode;
    placeholder: string;
    label: string;
    tabIndex: number;
    options: any[];
    classNameContainer: string;
    classNamePopover: string;
    disabled?: boolean;
}
export declare const CheckboxField: ({ form, id, description, icon, placeholder, label, tabIndex, options, classNameContainer, classNamePopover, disabled }: CheckBoxFieldProps) => JSX.Element;
export {};
