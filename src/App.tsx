import { Router, Truck, User } from "lucide-react";
import { AppLayout } from "./layouts/Application";
import { BottomNavigation, IUploadImage, MultipleImages } from "./components";
import { useState } from "react";
import FileResizer from "react-image-file-resizer";

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

  const [uploadImages, setUploadImages] = useState<IUploadImage[]>([]);

  return (
    <AppLayout>
      <div className="mx-auto max-w-4xl">
        <div className="h-50 w-50 border-2 p-10 rounded-lg">
          <MultipleImages
            label="Multi upload images"
            uploadLabel="upload"
            setUploadImages={setUploadImages}
            limit={1}
            compress={{
              openComparisons: () => {},
              resizer: FileResizer,
            }}
            // initialPreview={[
            //   {
            //     data_url:
            //       "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
            //   },
            // ]}
          />
        </div>

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
