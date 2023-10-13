import type { UseFormReturn } from 'react-hook-form';
import * as React from 'react';
export interface InputUIProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
export declare const InputUI: React.ForwardRefExoticComponent<InputUIProps & React.RefAttributes<HTMLInputElement>>;
interface InputPropsBase extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form' | 'type'> {
    id: string;
    label?: string;
    classNameContainer?: string;
    description?: string;
    type?: React.HTMLInputTypeAttribute;
    icon?: React.ReactElement;
    iconDirection?: 'left' | 'right';
}
interface InputPropsReadOnly extends InputPropsBase {
    readOnly: true;
}
interface InputPropsWithForm extends InputPropsBase {
    form: UseFormReturn<any, any, any>;
    readOnly?: false;
}
declare type InputProps = InputPropsReadOnly | InputPropsWithForm;
export declare function Input({ children, id, label, classNameContainer, description, icon, iconDirection, ...rest }: InputProps): JSX.Element;
export {};
