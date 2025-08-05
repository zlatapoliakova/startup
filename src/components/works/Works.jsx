import Work from "./work/Work";

import firstWork from "./work/1.jpg";
import secondWork from "./work/2.jpg";
import thirdWork from "./work/3.jpg";
import fourdWork from "./work/4.jpg";

const arr = [
    {img: firstWork, type: "UI kit", name: "Mozart Project"},
    {img: secondWork, type: "Framework", name: "Startup Framework 2.0"},
    {img: thirdWork, type: "Photos", name: "From the Sky"},
    {img: fourdWork, type: "Pictures", name: "Air Forces"},
];

const Works = () => {
    return (
        <div className="bg-dark-dark-blue px-[215px] pt-[100px] pb-[110px] text-white">
            <div className="flex justify-between items-center">
                <h2 className="text-[42px]/[52px] font-bold">Last works</h2>
                <button className="rounded-full border-2 border-[rgba(255,255,255,0.5)] text-lg/[26px] font-medium px-6 py-3">View all Works</button>
            </div>

            <div className="flex flex-wrap justify-between gap-y-[74px] mt-[53px]">
                {
                    arr.map(item => <Work {...item}/>)
                }
            </div>
        </div>
    );
}

export default Works;