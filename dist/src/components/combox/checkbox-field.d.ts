import { type ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ComboxItem } from './types';
interface CheckBoxFieldProps {
    form: UseFormReturn<any, any, any>;
    id: string;
    description: string;
    icon: ReactNode;
    placeholder: string;
    label: string;
    tabIndex: number;
    items: ComboxItem[];
    classNameContainer?: string;
    classNamePopover?: string;
    disabled?: boolean;
}
export declare const CheckboxField: (props: CheckBoxFieldProps) => JSX.Element;
export {};
