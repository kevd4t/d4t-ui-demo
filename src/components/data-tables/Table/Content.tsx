import { TableUI } from "../../";

import { TableHeader } from "./Header";
import { TableBody } from "./Body";
import { useContext, useEffect } from "react";
import { TableContext } from "./store";

export const TableContent = () => {
  const { multiItemsSelected } = useContext(TableContext);

  useEffect(() => {
    console.log(multiItemsSelected);
  }, [multiItemsSelected]);

  return (
    <TableUI>
      <TableHeader />
      <TableBody />
    </TableUI>
  );
};
