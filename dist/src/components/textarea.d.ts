import * as React from 'react';
import { UseFormReturn } from 'react-hook-form';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const TextareaUI: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export interface ITextareaProps extends Omit<TextareaProps, 'form'> {
    id: string;
    form: UseFormReturn<any, any, any>;
    label?: string;
    className?: string;
    description?: string;
    placeholder?: string;
    containerClassName?: string;
}
declare const TextArea: ({ id, form, label, className, description, placeholder, containerClassName, ...rest }: ITextareaProps) => JSX.Element;
export { TextareaUI, TextArea };
