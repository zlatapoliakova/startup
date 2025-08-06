import Worker from "./worker/Worker";

import firstWorker from "./worker/1.jpg";
import secondWorker from "./worker/2.jpg";
import thirdWorker from "./worker/3.jpg";
import fourdWorker from "./worker/4.jpg";
import fifthWorker from "./worker/5.jpg";

import twitter from "./worker/twitter.svg";
import facebook from "./worker/facebook.svg";
import dribbble from "./worker/dribbble.svg"
import skype from "./worker/skype.svg";
import instagram from "./worker/instagram.svg";
import medium from "./worker/medium.svg"
import git from "./worker/git.svg";

const arr = [
    {img: firstWorker, name: "Leah Salomon", proffesion: "UI Designer", socialMedia: [twitter, facebook, dribbble, instagram]},
    {img: secondWorker, name: "Colin Timmons", proffesion: "UX Designer", socialMedia: [twitter, dribbble]},
    {img: thirdWorker, name: "Miguel Osborne", proffesion: "Front-end Developer", socialMedia: [skype, medium, git]},
    {img: fourdWorker, name: "Taylor Simon", proffesion: "Product Manager", socialMedia: [twitter, instagram]},
    {img: fifthWorker, name: "Steven MacAlister", proffesion: "Copyrighter", socialMedia: [twitter]},
];

const Team = () => {
    return (
        <div className="text-white bg-dark-dark-blue py-[100px] pl-[115px] pr-[520px]">
            <h2 className="text-[42px]/[52px] font-bold">Startup Crew</h2>
            <p className="text-[22px]/8 font-medium mt-[30px]">The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.</p>

            <div className="flex flex-wrap gap-x-[145px] gap-y-[60px] mt-[70px]">
                {
                    arr.map(item => <Worker {...item} />)
                }
            </div>
        </div>
    );
}

export default Team;