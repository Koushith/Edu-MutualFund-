import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

function HistoricChart({ singleFund }) {
  // const dates = singleFund.map((extDate) => extDate.grapData.date);
  // const nav = singleFund.map((extNav) => extNav.grapData.nav);

  // console.log(nav);

  const config = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [
          '08-09-2014',
          '07-09-2014',
          '05-09-2014',
          '04-09-2014',
          '03-09-2014',
          '02-09-2014',
          '01-09-2014',
          '31-08-2014',
          '28-08-2014',
          '27-08-2014',
          '26-08-2014',
          '25-08-2014',
          '24-08-2014',
          '22-08-2014',
          '21-08-2014',
          '20-08-2014',
          '19-08-2014',
          '18-08-2014',
          '14-08-2014',
          '13-08-2014',
          '12-08-2014',
          '11-08-2014',
          '10-08-2014',
          '08-08-2014',
          '07-08-2014',
          '06-08-2014',
          '05-08-2014',
          '04-08-2014',
          '03-08-2014',
          '01-08-2014',
          '31-07-2014',
          '30-07-2014',
          '29-07-2014',
          '28-07-2014',
          '27-07-2014',
          '25-07-2014',
        ],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [
          '118.75380',
          '119.72930',
          '118.68060',
          '120.65620',
          '130.63110',
          '135.60630',
          '140.75280',
          '115.72820',
          '130.65530',
          '125.63100',
          '115.60630',
          '120.75210',
          '130.72710',
          '132.67890',
          '145.65430',
          '150.63030',
          '152.60580',
          '154.75200',
          '156.65480',
          '140.63040',
          '158.60580',
          '160.75160',
          '162.72720',
          '164.67830',
          '168.65390',
          '170.63010',
          '172.60550',
          '174.75020',
          '176.72610',
          '178.67760',
          '180.65370',
          '172.62920',
          '184.60510',
          '186.75110',
          '182.72700',
          '181.67880',
          '170.65400',
        ],
      },
    ],
  };

  return (
    <>
      <Chart options={config.options} series={config.series} type='area' />
    </>
  );
}

export default HistoricChart;
