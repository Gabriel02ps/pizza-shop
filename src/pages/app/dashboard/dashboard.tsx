import { Helmet } from 'react-helmet-async'

import { DayOrdersAmounthCard } from './day-orders-amounth-card copy'
import { MonthCanceledOrdersAmounthCard } from './month-canceled-orders-amounth-card'
import { MonthOrdersAmounthCard } from './month-orders-amounth-card copy'
import { MonthRevenueCard } from './month-revenue-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmounthCard />
          <DayOrdersAmounthCard />
          <MonthCanceledOrdersAmounthCard />
        </div>
      </div>
    </>
  )
}