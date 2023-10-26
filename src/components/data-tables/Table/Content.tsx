import { TableUI } from "../../table";

import { TableHeader } from "./Header";
import { TableBody } from "./Body";
import { useContext, useEffect } from "react";
import { TableContext } from "./store";

export const TableContent = () => {

  return (
    <TableUI>
      <TableHeader />
      <TableBody />
    </TableUI>
  );
};
