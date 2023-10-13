/// <reference types="react" />
import type { UseFormReturn } from 'react-hook-form';
declare type TPIDTypesKeys = 'VENEZUELAN' | 'JURIDICAL' | 'FOREIGN' | 'PASSPORT' | 'GOVERNMENTAL';
export declare type PIDValue = 'v' | 'e' | 'j' | 'g' | 'p';
interface FormatCITypesResult {
    label: string;
    value: PIDValue;
}
export declare const formatCITypes: (selectedTypes?: TPIDTypesKeys[]) => FormatCITypesResult[];
export declare type TComboxItem = {
    value: string;
    label: string;
    image?: string;
    icon?: React.ReactNode;
};
export interface PIDType {
    id?: 'pidType' | string;
    tabIndex?: number;
    buttonClassName?: string;
    popoverClassName?: string;
    notFoundLabel?: string;
    ctaPlaceholder?: string;
    placeholder?: string;
    label?: string;
    defaultValue?: PIDValue;
    items?: TComboxItem[];
    disabled?: boolean;
}
export interface PIDNumber {
    id?: 'pidNumber' | string;
    tabIndex?: number;
    placeholder?: string;
    maxLength?: number;
    disabled?: boolean;
    defaultValue?: string;
}
export interface PID {
    type?: PIDType;
    number?: PIDNumber;
}
export interface PIDProps {
    label: string;
    form: UseFormReturn<any, any, any>;
    pid?: PID;
}
export declare function InputPID({ form, pid: dni, }: PIDProps): JSX.Element;
export {};
