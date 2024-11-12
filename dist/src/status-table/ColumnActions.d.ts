import { TColumnActions } from '../lib/types/tables';
import { IStatus } from '../lib/types/status';
interface ISubCategoryColumnActionsProps {
    status: IStatus;
    actions?: TColumnActions;
    itemIdx?: number;
}
export declare const StatusColumnActions: ({ status, actions, itemIdx }: ISubCategoryColumnActionsProps) => import("react").JSX.Element;
export {};
