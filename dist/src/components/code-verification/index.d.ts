import { HTMLAttributes } from 'react';
export interface ICodeVerificationProps extends HTMLAttributes<HTMLDivElement> {
    complete: boolean;
    onComplete: (code: any) => void;
    validate?: string | RegExp | string[] | ((key: string) => boolean);
    disabled?: boolean;
    tabIndex?: number;
    autoFocus?: boolean;
    format?: (char: string) => string;
    containerClassName: any;
}
export declare const CodeVerification: ({ complete, onComplete, validate, disabled, tabIndex, autoFocus, format, containerClassName }: ICodeVerificationProps) => JSX.Element;
