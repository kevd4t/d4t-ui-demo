/// <reference types="react" />
import { PinFieldProps } from 'react-pin-field';
export interface ICodeVerificationProps extends PinFieldProps {
    complete: boolean;
    containerClassName?: string;
}
export declare const CodeVerification: ({ complete, onComplete, validate, disabled, tabIndex, autoFocus, format, containerClassName, className, ...rest }: ICodeVerificationProps) => JSX.Element;
