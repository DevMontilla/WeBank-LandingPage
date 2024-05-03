import Button from "./components/Button";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import mobileImg from "./assets/mobileapp.svg";
import appStore from "./assets/appstore.svg";
import googlePlay from "./assets/googleplay.svg";
import ChartInfo from "./components/ChartInfo";
import Feature from "./components/Feature";
import moneyIcon from "./assets/money.svg";
import arrowIcon from "./assets/arrow.svg";
import analyticIcon from "./assets/analytic.svg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Wellcome Section */}
        <div className="w-full bg-strong-violet pt-10 pb-20 md:py-40">
          <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center md:items-start mb-20 md:m-0">
              <h1 className="font-['Poppins'] font-semibold text-[50px] sm:text-[80px] bg-gradient-to-r from-[#F44E77] to-[#812DE2] inline-block text-transparent bg-clip-text">
                Bienvenido al
              </h1>
              <h1 className="font-['Poppins'] font-semibold text-[50px] sm:text-[80px] text-primary-text leading-[0.4]">
                futuro de la
              </h1>
              <h1 className="font-['Poppins'] font-semibold text-[50px] sm:text-[80px] text-primary-text">
                banca
              </h1>
              <div className="w-2/3 mb-9 flex">
                <span className="font-['Poppins'] text-secondary-text text-center md:text-start">
                  Potencia tu experiencia bancaria: ¡Todas tus operaciones
                  financieras en la palma de tu mano con nuestra aplicación
                  móvil!
                </span>
              </div>
              <Button />
            </div>
            <Card />
          </div>
        </div>
        {/* Moible App Section */}
        <div className="w-full bg-[#F2F6FF]">
          <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 py-10">
            <img src={mobileImg} alt="mobile-img" className="md:w-[60%]" />
            <div className="flex flex-col md:-ml-20">
              <h1 className="font-['Poppins'] font-semibold text-[40px] sm:text-strong-violet text-center sm:text-start">
                ¿Listo para comenzar?
              </h1>
              <span className="font-['Poppins'] text-strong-violet text-center md:text-start">
                ¡Descarga nuestra aplicación hoy!
              </span>
              <div className="w-full flex justify-center md:justify-start -mt-3">
                <button>
                  <img
                    src={appStore}
                    alt="app-store"
                    className="w-36 md:w-44"
                  />
                </button>
                <button>
                  <img
                    src={googlePlay}
                    alt="google-play"
                    className="w-36 md:w-44 ml-2 md:ml-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Analytics Section */}
        <div className="w-full bg-strong-violet pt-10 pb-20 md:py-40">
          <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="font-['Poppins'] font-semibold text-[40px] text-primary-text text-center leading-10 md:mb-20">
                En la palma de su mano
              </h1>
              <div className="w-full flex flex-col items-center md:flex-row md:justify-between">
                <ChartInfo />
                <div className="mx-10 md:ml-10 md:mr-0 flex flex-col justify-center">
                  <h4 className="font-['Poppins'] font-semibold text-secondary-text text-center md:text-start text-2xl mb-7">
                    Nuestro compromiso con la Innovación
                  </h4>
                  <span className="font-['Poppins'] text-secondary-text text-center md:text-justify md:max-w-lg mb-10">
                    En el mundo acelerado de hoy, administrar sus finanzas no
                    debería frenarlo. Dígale adiós a las largas colas y a los
                    rígidos horarios bancarios: nuestra aplicación móvil de
                    última generación está aquí para transformar la forma en que
                    maneja sus transacciones financieras.
                  </span>
                  <div className="flex flex-col items-center md:flex-row">
                    <Feature title="Análisis" order="1" icon={analyticIcon} />
                    <Feature title="Movimientos" order="2" icon={arrowIcon} />
                    <Feature
                      title="Transferencias"
                      order="3"
                      icon={moneyIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
