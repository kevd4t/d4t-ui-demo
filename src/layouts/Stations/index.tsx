/* eslint-disable react-hooks/exhaustive-deps */
// import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { type IStation, type ReactNode } from '@/lib/types'
import { useStationFlow } from '@/lib/store/stationFlow'
import { getStationByID } from '@/lib/services/stations'

import { Card, Button, CardContent, Skeleton } from '@/components/ui'
import { CardResumeStation } from '@/components/layout/stations/CardResumeStation'

export const StationsLayout = ({ children }: { children: ReactNode }) => {
  const { asPath, query } = useRouter()
  const {
    stationTabs,
    isLoading,
    setStation,
    currentStation,
    setActiveAttributeTab,
    allowAttributeTabsToComplete,
    // getAttributeTabActive,
    setIsLoading
  } = useStationFlow()

  useEffect(() => {
    setIsLoading(true)

    if (query.id && !currentStation) {
      (async () => {
        const station = await getStationByID({ id: query.id })
        setStation(station.results as IStation)
        setIsLoading(false)
      })()
    }

    if (currentStation) {
      setIsLoading(false)
    }
  }, [query, currentStation])

  useEffect(() => {
    if (currentStation) {
      stationTabs.PUMP.forEach((stationTab) => {
        if (asPath.includes(stationTab.route)) {
          setActiveAttributeTab(currentStation.type, stationTab.tabKey)
        }
      })

      stationTabs.STOCKAGE.forEach((stationTab) => {
        if (asPath.includes(stationTab.route)) {
          setActiveAttributeTab(currentStation.type, stationTab.tabKey)
        }
      })
    }
  }, [asPath, currentStation])

  useEffect(() => {
    if (currentStation) {
      if (!asPath.includes('/estaciones/crear')) {
        allowAttributeTabsToComplete(currentStation.type)
      }
    }
  }, [asPath, currentStation])

  if (!isLoading && !currentStation) {
    return (
      <div className='h-[85vh] w-full flex flex-col justify-center items-center text-xl font-bold'>
        Estación no Encontrada
      </div>
    )
  }

  return (
    <Card className='border-none'>
      <CardContent className='p-0'>
        <div className='w-full h-full flex justify-start'>

          <section className='w-min flex relative'>
            <div className='flex flex-col justify-start items-start gap-y-4 h-min sticky top-0 left-0 pt-6'>
              {
                (isLoading)
                  ? <SkeletonStationAttributes />
                  : <StationAttributes stationTabs={stationTabs} stationType={currentStation.type} />
              }
            </div>

            <div className='mx-7'></div>
          </section>

          <section className='w-full flex justify-between items-start relative'>
            {/* <AnimatePages getAttributeTabActive={getAttributeTabActive}> */}
            {children}
            {/* </AnimatePages> */}
            <div className='mx-7'></div>

            {
              currentStation && (
                <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
                  <CardResumeStation station={currentStation} />
                </div>
              )
            }
          </section>
        </div>
      </CardContent>
    </Card>
  )
}

// const AnimatePages = ({ children, getAttributeTabActive }) => {
//   return (
//     <div className='w-full h-full'>
//       <AnimatePresence initial={false} mode='wait'>
//         <motion.div
//           exit={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           initial={{ opacity: 0 }}
//           key={getAttributeTabActive().tabKey}
//           transition={{ duration: 0.2 }}
//         >
//           {children}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   )
// }

const SkeletonStationAttributes = () => {
  return (
    <>
      <Skeleton className='w-44 h-12 justify-start whitespace-nowrap gap-x-2' />
      <Skeleton className='w-44 h-12 justify-start whitespace-nowrap gap-x-2' />
      <Skeleton className='w-44 h-12 justify-start whitespace-nowrap gap-x-2' />
      <Skeleton className='w-44 h-12 justify-start whitespace-nowrap gap-x-2' />
      <Skeleton className='w-44 h-12 justify-start whitespace-nowrap gap-x-2' />
    </>
  )
}

const StationAttributes = ({ stationTabs, stationType }) => {
  const { push, query, asPath } = useRouter()

  const handleClick = (contentTab) => {
    push(`/estaciones/${query.id}/${contentTab.route}${asPath.includes('/crear') ? '/crear' : ''}`)
  }

  return (
    <>
      {
        stationTabs[stationType].map((contentTab, idx) => (
          <Button
            tabIndex={idx}
            variant='outline'
            key={contentTab.tabKey}
            disabled={contentTab.isDisabled}
            onClick={() => handleClick(contentTab)}
            className={`relative w-full py-6 justify-start whitespace-nowrap gap-x-2 ${query?.attribute?.includes(contentTab.route.replace('/', '')) ? 'bg-accent' : ''}`}
          >
            {
              !contentTab.isCompleted && (
                <div className='h-3 w-3 rounded-full bg-red-700 animate-pulse'></div>
              )
            }

            {contentTab.icon}
            {contentTab.label}
          </Button>
        ))
      }
    </>
  )
}
