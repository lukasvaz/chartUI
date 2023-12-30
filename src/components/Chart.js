import * as React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function Chart({ data }) {
  const [index, setIndex] = React.useState(0);
  const [chartOptions, setChartOptions] = React.useState({
    chart: {
      type: 'areaspline',
      backgroundColor: 'transparent',
    },
    title: null,
    xAxis: {
      lineColor: '#004d40',
      tickColor: 'white',
      lineWidth: 3,
      visible: true,
      labels: {
        style: {
          color: 'white',
        },
        format: '{text} min',
      },
    },
    yAxis: {
      title: {
        text: 'Units',
        style: {
          color: 'white',
        },
      },
      gridLineWidth: 0,
      labels: {
        style: {
          color: 'white',
        },
      },
    },

    colors: ['#00bfa5'],
    plotOptions: {
      areaspline: {
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#00bfa5'],
            [1, 'transparent'],
          ],
        },
      },
    },
    tooltip: { enabled: false },
    legend: { enabled: false },
    series: [
      {
        data: data[0]['data']
          .slice(index, index + 100)
          .map((x) => [(x[0] - 1701406860000) / 60000, x[1]]),
      },
    ],
  });

  const updateSeries = () => {
    setIndex(index + 5);
    setChartOptions({
      series: [
        {
          data: data[0]['data']
            .slice(index, index + 100)
            .map((x) => [(x[0] - 1701406860000) / 60000, x[1]]),
        },
      ],
    });
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      updateSeries();
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </>
  );
}
