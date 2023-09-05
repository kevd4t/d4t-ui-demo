import type { UseFormReturn } from 'react-hook-form';
import * as React from 'react';
export interface InputUIProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
export declare const InputUI: React.ForwardRefExoticComponent<InputUIProps & React.RefAttributes<HTMLInputElement>>;
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form' | 'type'> {
    id: string;
    form: UseFormReturn<any, any, any>;
    label?: string;
    classNameContainer?: string;
    description?: string;
    type: React.HTMLInputTypeAttribute | 'pidNumber';
    icon?: React.ReactNode;
    iconDirection?: 'left' | 'right';
}
export declare function Input({ children, id, form, label, classNameContainer, description, defaultValue, icon, iconDirection, ...rest }: InputProps): JSX.Element;
export {};
