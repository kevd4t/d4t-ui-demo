export type DashboardModuleRoutes = '/dashboard'

export type AuthenticationModuleRoutes = '/iniciar-sesion' | '/recuperar-cuenta'

export type UsersModuleRoutes = '/usuarios' | '/usuarios/crear'

export type MonitoringModuleRoutes = '/monitoreo/rutas' | '/monitoreo/rutas/33' | '/monitoreo/estaciones' | '/monitoreo/estaciones/33' // TODO: Remove detail

export type ExtractionModuleRoutes = '/extraccion' | '/extraccion/crear'

export type AssortmentModuleRoutes = '/surtido' | '/surtido/crear'

export type DistributionModuleRoutes = '/distribucion' | '/distribucion/crear'

export type StationsModuleRoutes = '/estaciones' | '/estaciones/crear'

export type MyProfileModuleRoutes = '/mi-cuenta'

export type SupportModuleRoutes = '/soporte-tecnico'

export type CitiesSettingsModuleRoutes = '/ajustes/ciudades' | '/ajustes/ciudades/crear'

export type CategoriesSettingsModuleRoutes = '/ajustes/categorias' | '/ajustes/categorias/crear'

export type StatesSettingsModuleRoutes = '/ajustes/estados' | '/ajustes/estados/crear'

export type FleetsSettingsModuleRoutes = '/ajustes/flotas' | '/ajustes/flotas/crear'

export type GPSMarksSettingsModuleRoutes = '/ajustes/marcas-de-gps' | '/ajustes/marcas-de-gps/crear'

export type GPSDevicesSettingsModuleRoutes = '/ajustes/gps' | '/ajustes/gps/crear'

export type TSettingsRoutes =
  CitiesSettingsModuleRoutes |
  CategoriesSettingsModuleRoutes |
  StatesSettingsModuleRoutes |
  FleetsSettingsModuleRoutes |
  GPSMarksSettingsModuleRoutes |
  GPSDevicesSettingsModuleRoutes

export type TModuleRoutes =
  DashboardModuleRoutes |
  AuthenticationModuleRoutes |
  UsersModuleRoutes |
  MonitoringModuleRoutes |
  ExtractionModuleRoutes |
  AssortmentModuleRoutes |
  DistributionModuleRoutes |
  StationsModuleRoutes |
  MyProfileModuleRoutes |
  SupportModuleRoutes |
  TSettingsRoutes
