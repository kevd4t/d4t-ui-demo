const MODULES_DIC = {
  MONITORING_ROUTES: 'MONITORING_ROUTES',
  MONITORING_METERS: 'MONITORING_METERS',
  SUBCATEGORIES: 'SUBCATEGORIES',
  METER_DEVICES: 'METER_DEVICE',
  USERS_GROUPS: 'USERS_GROUPS',
  METER_MODELS: 'METER_MODELS',
  TYPE_STATUS: 'TYPE_STATUS',
  METER_MARKS: 'METER_MARKS',
  METER_UNITS: 'METER_UNITS',
  GPS_DEVICE: 'GPS_DEVICE',
  GPS_MODELS: 'GPS_MODELS',
  CATEGORIES: 'CATEGORIES',
  GPS_MARKS: 'GPS_MARKS',
  STATIONS: 'STATIONS',
  STATUS: 'STATUS',
  FLEETS: 'FLEETS',
  TRUCKS: 'TRUCKS',
  CITIES: 'CITIES',
  USERS: 'USERS'
}

const OPERATOR_DEFAULT_MODULES_ACCESS = [
  MODULES_DIC.MONITORING_ROUTES,
  MODULES_DIC.MONITORING_METERS
]

const SUPERVISOR_DEFAULT_MODULES_ACCESS = [
  ...OPERATOR_DEFAULT_MODULES_ACCESS,

  MODULES_DIC.CITIES,

  MODULES_DIC.CATEGORIES,
  MODULES_DIC.SUBCATEGORIES,

  MODULES_DIC.TYPE_STATUS,
  MODULES_DIC.STATUS

]

const COORDINATOR_DEFAULT_MODULES_ACCESS = [
  ...OPERATOR_DEFAULT_MODULES_ACCESS,
  ...SUPERVISOR_DEFAULT_MODULES_ACCESS,

  MODULES_DIC.FLEETS,
  MODULES_DIC.TRUCKS,

  MODULES_DIC.GPS_MODELS,
  MODULES_DIC.GPS_MARKS,
  MODULES_DIC.GPS_DEVICE,

  MODULES_DIC.METER_UNITS,
  MODULES_DIC.METER_DEVICES,
  MODULES_DIC.METER_MARKS,
  MODULES_DIC.METER_MODELS
]

const ADMINISTRATOR_DEFAULT_MODULES_ACCESS = [
  ...OPERATOR_DEFAULT_MODULES_ACCESS,
  ...SUPERVISOR_DEFAULT_MODULES_ACCESS,
  ...COORDINATOR_DEFAULT_MODULES_ACCESS
]

const MODULE_ACCESS_BY_ROLE = {
  OPERATOR_DEFAULT: OPERATOR_DEFAULT_MODULES_ACCESS,
  SUPERVISOR_DEFAULT: SUPERVISOR_DEFAULT_MODULES_ACCESS,
  COORDINATOR_DEFAULT: COORDINATOR_DEFAULT_MODULES_ACCESS,
  ADMINISTRATOR_DEFAULT: ADMINISTRATOR_DEFAULT_MODULES_ACCESS
}

const fakeGroupsUser = [
  {
    id: 1,
    title: 'Grupo de Operadores 1',
    description: 'lorem ipsu detniat',
    moduleAccess: MODULE_ACCESS_BY_ROLE.OPERATOR_DEFAULT
  },
  {
    id: 2,
    title: 'SUPERVISOR_DEFAULT',
    description: 'lorem ipsu detniat',
    moduleAccess: MODULE_ACCESS_BY_ROLE.SUPERVISOR_DEFAULT
  },
  {
    id: 3,
    title: 'COORDINATOR_DEFAULT',
    description: 'lorem ipsu detniat',
    moduleAccess: MODULE_ACCESS_BY_ROLE.COORDINATOR_DEFAULT
  },
  {
    id: 4,
    title: 'ADMINISTRATOR_DEFAULT',
    description: 'lorem ipsu detniat',
    moduleAccess: MODULE_ACCESS_BY_ROLE.ADMINISTRATOR_DEFAULT
  }
]

