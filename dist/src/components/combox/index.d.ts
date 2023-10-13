import { UseFormReturn } from 'react-hook-form';
import { ReactNode } from 'react';
declare type TGenericComboxItem = {
    value: string;
    label: string;
    image?: string;
    icon?: ReactNode;
};
interface IGenericComboxProps {
    items: TGenericComboxItem[];
    ctaPlaceholder: string;
    notFoundLabel: string;
    id: string;
    form: UseFormReturn<any>;
    label: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    tabIndex?: number;
    buttonClassName?: string;
    popoverClassName?: string;
}
export declare function GenericCombobox({ id, form, label, items, disabled, tabIndex, placeholder, defaultValue, notFoundLabel, ctaPlaceholder, buttonClassName, popoverClassName }: IGenericComboxProps): JSX.Element;
export {};
