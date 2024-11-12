import { default as React, Dispatch } from 'react';
import { IStatus } from '../lib/types/status';
interface IDialogDetailSubcategoryProps {
    status: IStatus;
    isOpenViewModel: boolean;
    setOpenViewModel: Dispatch<boolean>;
}
export declare const DialogDetailStatus: ({ status, isOpenViewModel, setOpenViewModel }: IDialogDetailSubcategoryProps) => React.JSX.Element;
export {};
