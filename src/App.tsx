import {
  Badge,
  BanIcon,
  BarChart,
  BoxIcon,
  Building,
  DivideCircle,
  HelpCircle,
  LucideTruck,
  Router,
  Settings,
  StopCircle,
  Truck,
  User,
  UserIcon,
} from "lucide-react";

import { NavLinkNested, Sidebar } from "./components/sidebar";
import { SidebarContent } from "./components/sidebar/content";
import { NavLink } from "./components/sidebar/nav-link";
import { AppLayout } from "./layouts/Application";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { IUploadImage } from "./components/upload-image/types";
import { UploadImage } from "./components/upload-image/SingleImage";
import FileResizer from "react-image-file-resizer";
import { ComboxCheckbox, D4TTable, Form, ITableSubmit } from "./components";
import { characterColumns } from "./examples/tables/RickAndMorty";
import BottomNavigation from "./components/bottom-navigation/index";

const schema = z.object({
  name: z.string(),
});

function App() {
  const profile = { role: "Administrador", name: "Kevin", lastname: "blanco" };
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ prev: false, next: false });
  const form = useForm<{ fuel: string[] }>({
    defaultValues: { fuel: ["activo"] },
  });

  const onSubmit = (data) => {
    console.log({ data });
  };

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
      // icon: BarChart,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-align-vertical-space-around"
        >
          <rect width="10" height="6" x="7" y="9" rx="2" />
          <path d="M22 20H2" />
          <path d="M22 4H2" />
        </svg>
      ),
    },
  ];

  // const onSubmit: ITableSubmit = async ({ page, limit, filters, queries }) => {
  //   console.log({ page, limit, filters, queries })

  //   setLoading(true)

  //   setTimeout(async () => {
  //     try {
  //       const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page || '1'}`)
  //       const data = await res.json()

  //       setData(data.results)
  //       setPagination({ next: Boolean(data.info.next), prev: Boolean(data.info.prev) })

  //     } catch (err) {
  //       setError(Boolean(err))
  //     } finally {
  //       setLoading(false)
  //     }
  //   }, 1000)

  // }

  useEffect(() => {
    (async () => {
      setLoading(true);

      setTimeout(async () => {
        try {
          const res = await fetch("https://rickandmortyapi.com/api/character");
          const data = await res.json();

          setData(data.results);
          setPagination({
            next: Boolean(data.info.next),
            prev: Boolean(data.info.prev),
          });
        } catch (err) {
          setError(Boolean(err));
        } finally {
          setLoading(false);
        }
      }, 1000);
    })();
  }, []);

  return (
    <AppLayout>
      <Sidebar
        logout={() => {}}
        profile={profile}
        theme={{ toggleTheme: () => {}, value: "dark" }}
      >
        <SidebarContent>
          <NavLink
            to="/asd"
            pathname="/asd"
            label="Esto es un label muy largo asi que se va a cortar"
            icon={<Settings className="dark:text-white" size={20} />}
          />

          <NavLinkNested
            pathname="/fino"
            label="Todo bien mi compa todo finoo aaaaa"
            icon={<Settings className="dark:text-white" size={20} />}
            sublinks={[
              {
                label:
                  "Ajaaaaa aaaaaaa aaaaa aaaaaaaaaaaaa asd asfsdf sdf sdgfds",
                to: "/fino",
                icon: <User className="dark:text-white" />,
              },
              {
                label: "ecole x 2",
                to: "/ecole",
                icon: <User className="dark:text-white" />,
              },
              {
                label: "ecole x 3",
                to: "/ecol3",
                icon: <User className="dark:text-white" />,
              },
              {
                label: "ecole x 4",
                to: "/ecol4",
                icon: <User className="dark:text-white" />,
              },
              {
                label: "ecole x 5",
                to: "/ecol5",
                icon: <User className="dark:text-white" />,
              },
            ]}
          />

          <NavLink
            to="/ja"
            pathname="/"
            label="Eventos"
            icon={<Settings className="dark:text-white" size={20} />}
          />

          <NavLink
            to="/xd"
            pathname="/"
            label="Lo que sea"
            icon={<Settings className="dark:text-white" size={20} />}
          />

          <NavLink
            to="/xd2"
            pathname="/"
            label="Lo que sea2"
            icon={<Settings className="dark:text-white" size={20} />}
          />

          <NavLinkNested
            pathname="/fino"
            label="Epa"
            icon={<Settings className="dark:text-white" size={20} />}
            sublinks={[
              {
                label: "Aja",
                to: "/fino",
                icon: <User className="dark:text-white" />,
              },
              {
                label: "ecole x 2",
                to: "/ecole",
                icon: <User className="dark:text-white" />,
              },
              {
                label: "ecole x 3",
                to: "/ecol3",
                icon: <User className="dark:text-white" />,
              },
              {
                label: "ecole x 4",
                to: "/ecol4",
                icon: <User className="dark:text-white" />,
              },
              {
                label: "ecole x 5",
                to: "/ecol5",
                icon: <User className="dark:text-white" />,
              },
            ]}
          />
          <NavLink
            to="/xd3"
            pathname="/"
            label="Lo que sea3"
            icon={<Settings className="dark:text-white" size={20} />}
          />

          <NavLinkNested
            label="Ajustes"
            pathname="/"
            icon={<Settings className="dark:text-white" size={20} />}
            sublinks={[
              {
                label: "Ubicaciones",
                to: "/ajustes/ubicaciones/estados",
                icon: <Building className="dark:text-white" size={20} />,
              },
              {
                label: "Categorias",
                to: "/ajustes/categorias",
                icon: <HelpCircle className="dark:text-white" size={20} />,
              },
              {
                label: "Estados",
                to: "/ajustes/estados",
                icon: <BarChart className="dark:text-white" size={20} />,
              },
              {
                label: "Choferes",
                to: "/ajustes/choferes",
                icon: <Truck className="dark:text-white" size={20} />,
              },
              {
                label: "Flotas",
                to: "/ajustes/flotas",
                icon: <StopCircle className="dark:text-white" size={20} />,
              },
              {
                label: "Marcas de Medidores",
                to: "/ajustes/marcas-de-medidores",
                icon: <Badge className="dark:text-white" size={20} />,
              },
              {
                label: "Medidores",
                to: "/ajustes/medidores",
                icon: <Router className="dark:text-white" size={20} />,
              },
              {
                label: "Marcas de GPS",
                to: "/ajustes/marcas-de-gps",
                icon: <LucideTruck className="dark:text-white" size={20} />,
              },
              {
                label: "Dispositivos GPS",
                to: "/ajustes/dispositivos-gps",
                icon: <DivideCircle className="dark:text-white" size={20} />,
              },
            ]}
          />

          <NavLink
            to="/almacenamiento"
            pathname="/"
            label="Almacenamiento"
            icon={<Settings className="dark:text-white" size={20} />}
          />
        </SidebarContent>
      </Sidebar>

      <div className="mx-auto max-w-4xl">
        {/* <CustomTable
          onSubmitTable={onSubmit}
          pagination={{
            hasNextPage: pagination.next,
            hasPrevPage: pagination.prev,
            limit: 10,
            page: 1
          }}
          columns={characterColumns}
          data={data}
          loading={loading}
          error={Boolean(error)}
        /> */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ComboxCheckbox
              readOnly
              id="fuel"
              label="Combustible"
              options={[
                {
                  id: "activo",
                  value: "activo",
                  label: "Activo",
                },
              ]}
            />
            <button type="submit">dale</button>
          </form>
        </Form>

        <BottomNavigation items={sections} />
      </div>
    </AppLayout>
  );
}

export default App;
