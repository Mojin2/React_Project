import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
interface CharProps {
  coinId: string;
}
const Wrapper = styled.div``;
const Detail = styled.div`
  padding: 5px 0px;
  text-align: center;
  margin-bottom: 10px;
`;
function Price({ coinId }: CharProps) {
  const { isLoading, data } = useQuery<PriceData>(["tickers", coinId], () =>
    fetchCoinTickers(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading price..."
      ) : (
        <Wrapper>
          <Detail>15분전 : {data?.quotes.USD.percent_change_15m} %</Detail>
          <Detail>30분전 : {data?.quotes.USD.percent_change_30m} %</Detail>
          <Detail>1시간전 : {data?.quotes.USD.percent_change_1h} %</Detail>
          <Detail>6시간전 : {data?.quotes.USD.percent_change_6h} %</Detail>
          <Detail>12시간전 : {data?.quotes.USD.percent_change_12h} %</Detail>
          <Detail>24시간전 : {data?.quotes.USD.percent_change_24h} %</Detail>
        </Wrapper>
      )}
    </div>
  );
}

export default Price;
