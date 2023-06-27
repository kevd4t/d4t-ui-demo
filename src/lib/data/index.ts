import { ICity, IState, IStation } from '../types/'
import { IGPSDevice, IGPSMark, IGPSModel } from '../types/gps'
import { IRoute } from '../types/routes'

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
    ci: '26.567.324',
    phone: '(0412)-3285323',
    email: 'k.blanco@d4t.tech',
    role: 'OPERATOR',
    isActive: true,
    token: crypto.randomUUID(),
    group: fakeGroupsUser[0]
  },
  {
    id: 2,
    name: 'Kevin',
    lastname: 'Sanchez',
    ci: '87.436.283',
    phone: '(0416)-4357213',
    email: 'k.sanchez@d4t.tech',
    role: 'SUPERVISOR',
    isActive: false,
    token: crypto.randomUUID(),
    group: fakeGroupsUser[1]
  },
  {
    id: 3,
    name: 'Danilo',
    lastname: 'Torento',
    ci: '43.356.824',
    phone: '(0424)-7887432',
    email: 'danilo@gmail.com',
    role: 'COORDINATOR',
    isActive: true,
    token: crypto.randomUUID(),
    group: fakeGroupsUser[3]
  },
  {
    id: 4,
    name: 'Brandon',
    lastname: 'Rodriguez',
    ci: '64.347.341',
    phone: '(0416)-3514364',
    email: 'brandonr4op@hotmail.com',
    role: 'ADMINISTRATOR',
    isActive: true,
    token: crypto.randomUUID(),
    group: fakeGroupsUser[4]
  },
  {
    id: 5,
    name: 'Daniela',
    lastname: 'Perez',
    ci: '56.545.534',
    phone: '(0412)-8730594',
    email: 'd.perez@d4t.tech',
    role: 'ADMINISTRATOR',
    isActive: true,
    token: crypto.randomUUID(),
    group: fakeGroupsUser[4]
  },
  {
    id: 6,
    name: 'Jhon',
    lastname: 'Smith',
    ci: '65.334.545',
    phone: '(0414)-8634572',
    email: 'j.smith@example.com',
    role: 'OPERATOR',
    isActive: false,
    token: crypto.randomUUID(),
    group: fakeGroupsUser[0]
  },
  {
    id: 7,
    name: 'Maribel',
    lastname: 'Cabarcas',
    ci: '11.235.763',
    phone: '(0414)-2346123',
    email: 'maribel@gmail.com',
    role: 'SUPERVISOR',
    isActive: true,
    token: crypto.randomUUID(),
    group: fakeGroupsUser[2]
  },
  {
    id: 8,
    name: 'Maria',
    lastname: 'Juanes',
    ci: '88.432.456',
    phone: '(0424)-7859458',
    email: 'mariajuanes@gmail.com',
    role: 'COORDINATOR',
    isActive: true,
    token: crypto.randomUUID(),
    group: fakeGroupsUser[3]
  },
  {
    id: 9,
    name: 'Jose',
    lastname: 'Idalgo',
    ci: '26.444.745',
    phone: '(0414)-0983451',
    email: 'j.idalgo@example.com',
    role: 'ADMINISTRATOR',
    isActive: true,
    token: crypto.randomUUID(),
    group: fakeGroupsUser[4]
  },
  {
    id: 10,
    name: 'Crisbely',
    lastname: 'Mares',
    ci: '86.34.125',
    phone: '(0424)-1257654',
    email: 'j.idalgo@example.com',
    role: 'ADMINISTRATOR',
    isActive: true,
    token: crypto.randomUUID(),
    group: fakeGroupsUser[4]
  },
  {
    id: 11,
    name: 'Pedro',
    lastname: 'Blanco',
    ci: '9.656.345',
    phone: '(0412)-7451653',
    email: 'j.idalgo@example.com',
    role: 'ADMINISTRATOR',
    isActive: true,
    token: crypto.randomUUID(),
    group: fakeGroupsUser[4]
  }
]

const fakeSubcategories = [
  {
    id: 67,
    title: 'Grupo de Operadores 1',
    description: 'lorem ipsu detniat',
    isActive: true
  }
]

