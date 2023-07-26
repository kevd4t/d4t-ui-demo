import dynamic from 'next/dynamic'

import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { CardDetailStation } from '@/components/page/monitoreo/estaciones/CardDetailStation'
import { ScopeDataGraph } from '@/components/page/monitoreo/estaciones/ScopeDataGraph'
import { calendarChartData } from '@/components/common/charts/calendarChartData'
import { heatMapChartData } from '@/components/common/charts/heatMapChartData'
import { lineChartData } from '@/components/common/charts/lineChartData'
import { barChartData } from '@/components/common/charts/barChartData'
import { pieChartData } from '@/components/common/charts/pieChartData'
import { Card, CardHeader } from '@/components/ui'

const { ROUTES } = siteConfig

const MonitoringStationsPage = () => {
  const LineChartNoSSR = dynamic(() => import('@/components/common/charts/LineChart'), { ssr: false })
  const BarChartNoSSR = dynamic(() => import('@/components/common/charts/BarChart'), { ssr: false })
  const PieChartNoSSR = dynamic(() => import('@/components/common/charts/PieChart'), { ssr: false })
  const HeatMapChartNoSSR = dynamic(() => import('@/components/common/charts/HeatMapChart'), { ssr: false })
  const CalendarChartNoSSR = dynamic(() => import('@/components/common/charts/CalendarChart'), { ssr: false })

  return (
    <div className='w-full h-full flex justify-start items-start'>
      <div className='w-full h-full mr-4'>
        <Card>
          <CardHeader>
            <ScopeDataGraph />
          </CardHeader>
        </Card>

        <section className='w-full h-full flex flex-col justify-start items-start'>
          <div className='w-full h-full flex justify-start items-start mt-4 gap-x-4'>
            <Card className='h-96 w-full'>
              <LineChartNoSSR data={lineChartData} />
            </Card>

            <Card className='h-96 w-full'>
              <BarChartNoSSR data={barChartData} />
            </Card>
          </div>

          <div className='w-full h-full flex justify-start items-start mt-4 gap-x-4'>
            <Card className='h-96 w-full'>
              <PieChartNoSSR data={pieChartData} />
            </Card>

            <Card className='h-96 w-full'>
              <HeatMapChartNoSSR data={heatMapChartData} />
            </Card>
          </div>

          <Card className='h-96 w-full mt-4'>
            <CalendarChartNoSSR data={calendarChartData} />
          </Card>
        </section>
      </div>

      <section className='h-full sticky top-0 right-0'>
        <CardDetailStation />
      </section>
    </div>
  )
}

MonitoringStationsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.MONITORING.STATIONS.LIST.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default MonitoringStationsPage
