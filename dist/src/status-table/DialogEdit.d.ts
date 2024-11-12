import { default as React, Dispatch } from 'react';
import { IStatus } from '../lib/types';
interface IDialogDetailSubcategoryProps {
    status: IStatus;
    isOpenEdit: boolean;
    setOpenEdit: Dispatch<boolean>;
}
export declare const DialogEditStatus: ({ status, isOpenEdit, setOpenEdit }: IDialogDetailSubcategoryProps) => React.JSX.Element;
export {};
