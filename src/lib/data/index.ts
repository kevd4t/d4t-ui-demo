import { ICity, IState, IStation, ITruck, IUser, IUserGroup } from '../types/'
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

const fakeUserGroups: IUserGroup[] = [
  {
    id: 1,
    title: 'Grupo de Operadores 1',
    description: 'lorem ipsu detniat',
    moduleAccess: MODULE_ACCESS_BY_ROLE.OPERATOR_DEFAULT,
    isActive: true
  },
  {
    id: 2,
    title: 'Grupo de Supervisores 4',
    description: 'lorem ipsu detniat',
    moduleAccess: MODULE_ACCESS_BY_ROLE.SUPERVISOR_DEFAULT,
    isActive: true
  },
  {
    id: 3,
    title: 'Grupo de Coordinadores',
    description: 'lorem ipsu detniat',
    moduleAccess: MODULE_ACCESS_BY_ROLE.COORDINATOR_DEFAULT,
    isActive: true
  },
  {
    id: 4,
    title: 'Grupo de Administradores',
    description: 'lorem ipsu detniat',
    moduleAccess: MODULE_ACCESS_BY_ROLE.ADMINISTRATOR_DEFAULT,
    isActive: true
  }
]

const fakeUsers: IUser[] = [
  {
    id: 1,
    names: 'Kevin Daniel',
    surnames: 'Blanco Ortiz',
    ci: {
      type: 'V',
      number: '26567324',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EXAMPLEVENEZUELANID.jpg/800px-EXAMPLEVENEZUELANID.jpg'
    },
    phone: '04123285323',
    email: 'k.blanco@d4t.tech',
    role: 'OPERATOR',
    isActive: true,
    username: 'user_name.35',
    photo: 'https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',
    group: fakeUserGroups[0],
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: 2,
    names: 'Kevin',
    surnames: 'Sanchez',
    ci: {
      type: 'V',
      number: '87436283',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EXAMPLEVENEZUELANID.jpg/800px-EXAMPLEVENEZUELANID.jpg'
    },
    phone: '04164357213',
    email: 'k.sanchez@d4t.tech',
    role: 'SUPERVISOR',
    isActive: false,
    username: 'user_name.35',
    photo: 'https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',
    group: fakeUserGroups[1],
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: 3,
    names: 'Danilo',
    surnames: 'Torento',
    ci: {
      type: 'V',
      number: '43356824',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EXAMPLEVENEZUELANID.jpg/800px-EXAMPLEVENEZUELANID.jpg'
    },
    phone: '04247887432',
    email: 'danilo@gmail.com',
    role: 'COORDINATOR',
    isActive: true,
    username: 'user_name.35',
    photo: 'https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',
    group: fakeUserGroups[3],
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: 4,
    names: 'Brandon',
    surnames: 'Rodriguez',
    ci: {
      type: 'V',
      number: '64347341',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EXAMPLEVENEZUELANID.jpg/800px-EXAMPLEVENEZUELANID.jpg'
    },
    phone: '04163514364',
    email: 'brandonr4op@hotmail.com',
    role: 'ADMINISTRATOR',
    isActive: true,
    username: 'user_name.35',
    photo: 'https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',
    group: fakeUserGroups[4],
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: 5,
    names: 'Daniela',
    surnames: 'Perez',
    ci: {
      type: 'V',
      number: '56545534',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EXAMPLEVENEZUELANID.jpg/800px-EXAMPLEVENEZUELANID.jpg'
    },
    phone: '04128730594',
    email: 'd.perez@d4t.tech',
    role: 'ADMINISTRATOR',
    isActive: true,
    username: 'user_name.35',
    photo: 'https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',
    group: fakeUserGroups[4],
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: 6,
    names: 'Jhon',
    surnames: 'Smith',
    ci: {
      type: 'V',
      number: '65334545',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EXAMPLEVENEZUELANID.jpg/800px-EXAMPLEVENEZUELANID.jpg'
    },
    phone: '04148634572',
    email: 'j.smith@example.com',
    role: 'OPERATOR',
    isActive: false,
    username: 'user_name.35',
    photo: 'https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',
    group: fakeUserGroups[0],
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: 7,
    names: 'Maribel',
    surnames: 'Cabarcas',
    ci: {
      type: 'V',
      number: '11235763',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EXAMPLEVENEZUELANID.jpg/800px-EXAMPLEVENEZUELANID.jpg'
    },
    phone: '04142346123',
    email: 'maribel@gmail.com',
    role: 'SUPERVISOR',
    isActive: true,
    username: 'user_name.35',
    photo: 'https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',
    group: fakeUserGroups[2],
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: 8,
    names: 'Maria',
    surnames: 'Juanes',
    ci: {
      type: 'V',
      number: '88432456',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EXAMPLEVENEZUELANID.jpg/800px-EXAMPLEVENEZUELANID.jpg'
    },
    phone: '04247859458',
    email: 'mariajuanes@gmail.com',
    role: 'COORDINATOR',
    isActive: true,
    username: 'user_name.35',
    photo: 'https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',
    group: fakeUserGroups[3],
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: 9,
    names: 'Jose',
    surnames: 'Idalgo',
    ci: {
      type: 'V',
      number: '26444745',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EXAMPLEVENEZUELANID.jpg/800px-EXAMPLEVENEZUELANID.jpg'
    },
    phone: '04140983451',
    email: 'j.idalgo@example.com',
    role: 'ADMINISTRATOR',
    isActive: true,
    username: 'user_name.35',
    photo: 'https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',
    group: fakeUserGroups[4],
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: 10,
    names: 'Crisbely',
    surnames: 'Mares',
    ci: {
      type: 'V',
      number: '8634125',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EXAMPLEVENEZUELANID.jpg/800px-EXAMPLEVENEZUELANID.jpg'
    },
    phone: '04241257654',
    email: 'j.idalgo@example.com',
    role: 'ADMINISTRATOR',
    isActive: true,
    username: 'user_name.35',
    photo: 'https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',
    group: fakeUserGroups[4],
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },
  {
    id: 11,
    names: 'Pedro',
    surnames: 'Blanco',
    ci: {
      type: 'V',
      number: '9656345',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EXAMPLEVENEZUELANID.jpg/800px-EXAMPLEVENEZUELANID.jpg'
    },
    phone: '04127451653',
    email: 'j.idalgo@example.com',
    role: 'ADMINISTRATOR',
    isActive: true,
    username: 'user_name.35',
    photo: 'https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',
    group: fakeUserGroups[4],
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
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

export const trucks: ITruck[] = [
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
    title: 'Estación Las Mercedes',
    status: 'Operativo',
    lat: '10.484595715655246',
    lng: '-66.86487300765505',
    type: 'Gandola',
    city: cities[0],
    metersCount: 44,
    reference: 'Estación de Servicio Las Mercedes, ubicado en las Mercedes :D',
    trucks
  }
]

export const routes: IRoute[] = [
  {
    id: 3471,
    originStation: 'Estación 1',
    finalStation: 'Estación 2',
    fleet: fleets[0],
    gpsDevice: gpsDevices[0],
    guide: 'J-45MNXG23',
    status: 'En Curso',
    truck: trucks[0]
  }
]

type TypeData =
  'USERS' |
  'USER_GROUPS' |
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
  USER_GROUPS: () => fakeUserGroups,
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
