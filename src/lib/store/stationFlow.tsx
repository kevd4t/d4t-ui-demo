import { FormCreateStation } from '@/components/page/estaciones/FormCreateStation'
import { IconGasStation } from '@tabler/icons-react'
import { create } from 'zustand'
import { IContentTabs, IStation, TAccountTabKey } from '../types'
// tabToActive

interface IUseStationFlow {
  currentStation: IStation
  stationTabs: IContentTabs[]
  setStation: (station: IStation) => void
  setCompleteTab: (tabToActive: TAccountTabKey) => void
  setActiveTab: (tabToActive: TAccountTabKey) => void
  allowTabsToComplete: () => void
  getTabActive: () => IContentTabs
}

export const useStationFlow = create<IUseStationFlow>((set, get) => ({
  currentStation: null,

  stationTabs: [
    {
      tabKey: 'BASIC_INFO',
      label: 'Información Básica',
      isDisabled: false,
      isActive: true,
      isCompleted: true,
      icon: <IconGasStation />,
      route: '/info',
      content: <FormCreateStation />
    },
    {
      tabKey: 'ISLANDS',
      label: 'Islas',
      isDisabled: true,
      isActive: false,
      isCompleted: false,
      route: '/islas',
      icon: <IconGasStation />,
      content: <div>Islas</div>
    },
    {
      tabKey: 'TANKS',
      label: 'Tanques',
      isDisabled: true,
      isActive: false,
      isCompleted: false,
      route: '/tanques',
      icon: <IconGasStation />,
      content: <div>Tanques</div>
    },
    {
      tabKey: 'DISPENSERS',
      label: 'Dispensadores',
      isDisabled: true,
      isActive: false,
      isCompleted: false,
      route: '/dispensadores',
      icon: <IconGasStation />,
      content: <div>Dispensadores</div>
    },
    {
      tabKey: 'METERS',
      label: 'Medidores',
      isDisabled: true,
      isActive: false,
      isCompleted: false,
      route: '/medidores',
      icon: <IconGasStation />,
      content: <div>Medidores</div>
    }
  ],

  setStation: (station) => set(() => ({ currentStation: station })),

  setActiveTab: (tabToActive: TAccountTabKey) => set((prevState) => ({
    stationTabs: prevState.stationTabs.map(stationTab => {
      if (tabToActive === stationTab.tabKey) {
        return { ...stationTab, isActive: true }
      }

      return { ...stationTab, isActive: false }
    })
  })),

  setCompleteTab: (tabCompleted: TAccountTabKey) => set((prevState) => ({
    stationTabs: prevState.stationTabs.map(stationTab => {
      if (tabCompleted === stationTab.tabKey) {
        return { ...stationTab, isCompleted: true }
      }

      return { ...stationTab }
    })
  })),

  getTabActive: () => get().stationTabs.find(stationTab => stationTab.isActive === true),

  allowTabsToComplete: () => set((prevState) => ({
    stationTabs: prevState.stationTabs.map(stationTab => ({ ...stationTab, isDisabled: false }))
  }))
}))
