import { SlotProps } from 'input-otp';
import * as React from 'react';
declare const InputOTP: React.ForwardRefExoticComponent<(Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "maxLength" | "containerClassName" | "onComplete" | "textAlign" | "pushPasswordManagerStrategy" | "noScriptCSSFallback"> & {
    value?: string;
    onChange?: (newValue: string) => unknown;
    maxLength: number;
    textAlign?: "center" | "right" | "left";
    onComplete?: (...args: any[]) => unknown;
    pushPasswordManagerStrategy?: "none" | "increase-width";
    containerClassName?: string;
    noScriptCSSFallback?: string;
} & {
    render: (props: import('input-otp').RenderProps) => React.ReactNode;
    children?: never;
} & React.RefAttributes<HTMLInputElement>, "ref"> | Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "maxLength" | "containerClassName" | "onComplete" | "textAlign" | "pushPasswordManagerStrategy" | "noScriptCSSFallback"> & {
    value?: string;
    onChange?: (newValue: string) => unknown;
    maxLength: number;
    textAlign?: "center" | "right" | "left";
    onComplete?: (...args: any[]) => unknown;
    pushPasswordManagerStrategy?: "none" | "increase-width";
    containerClassName?: string;
    noScriptCSSFallback?: string;
} & {
    render?: never;
    children: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>, "ref">) & React.RefAttributes<HTMLInputElement>>;
declare const InputOTPGroup: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const InputOTPSlot: React.ForwardRefExoticComponent<SlotProps & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const InputOTPSeparator: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
