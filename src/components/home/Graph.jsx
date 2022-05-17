import { useEffect, useRef } from "preact/hooks";
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
import {
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
// import { useGraphData } from "../../hooks";
import { subDays, differenceInDays, compareAsc } from "date-fns";
import { useGraphFilter } from "../../hooks/useGraphFilter";
Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Tooltip,
  Legend
);

const Graph = () => {
  const elRef = useRef();
  const chartRef = useRef();
  // const { items } = useGraphData();
  const fromDate = useGraphFilter((state) => state.fromDate);
  const toDate = useGraphFilter((state) => state.toDate);

  useEffect(() => {
    const now = new Date().setHours(0, 0, 0, 0);
    const labels = [
      subDays(now, 7),
      subDays(now, 6),
      subDays(now, 5),
      subDays(now, 4),
      subDays(now, 3),
      subDays(now, 2),
      subDays(now, 1),
      subDays(now, 0),
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "All Usage",
          backgroundColor: "rgb(99, 80, 239)",
          borderColor: "rgb(79, 70, 229)",
          data: labels.map((el) => ({ x: el, y: 0 })),
          spanGaps: false,
        },
      ],
    };
    const options = {
      responsive: true,
      spanGaps: false,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          type: "time",
          time: {
            unit: "day",
          },
        },
      },
    };
    const config = {
      type: "line",
      data: data,
      options: options,
    };
    chartRef.current = new Chart(elRef.current.getContext("2d"), config);

    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    const diff = differenceInDays(toDate, fromDate);
    const labels = [];
    for (let index = diff; index >= 0; index--) {
      labels.push(subDays(toDate.setHours(0, 0, 0, 0), index));
    }
    const chart = chartRef.current;
    chart.data.labels = labels;
    chart.update();
  }, [fromDate, toDate]);

  // useEffect(() => {
  //   if (items?.length) {
  //     const data = items.map(
  //       ({ count, created_at_day, created_at_month, created_at_year }) => ({
  //         x: new Date(
  //           `${created_at_year}-${created_at_month}-${created_at_day}`
  //         ).setHours(0, 0, 0, 0),
  //         y: +count.unique_id,
  //       })
  //     );
  //     data.sort((a, b) => compareAsc(a.x, b.x));
  //     const chart = chartRef.current;
  //     chart.data.datasets[0].data = data;
  //     chart.update();
  //   }
  // }, [items]);

  return (
    <div className='bg-white w-full max-h-min rounded-lg p-3 sm:p-6 shadow'>
      <canvas ref={elRef}>
        
      </canvas>
    </div>
  );
};

export default Graph;
