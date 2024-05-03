import clsx from "clsx";

interface Props {
  icon: string;
  title: string;
  order: string;
}

const Feature = ({ title, order, icon }: Props) => {

  return (
    <div className="flex my-5 mx-3">
      <div className="w-[146px] h-[146px] rounded-3xl bg-gradient-to-r from-[#F44E77] to-[#812DE2] flex justify-center items-center">
        <div className="bg-strong-violet w-[144px] h-[144px] rounded-3xl flex flex-col items-center pt-10">
          <img src={icon} alt={`${icon}-order`} className={clsx({
            "w-9 -mt-3": icon === '/src/assets/analytic.svg',
            "w-10": icon !== '/src/assets/analytic.svg',
          })}/>
          
          <span className="text-secondary-text font-['Poppins'] text-md">
            {title}
          </span>
          <h1 className="font-['Poppins'] text-[75px] font-medium bg-gradient-to-r from-[#F44E77] to-[#812DE2] inline-block text-transparent bg-clip-text -mt-3">
            {order}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Feature;
