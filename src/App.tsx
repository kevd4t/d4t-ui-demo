import { Router, Truck, User } from "lucide-react";
import { AppLayout } from "./layouts/Application";
import {
  BottomNavigation,
  D4TTable,
  ITableColumn,
  ITablePagination,
  ITableSubmit,
} from "./components";

function App() {
  const profile = { role: "Administrador", name: "Kevin", lastname: "blanco" };

  const sections = [
    {
      titleDescription: "Users",
      path: "/users",
      icon: <User />,
    },
    {
      titleDescription: "Router",
      path: "/routes",
      icon: <Router />,
    },
    {
      titleDescription: "Tracking",
      path: "/tracking",
      icon: <Truck />,
    },
    {
      titleDescription: "Analytics",
      path: "/anaytics",
      icon: <Truck />,
    },
  ];

  const data = [
    {
      id: "234",
      name: "Kevin",
    },
  ];
  const dataColumns: ITableColumn<any>[] = [
    {
      id: "id",
      label: "ID",
    },
    {
      id: "id",
      label: "CID",
      isQuery: true,
    },
    {
      id: "id",
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

  return (
    <AppLayout>
      <D4TTable
        data={data}
        onSubmitTable={onSubmitTable}
        pagination={dataPagination}
        columns={dataColumns}
        error={false}
        loading={false}
      />

      <div className="mx-auto max-w-4xl">
        {/* Bottom navigation */}
        <BottomNavigation
          Link={null}
          sidebar={{
            logout: () => {},
            profile,
            theme: { toggleTheme: () => {}, value: "dark" },
          }}
          bottomItems={sections}
          navLinksItems={[
            {
              label:
                "Ajaaaaa aaaaaaa aaaaa aaaaaaaaaaaaa asd asfsdf sdf sdgfds",
              to: "/fino",
              icon: <User className="dark:text-white" />,
              pathname: "/asdfa",
            },
            {
              label: "ecole x 2",
              to: "/ecole",
              pathname: "/asdfa",
              icon: <User className="dark:text-white" />,
            },
          ]}
          subLinksItems={{
            label: "Ajaaaaa aaaaaaa aaaaa aaaaaaaaaaaaa asd asfsdf sdf sdgfds",
            to: "/fino",
            icon: <User className="dark:text-white" />,
            pathname: "/asdfa",
            subLinks: [
              {
                label:
                  "Ajaaaaa aaaaaaa aaaaa aaaaaaaaaaaaa asd asfsdf sdf sdgfds",
                to: "/fino",
                icon: <User className="dark:text-white" />,
                pathname: "/asdfa",
              },
              {
                label: "ecole x 2",
                to: "/ecole",
                pathname: "/asdfa",
                icon: <User className="dark:text-white" />,
              },
            ],
          }}
        />
      </div>
    </AppLayout>
  );
}

export default App;