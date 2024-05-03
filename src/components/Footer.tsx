const Footer = () => {
  return (
    <footer className="bg-strong-violet pt-40">
      <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 grid grid-cols-1 divide-y divide-secondary-text">
        <div className="relative flex flex-col items-center justify-between md:flex-row md:items-start">
          <div className="flex flex-1 flex-col items-center justify-start md:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="/vite.svg" alt="Landing Page" />
            </div>
            <span className="text-secondary-text font-['Poppins'] text-xs my-5">
              Potenciando tus finanzas.
            </span>
          </div>
          <div className="my-10 flex flex-1 flex-col w-full md:flex-row md:justify-evenly">
            <div className="flex flex-row justify-evenly">
              {/* Soluciones */}
              <div className="flex flex-col w-32 items-end md:items-start">
                <span className="text-secondary-text font-['Poppins'] text-sm my-5 font-normal">
                  Soluciones
                </span>
                <FooterLink title="Marketing" />
                <FooterLink title="Análisis" />
                <FooterLink title="Comercio" />
                <FooterLink title="Insights" />
              </div>
              {/* Empresa */}
              <div className="flex flex-col w-32">
                <span className="text-secondary-text font-['Poppins'] text-sm my-5 font-normal">
                  Empresa
                </span>
                <FooterLink title="Nosotros" />
                <FooterLink title="Blog" />
                <FooterLink title="Careers" />
                <FooterLink title="Prensa" />
                <FooterLink title="Partners" />
              </div>
            </div>

            <div className="flex flex-row justify-evenly">
              {/* Contacto */}
              <div className="flex flex-col w-32 items-end md:items-start">
                <span className="text-secondary-text font-['Poppins'] text-sm my-5 font-normal">
                  Contacto
                </span>
                <FooterLink title="Costos" />
                <FooterLink title="Documentación" />
                <FooterLink title="Guías" />
                <FooterLink title="API Docs" />
              </div>
              {/* Legal */}
              <div className="flex flex-col w-32">
                <span className="text-secondary-text font-['Poppins'] text-sm my-5 font-normal">
                  Legal
                </span>
                <FooterLink title="Reclamos" />
                <FooterLink title="Privacidad" />
                <FooterLink title="Términos" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 w-full flex flex-col justify-center items-center md:flex-row">
          <span className="font-['Poppins] text-[11px] text-gray-400 font-extralight md:pr-1">
            © 2024{" "}
            <a
              href="https://www.figma.com/community/file/1291318968121247202"
              target="_blank"
              className="hover:underline"
            >
              WeBank, Inc.
            </a>{" "}
            Todos los derechos reservados.
          </span>
          <span className="font-['Poppins] text-[11px] text-gray-400 font-extralight">
            Desarrollado por{" "}
            <a
              href="https://www.linkedin.com/in/daniel-montilla/"
              target="_blank"
              className="hover:underline font-semibold"
            >
              Daniel Montilla
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

interface Props {
  title: string;
}

const FooterLink = ({ title }: Props) => {
  return (
    <span className="text-secondary-text font-['Poppins'] text-xs font-thin my-2 cursor-pointer hover:underline">
      {title}
    </span>
  );
};

export default Footer;
