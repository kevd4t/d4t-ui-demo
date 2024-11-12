import { ColumnDef } from '@tanstack/react-table';
import { IGetEntityColumnsParams } from '../lib/types/tables';
import { IStatus } from '../lib/types/status';
export declare const statusColumns: ColumnDef<IStatus>[];
export declare const getStatusColumns: ({ selection, actions, id }: IGetEntityColumnsParams) => ColumnDef<IStatus>[];
