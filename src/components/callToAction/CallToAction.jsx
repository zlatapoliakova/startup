import Button from "../button/Button";

import playIcon from "./play-icon.svg"

const CallToAction = () => {
    return (
        <div className="text-center text-white bg-dark-blue bg-blend-multiply bg-call-bg bg-no-repeat bg-center py-[100px] px-[315px]">
            <h2 className="font-bold text-[58px]/[70px]">Easy to setup.<br/> Easy to maintain</h2>
            <p className="text-[22px]/[32px] mt-5">Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.</p>
            <div className="flex justify-center items-center space-x-[30px] mt-[58px]">
                <button className="rounded-full bg-[#EA3223] p-[27px]"><img src={playIcon} alt="Play icon" /></button>
                <Button text="Get Started" color="bg-turquoise" />
            </div>
        </div>
    );
}

export default CallToAction;