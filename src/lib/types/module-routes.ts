export type MonitoringModuleRoutes = '/monitoreo/rutas' | '/monitoreo/rutas/crear' | '/monitoreo/rutas/33' | '/monitoreo/estaciones' | '/monitoreo/estaciones/33' // TODO: Remove detail
export type MetersMarksSettingsModuleRoutes = '/ajustes/marcas-de-medidores' | '/ajustes/marcas-de-medidores/crear'
export type UsersModuleRoutes = '/usuarios' | '/usuarios/crear' | '/usuarios/grupos' | '/usuarios/grupos/crear'
export type GPSMarksSettingsModuleRoutes = '/ajustes/marcas-de-gps' | '/ajustes/marcas-de-gps/crear'
export type MetersDevicesSettingsModuleRoutes = '/ajustes/medidores' | '/ajustes/medidores/crear'
export type CategoriesSettingsModuleRoutes = '/ajustes/categorias' | '/ajustes/categorias/crear'
export type CitiesSettingsModuleRoutes = '/ajustes/ciudades' | '/ajustes/ciudades/crear'
export type StatesSettingsModuleRoutes = '/ajustes/estados' | '/ajustes/estados/crear'
export type FleetsSettingsModuleRoutes = '/ajustes/flotas' | '/ajustes/flotas/crear'
export type GPSDevicesSettingsModuleRoutes = '/ajustes/dispositivos-gps' | '/ajustes/dispositivos-gps/crear'
export type AuthenticationModuleRoutes = '/iniciar-sesion' | '/recuperar-cuenta'
export type DistributionModuleRoutes = '/distribucion' | '/distribucion/crear'
export type ExtractionModuleRoutes = '/extraccion' | '/extraccion/crear'
export type StationsModuleRoutes = '/estaciones' | '/estaciones/crear'
export type AssortmentModuleRoutes = '/surtido' | '/surtido/crear'
export type SupportModuleRoutes = '/soporte-tecnico'
export type DashboardModuleRoutes = '/dashboard'
export type MyProfileModuleRoutes = '/mi-cuenta'

export type TSettingsRoutes =
  CitiesSettingsModuleRoutes |
  CategoriesSettingsModuleRoutes |
  StatesSettingsModuleRoutes |
  FleetsSettingsModuleRoutes |
  GPSMarksSettingsModuleRoutes |
  GPSDevicesSettingsModuleRoutes |
  MetersMarksSettingsModuleRoutes |
  MetersDevicesSettingsModuleRoutes

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
