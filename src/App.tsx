import { AppLayout } from "./layouts/Application";
import {
  D4TTable,
  ITableColumn,
  ITablePagination,
  ITableSubmit,
} from "./components";
import { useEffect, useState } from "react";

function App() {
  const data = [
    {
      id: "234",
      name: "Kevin",
    },
    {
      id: "235",
      name: "Cristian",
    },
    {
      id: "236",
      name: "Shamael",
    },
    {
      id: "237",
      name: "Jose",
    },
    {
      id: "238",
      name: "Ronald",
    },
    {
      id: "239",
      name: "Jorge",
    },
    {
      id: "240",
      name: "Jesus",
    },
    {
      id: "241",
      name: "Nancy",
    },
  ];

  const dataColumns: ITableColumn<any>[] = [
    {
      id: "multi-select",
      label: "seleccion",
    },
    {
      id: "id",
      label: "ID",
    },
    {
      id: "name",
      label: "Nombre",
      filters: [
        {
          id: "name",
          label: "Nombre",
          value: "Kevin",
        },
      ],
    },
  ];

  const dataPagination: ITablePagination = {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: false,
    hasNextPage: false,
  };
  const onSubmitTable: ITableSubmit = async ({
    queries,
    filters,
    page,
    limit,
  }) => {
    console.log({ queries, filters, page, limit });
  };

  const [hello, setHello] = useState([]);

  useEffect(() => {
    console.log("hello ==> ", hello);
  }, [hello]);

  return (
    <AppLayout>
      <div className="mx-auto max-w-4xl">
        <D4TTable
          data={data}
          onSubmitTable={onSubmitTable}
          pagination={dataPagination}
          columns={dataColumns}
          error={false}
          loading={false}
          limitOfMultiSelect={4}
          multiItemsSelected={hello}
          setMultiItemsSelected={setHello}
        />
      </div>
    </AppLayout>
  );
}

export default App;