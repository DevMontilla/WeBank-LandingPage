import chartImg from "../assets/chart.svg";

const ChartInfo = () => {
  return (
    <div className="flex justify-center items-center my-20 md:m-0">
      <div className="absolute h-[340px] w-[247.12px] bg-gradient-to-b from-[#F44E77] to-[#812DE2] blur-xl" />
      <div className="flex z-10 justify-center items-center h-[386px] w-[247.12px] rounded-sm bg-gradient-to-b from-[#F44E77] to-[#812DE2]">
        <div className="container h-[380px] w-[240.12px] rounded-2xl bg-strong-violet p-5">
          <div className="flex flex-col">
            <span className="font-['Poppins'] text-xs font-medium text-secondary-text">
              Mi Cartera
            </span>
            <span className="font-['Poppins'] text-lg font-semibold text-secondary-text">
              Próximas Vacaciones
            </span>
            <span className="font-['Poppins'] text-xl font-semibold text-secondary-text">
              1.000 USD
            </span>
            <span className="font-['Poppins'] text-sm font-extralight text-secondary-text">
              Composición del objetivo
            </span>
          </div>
          <div className="flex items-center justify-between py-7">
            <img src={chartImg} alt="chart-img" className="w-32" />
            <div className="flex flex-col">
              <CoinText>BTC</CoinText>
              <CoinText>ETH</CoinText>
              <CoinText>USDT</CoinText>
              <CoinText>DAI</CoinText>
              <CoinText>PAXG</CoinText>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-['Poppins'] text-xs font-medium text-secondary-text">
              Cotizaciones
            </span>
            <span className="font-['Poppins'] text-lg font-semibold text-secondary-text">
              Criptmonedas
            </span>
            <span className="font-['Poppins'] text-sm font-extralight text-secondary-text">
              Seguimiento instatáneo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoinText = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-2 h-2 bg-[#F44E77] rounded-full mr-1" />
      <span className="text-secondary-text font-['Poppins'] font-extralight text-xs">
        {children}
      </span>
    </div>
  );
};

export default ChartInfo;
