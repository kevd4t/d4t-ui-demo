import type { TextareaHTMLAttributes } from 'react';
interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    register?: any;
    messageErrors?: any;
    label: string;
    classNameContainer?: string;
    inputErrors?: any;
    id: string;
}
export declare const TextArea: ({ children, id, register, messageErrors, label, classNameContainer, inputErrors, ...rest }: InputProps) => JSX.Element;
export {};
