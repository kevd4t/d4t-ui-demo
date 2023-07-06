import 'dotenv/config'

export const siteConfig = {
  TITLE: 'D4T Platform',
  ROUTES: {
    SIGN_IN: {
      TITLE: 'Iniciar Sesion'
    },

    RECOVER_ACCOUNT: {
      TITLE: 'Recuperar Cuenta'
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
      CREATE: { TITLE: 'Crear Estación' },
      EDIT: { TITLE: 'Editar Estación' }
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
      },

      METER_MARKS: {
        LIST: { TITLE: 'Marcas de Medidores' },
        CREATE: { TITLE: 'Crear Marca de Medidor' },
        EDIT: { TITLE: 'Editar Marca de Medidor' }
      },

      METER_DEVICE: {
        LIST: { TITLE: 'Medidores' },
        CREATE: { TITLE: 'Crear Medidor' },
        EDIT: { TITLE: 'Editar Medidor' }
      }
    },

    MONITORING: {
      STATIONS: {
        LIST: { TITLE: 'Estaciones' },
        DETAIL: { TITLE: 'Monitoreo de la Estación' }
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

  DUMMY_DATA: {
    RECOVER_ACCOUNT_VERIFICATION_CODE: 24040
  },

  DOCSLY: {
    PUBLIC_ID: process.env.NEXT_PUBLIC_DOCSLY_KEY
  },

  FILES_RULES: {
    ALLOW_TYPE_FILES: {
      WEBP: 'webp',
      PNG: 'png',
      JPG: 'jpg',
      JPEG: 'jpeg'
    },
    LIMIT_SIZE: {
      '4MB': 4000000
    }
  },

  IS_ACTIVE: {
    true: { label: 'Activo', value: true },
    false: { label: 'Bloqueado', value: false }
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
  ],

  PHONE_LINE_CODES: {
    DIGITAL: [
      { label: '0412', value: '0412', image: '/images/marks/digitel.png' }
    ],
    MOVISTAR: [
      { label: '0414', value: '0414', image: '/images/marks/movistar.png' },
      { label: '0424', value: '0424', image: '/images/marks/movistar.png' }
    ],
    MOVILNET: [
      { label: '0416', value: '0416', image: '/images/marks/movilnet.png' },
      { label: '0426', value: '0426', image: '/images/marks/movilnet.png' }
    ]
  },

  CI_TYPES: {
    VENEZUELAN: { label: 'Venezolano', value: 'VENEZUELAN', key: 'V' },
    PASSPORT: { label: 'Pasaporte', value: 'PASSPORT', key: 'P' },
    JURIDICAL: { label: 'Jurídico', value: 'JURIDICAL', key: 'J' },
    FOREIGN: { label: 'Extranjero', value: 'FOREIGN', key: 'E' },
    GOVERNMENTAL: { label: 'Gubernamental', value: 'GOVERNMENTAL', key: 'G' }
  }
}
