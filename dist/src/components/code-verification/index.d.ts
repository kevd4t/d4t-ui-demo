import { HTMLAttributes } from 'react';
export interface ICodeVerificationProps extends HTMLAttributes<HTMLDivElement> {
    complete: boolean;
    onComplete: (code: any) => void;
    validate?: string | RegExp | string[] | ((key: string) => boolean);
    disabled?: boolean;
    tabIndex?: number;
    autoFocus?: boolean;
    format?: (char: string) => string;
    containerClassName?: string;
}
export declare const CodeVerification: ({ complete, onComplete, validate, disabled, tabIndex, autoFocus, format, containerClassName, className }: ICodeVerificationProps) => JSX.Element;
