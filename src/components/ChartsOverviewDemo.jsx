import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
  return (
    <BarChart
      series={[

        { data: [35, 44, 24, 34, 28, 40, 50, 20, 45, 30, 22, 55] },
        { data: [51, 6, 49, 30, 33, 25, 40, 35, 29, 27, 31, 60] },
        
      ]}
      height={290}
      xAxis={[{ data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 25, right: 10 }}
      
    />
  );
}