import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
interface CharProps {
  coinId: string;
}
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
function Chart({ coinId }: CharProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
    // { refetchInterval: 10000 }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexCharts
          type={"candlestick"}
          series={[
            {
              name: "Price",
              data:
                data?.map((price) => ({
                  x: price.time_close,
                  y: [price.open, price.high, price.low, price.close],
                })) ?? [],
            },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 5,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              labels: { show: false },
              axisTicks: { show: false },
              type: "datetime",
              categories:
                data?.map((price) =>
                  new Date(Number(price.time_close) * 1000).toISOString()
                ) ?? [],
            },
            // fill: {
            //   type: "gradient",
            //   gradient: { gradientToColors: ["blue"],stops:[0,100] },
            // },
            // colors: ["red"],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
