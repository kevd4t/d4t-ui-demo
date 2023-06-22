import 'dotenv/config'

export const siteConfig = {
  TITLE: 'D4T Platform',
  ROUTES: {
    SIGN_IN: {
      TITLE: 'Iniciar Sesion'
    },

    USERS: {
      LIST: { TITLE: 'Usuarios' },
      CREATE: { TITLE: 'Crear Usuario' },
      EDIT: { TITLE: 'Editar Usuario' },
      DETAIL: { TITLE: 'Detalle de Usuario' },
      GROUPS: {
        CREATE: { TITLE: 'Crear Grupos de Usuarios' },
        LIST: { TITLE: 'Grupos de Usuarios' }
      }
    },

    ASSORTMENT: {
      LIST: { TITLE: 'Surtido' },
      CREATE: { TITLE: 'Crear Surtido' },
      EDIT: { TITLE: 'Editar Surtido' }
    },

    TECHNICAL_SUPPORT: {
      TITLE: 'Soporte Tecnico'
    },

    MY_ACCOUNT: {
      TITLE: 'Mi Cuenta'
    },

    PREFERENCES: {
      TITLE: 'Preferencias'
    },

    EXTRACTION: {
      LIST: { TITLE: 'Extracciones' },
      CREATE: { TITLE: 'Crear Extraccion' },
      EDIT: { TITLE: 'Editar Extraccion' }
    },

    STATIONS: {
      LIST: { TITLE: 'Estaciones' },
      CREATE: { TITLE: 'Crear Estacion' },
      EDIT: { TITLE: 'Editar Estacion' }
    },

    DISTRIBUTION: {
      LIST: { TITLE: 'Distribuciones' },
      CREATE: { TITLE: 'Crear Distribucion' },
      EDIT: { TITLE: 'Editar Distribucion' }
    },

    DASHBOARD: {
      TITLE: 'Dashboard'
    },

    SETTINGS: {
      CATEGORIES: {
        LIST: { TITLE: 'Categorias' },
        DETAIL: { TITLE: 'Detalle de Categoria' },
        CREATE: { TITLE: 'Crear Categoria' },
        EDIT: { TITLE: 'Editar Categoria' }
      },

      CITIES: {
        LIST: { TITLE: 'Ciudades' },
        CREATE: { TITLE: 'Crear Ciudad' },
        EDIT: { TITLE: 'Editar Ciudad' }
      },

      STATUS: {
        LIST: { TITLE: 'Estatus' },
        CREATE: { TITLE: 'Crear Estatus' },
        EDIT: { TITLE: 'Editar Estatus' }
      },

      FLEETS: {
        LIST: { TITLE: 'Flotas' },
        CREATE: { TITLE: 'Crear Flota' },
        EDIT: { TITLE: 'Editar Flota' }
      },

      GPS_MARKS: {
        LIST: { TITLE: 'Marcas de GPS' },
        CREATE: { TITLE: 'Crear Marca de GPS' },
        EDIT: { TITLE: 'Editar Marca de GPS' }
      },

      GPS_DEVICE: {
        LIST: { TITLE: 'Dispositivos GPS' },
        CREATE: { TITLE: 'Crear Dispositivo GPS' },
        EDIT: { TITLE: 'Editar Dispositivo GPS' }
      }
    },

    MONITORING: {
      STATIONS: {
        LIST: { TITLE: 'Estaciones' },
        DETAIL: { TITLE: 'Monitoreo de la Estacion' }
      },

      ROUTES: {
        LIST: { TITLE: 'Rutas' },
        DETAIL: { TITLE: 'Monitoreo de la Ruta' },
        CREATE: { TITLE: 'Crear Ruta' }
      }
    }
  }
}

export const APP_CONFIG = {
  ENV: {
    IS_PRODUCTION: process?.env?.IS_PRODUCTION?.toLowerCase?.() === 'true' || false
  },
  ROLES_DIC: {
    OPERATOR: { label: 'Operador', key: 'OPERATOR' },
    SUPERVISOR: { label: 'Supervisor', key: 'SUPERVISOR' },
    COORDINATOR: { label: 'Coordinador', key: 'COORDINATOR' },
    ADMINISTRATOR: { label: 'Administrador', key: 'ADMINISTRATOR' }
  },
  ROLES_ARRAY: [
    {
      label: 'Operador',
      value: 'OPERATOR'
    },
    {
      label: 'Operador',
      value: 'SUPERVISOR'
    },
    {
      label: 'Operador',
      value: 'COORDINATOR'
    },
    {
      label: 'Operador',
      value: 'ADMINISTRATOR'
    }
  ]
}