const fakeUsers = [
  {
    id: 1,
    name: 'Kevin',
    lastname: 'Blanco',
    email: 'k.blanco@d4t.tech',
    role: 'OPERATOR',
    token: crypto.randomUUID(),
    group: fakeGroupsUser[0]
  },
  {
    id: 2,
    name: 'Kevin',
    lastname: 'Sanchez',
    email: 'k.blanco@d4t.tech',
    role: 'SUPERVISOR',
    token: crypto.randomUUID(),
    group: fakeGroupsUser[1]
  },
  {
    id: 3,
    name: 'Kevin',
    lastname: 'Sanchez',
    email: 'k.blanco@d4t.tech',
    role: 'COORDINATOR',
    token: crypto.randomUUID(),
    group: fakeGroupsUser[3]
  },
  {
    id: 4,
    name: 'Kevin',
    lastname: 'Sanchez',
    email: 'k.blanco@d4t.tech',
    role: 'ADMINISTRATOR',
    token: crypto.randomUUID(),
    group: fakeGroupsUser[4]
  },
  {
    id: 5,
    name: 'Daniela',
    lastname: 'Perez',
    email: 'd.perez@d4t.tech',
    role: 'ADMINISTRATOR',
    token: crypto.randomUUID(),
    group: fakeGroupsUser[4]
  },
  {
    id: 6,
    name: 'Jhon',
    lastname: 'Smith',
    email: 'j.smith@example.com',
    role: 'OPERATOR',
    token: crypto.randomUUID(),
    group: fakeGroupsUser[0]
  },
  {
    id: 7,
    name: 'Maribel',
    lastname: 'Cabarcas',
    email: 'maribel@gmail.com',
    role: 'SUPERVISOR',
    token: crypto.randomUUID(),
    group: fakeGroupsUser[2]
  },
  {
    id: 8,
    name: 'Maria',
    lastname: 'Juanes',
    email: 'mariajuanes@gmail.com',
    role: 'COORDINATOR',
    token: crypto.randomUUID(),
    group: fakeGroupsUser[3]
  },
  {
    id: 9,
    name: 'Jose',
    lastname: 'Idalgo',
    email: 'j.idalgo@example.com',
    role: 'ADMINISTRATOR',
    token: crypto.randomUUID(),
    group: fakeGroupsUser[4]
  }
]

const fakeSubcategories = [
  {
    id: crypto.randomUUID(),
    title: 'Grupo de Operadores 1',
    description: 'lorem ipsu detniat',
    isActive: true
  }
]

const fakeCategories = [
  {
    id: crypto.randomUUID(),
    title: 'Categoria 1',
    description: 'lorem ipsu detniat',
    isActive: true,
    subcategories: [...fakeSubcategories]
  }
]

const status = [
  {
    id: crypto.randomUUID(),
    title: 'Operativo',
    description: 'lorem ipsu detniat',
    isActive: true,
    color: '#835BFB'
  }
]

const typeStatus = [
  {
    id: crypto.randomUUID(),
    title: 'Estaciones',
    description: 'lorem ipsu detniat',
    isActive: true,
    status: [...status]
  }
]

const gpsModels = [
  {
    id: crypto.randomUUID(),
    title: 'VTS GT02',
    description: 'lorem ipsu detniat',
    image: 'https://via.placeholder.com/200/red',
    typeGPS: 'Satelital',
    isActive: true
  }
]

const gpsMarks = [
  {
    id: crypto.randomUUID(),
    title: 'Miggy',
    description: 'lorem ipsu detniat',
    image: 'https://via.placeholder.com/100/red',
    isActive: true,
    models: [...gpsModels]
  }
]

const meterModels = [
  {
    id: crypto.randomUUID(),
    title: 'VTS GT02',
    description: 'lorem ipsu detniat',
    image: 'https://via.placeholder.com/200/red',
    typeMeter: 'Litros',
    isActive: true
  }
]

const meterMarks = [
  {
    id: crypto.randomUUID(),
    title: 'Pekin',
    description: 'lorem ipsu detniat',
    image: 'https://via.placeholder.com/100/red',
    isActive: true,
    models: [...meterModels]
  }
]

type TypeData = 'USERS' | 'CATEGORIES' | 'SUBCATEGORIES' | 'STATUS_TYPE' | 'STATUS' | 'GPS_MARKS' | 'GPS_MODELS' | 'METER_MARKS' | 'METER_MODELS'

const FAKE_DATA_DIC = {
  USERS: () => fakeUsers,
  CATEGORIES: () => fakeCategories,
  SUBCATEGORIES: () => fakeCategories.find(category => category.subcategories),
  TYPE_STATUS: () => typeStatus,
  STATUS: () => typeStatus.find(typeStatus => typeStatus.status),
  GPS_MARKS: () => gpsMarks,
  GPS_MODELS: () => gpsMarks.find(gpsMark => gpsMark.models),
  METER_MARKS: () => meterMarks,
  METER_MODELS: () => meterMarks.find(meterMark => meterMark.models)
}

export const getFakeData = (typeData: TypeData) => FAKE_DATA_DIC[typeData]()
