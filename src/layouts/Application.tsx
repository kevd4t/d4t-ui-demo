import { BreadcrumbPage, Separator, Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '../components'
import { SidebarTrigger, SidebarProvider, SidebarInset } from '../components'
import { AppSidebar } from '../examples/sidebar'

export const AppLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className='p-4'>
        <header className="sticky top-0 left-0 flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-card rounded-md z-10 w-full max-w-5xl mx-auto">
          <SidebarTrigger className="-ml-1 z-10 rounded-full hover:bg-blue-500/20" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className='p-4 rounded-md mt-2 max-w-6xl mx-auto'>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