const fakeCategories = [
  {
    id: 46,
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

const statusType = [
  {
    id: 23,
    title: 'Estados de GPS',
    description: 'lorem ipsu detniat',
    isActive: true,
    status: [...status]
  }
]

const gpsModels: IGPSModel[] = [
  {
    id: 87,
    title: 'VTS GT02',
    description: 'lorem ipsu detniat',
    image: 'https://via.placeholder.com/200/red',
    isActive: true,
    type: 'Operativo'
  }
]

const gpsMarks: IGPSMark[] = [
  {
    id: 257,
    title: 'Miggy',
    description: 'lorem ipsu detniat',
    image: 'https://via.placeholder.com/100/red',
    isActive: true,
    gpsModels
  }
]

const meterModels = [
  {
    id: 345,
    title: 'VTS GT02',
    description: 'lorem ipsu detniat',
    image: 'https://via.placeholder.com/200/red',
    typeMeter: 'Litros',
    isActive: true
  }
]

const meterMarks = [
  {
    id: 874,
    title: 'Pekin',
    description: 'lorem ipsu detniat',
    image: 'https://via.placeholder.com/100/red',
    isActive: true,
    models: [...meterModels]
  }
]

export const trucks = [
  {
    id: 766,
    title: 'VTS GT02',
    image: 'https://via.placeholder.com/200/red',
    numberPlate: 'AB054MN',
    typeTruck: 'Gandola',
    status: 'Operativo',
    station: null,
    fleet: null
  }
]

export const fleets = [
  {
    id: 105,
    title: 'Pekin',
    description: 'lorem ipsu detniat',
    status: 'Operativo',
    trucks: [...trucks]
  }
]

export const gpsDevices: IGPSDevice[] = [
  {
    id: 257,
    serial: 'J-454NX2',
    image: 'https://via.placeholder.com/100/red',
    status: 'Operativo',
    fleet: fleets[0],
    gpsMark: gpsMarks[0],
    gpsModel: gpsModels[0],
    truck: trucks[0]
  }
]

export const states: IState[] = [
  {
    id: 343,
    latCenter: '10.475133262177959',
    lngCenter: '-66.89036951713241',
    title: 'Distrito Capital'
  }
]

export const cities: ICity[] = [
  {
    id: 105,
    title: 'Caracas',
    lat: '10.475133262177959',
    lng: '-66.89036951713241'
  }
]

export const stations: IStation[] = [
  {
    id: 105,
    title: 'Estacion Las Mercedes',
    status: 'Operativo',
    lat: '10.484595715655246',
    lng: '-66.86487300765505',
    type: 'Gandola',
    city: cities[0],
    metersCount: 44,
    reference: 'Estacion de Servicio Las Mercedes, ubicado en las Mercedes :D'
  }
]

export const routes: IRoute[] = [
  {
    id: 3471,
    originStation: 'Estacion 1',
    finalStation: 'Estacion 2',
    fleet: fleets[0],
    gpsDevice: gpsDevices[0],
    guide: 'J-45MNXG23',
    status: 'En Curso',
    truck: trucks[0]
  }
]

type TypeData = 'USERS' |
  'CATEGORIES' |
  'SUBCATEGORIES' |
  'STATUS_TYPE' |
  'STATUS' |
  'GPS_MARKS' |
  'GPS_MODELS' |
  'METER_MARKS' |
  'METER_MODELS' |
  'FLEETS' |
  'CITIES' |
  'STATIONS' |
  'GPS_DEVICES' |
  'ROUTES'

const FAKE_DATA_DIC = {
  USERS: () => fakeUsers,
  CATEGORIES: () => fakeCategories,
  SUBCATEGORIES: () => fakeCategories.find(category => category.subcategories),
  STATUS_TYPE: () => statusType,
  STATUS: () => statusType.find(statusType => statusType.status),
  GPS_MARKS: () => gpsMarks,
  GPS_MODELS: () => gpsMarks.find(gpsMark => gpsMark.gpsModels),
  METER_MARKS: () => meterMarks,
  METER_MODELS: () => meterMarks.find(meterMark => meterMark.models),
  FLEETS: () => fleets,
  TRUCKS: () => fleets.find(fleets => fleets.trucks),
  STATIONS: () => stations,
  STATES: () => states,
  CITIES: () => cities,
  GPS_DEVICES: () => gpsDevices,
  ROUTES: () => routes
}

//  @ts-ignore
export const getFakeData = (typeData: TypeData): any[] => FAKE_DATA_DIC[typeData]()
