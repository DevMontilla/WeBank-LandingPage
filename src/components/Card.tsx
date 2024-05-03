import { MouseEvent, useState } from "react";
import viteLogo from "/vite.svg";
import chip from "../assets/chip.svg";
import visaLogo from "../assets/visa.svg";
import bitcoinLogo from "../assets/bitcoin.svg";
import ethereumLogo from "../assets/ethereum.svg";
import contactless from "../assets/contactless.svg";

interface MousePosition {
  x: number;
  y: number;
}

const Card = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const calculateTransform = () => {
    const rotationX = (mousePosition.y - 50) / 10;
    const rotationY = -(mousePosition.x - 50) / 10;

    return `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  };

  return (
    <div
      className="flex"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: calculateTransform() }}
    >
      <div className="absolute h-[386px] w-[247.12px] rounded-3xl bg-gradient-to-b from-[#F44E77] to-[#812DE2] blur-xl" />
      <div className="flex z-10 justify-center items-center h-[386px] w-[247.12px] rounded-2xl bg-gradient-to-b from-[#F44E77] to-[#812DE2]">
        <div className="container h-[380px] w-[240.12px] rounded-2xl bg-strong-violet">
          <img
            src={chip}
            alt="card-chip"
            className="w-[43px] relative top-8 left-36"
          />
          <img
            src={contactless}
            alt="contactless-icon"
            className="w-[37px] relative -top-4 left-48"
          />
          <div className="relative top-[12%] left-[23%]">
            <div className="flex bg-[#F44E77] rounded-full justify-center items-center h-32 w-32">
              <img
                src={viteLogo}
                alt="card-chip"
                className="w-[150px] rotate-20"
              />
            </div>
          </div>
          <img
            src={visaLogo}
            alt="visa-logo"
            className="relative w-[80px] top-[31%] left-[62%]"
          />
          <img
            src={bitcoinLogo}
            alt="card-chip"
            className="relative w-[35px] top-[22%] left-[6%]"
          />
          <img
            src={ethereumLogo}
            alt="card-chip"
            className="relative w-[34px] top-[13%] left-[20%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
