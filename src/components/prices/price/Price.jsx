import Button from "../../button/Button";
import checkIcon from "./check-icon.png";

const Price = ({name, price, checked, active}) => {
    return (
        <div className="min-w-[370px] text-left px-[70px] pt-[64px] pb-[56px] border-2  rounded-[10px] ">
            <h3 className="text-[22px]/8 font-medium">{name}</h3>
            <div className="flex gap-x-2 mt-6">
                <div className="inline text-[58px]/[70px] font-bold">{price}</div>
                <div className="text-top text-base/[26px] font-normal">$</div>
            </div>
            <ul className="text-base/[26px] font-normal space-y-[10px] mt-[45px] ">
                {
                    checked.map(item => 
                        <li className="relative">
                            <img className={`absolute ${item.check ? 'inline' : 'hidden'} top-1 left-[-24px]`} src={checkIcon} alt="Check" />
                            <div className="inline">{item.item}</div>
                        </li>
                    )
                }
            </ul>
            <button className={`${active} border-[rgba(255,255,255,0.5)] border-2 rounded-full w-full mt-[30px] m-auto text-[20px]/[26px] font-medium px-[30px] py-3`}>Get Started</button>
        </div>
    );
}

export default Price;