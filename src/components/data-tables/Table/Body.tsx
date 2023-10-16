import { Dispatch, SetStateAction, useContext, useState } from "react";
import { IconClick } from "@tabler/icons-react";

import {
  Button,
  Checkbox,
  TableBody as TableBodyUI,
  TableCell,
  TableRow,
} from "../../";
import { generateUUID } from "./utils";
import { TableContext } from "./store";
import { ITableColumn } from "./types";
import { handleCheckboxChange } from "./Table-controllers";

interface TableBodyRowProps {
  data: Record<string, string>[];
  columns: ITableColumn<any>[];
  setSelectItem: (item) => void;
  multiItemsSelected: any[];
  setMultiItemsSelected: Dispatch<SetStateAction<any[]>>;
  limitOfMultiSelect: number;
}

const TableBodyEmpty = ({ colSpan }: { colSpan: number }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="h-24 text-center">
        Sin Resultados
      </TableCell>
    </TableRow>
  );
};

const TableBodyRow = ({
  data,
  columns,
  setSelectItem,
  setMultiItemsSelected,
  multiItemsSelected,
  limitOfMultiSelect,
}: TableBodyRowProps) => {
  const renderCell = (
    column: ITableColumn<any>,
    item: Record<string, string>
  ) => {
    const { itemsSelectedCount, verficationOfItems } =
      handleCheckboxChange(item);

    if (column?.render) {
      return <div>{column.render(item)}</div>;
    }

    if (column.id === "select") {
      return (
        <Button
          onClick={() => setSelectItem(item)}
          variant="outline"
          size="icon"
          type="button"
        >
          <IconClick size={18} />
        </Button>
      );
    }

    if (column.id === "multi-select") {
      return (
        <Checkbox
          onClick={() => {
            verficationOfItems();
          }}
          checked={multiItemsSelected.some(
            (selectedItem) => selectedItem.id === item.id
          )}
          disabled={
            itemsSelectedCount === limitOfMultiSelect && !itemsSelectedCount
          }
        />
      );
    }

    return <>{item[column.id]}</>;
  };

  return (
    <>
      {data.map((item) => (
        <TableRow key={generateUUID()}>
          {columns.map((column) => (
            <TableCell key={generateUUID()}>
              {renderCell(column, item)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export const TableBody = () => {
  const {
    data,
    columns,
    setSelectItem,
    setMultiItemsSelected,
    multiItemsSelected,
    limitOfMultiSelect,
  } = useContext(TableContext);

  return (
    <TableBodyUI>
      {data.length ? (
        <TableBodyRow
          setMultiItemsSelected={setMultiItemsSelected}
          setSelectItem={setSelectItem}
          data={data}
          multiItemsSelected={multiItemsSelected}
          columns={columns}
          limitOfMultiSelect={limitOfMultiSelect}
        />
      ) : (
        <TableBodyEmpty colSpan={columns.length} />
      )}
    </TableBodyUI>
  );
};
