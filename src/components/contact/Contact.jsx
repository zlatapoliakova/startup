import { useState } from "react";

import Button from "../button/Button";

import selectArrow from "./select-arrow.svg";
import phone from "./phone.svg";
import letter from "./letter.svg";
import building from "./building.svg";

const Contact = () => {
    const [check, setCheck] = useState(false);

    return (
        <div className="flex justify-between items-center space-x-[89px] px-[216px] py-[100px] bg-dark-blue bg-blend-multiply bg-contact-bg">
            <div className="text-white">
                <h2 className="font-bold text-[42px]/[52px]">Let’s Keep in Touch</h2>
                <p className="font-medium text-[22px]/8 mt-7">We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
                <div className="flex gap-x-4 mt-[54px] text-base/[26px] font-normal">
                    <img src={phone} alt="Phone" />
                    +1 555 505 5050
                </div>
                <div className="flex gap-x-4 mt-[44px] text-base/[26px] font-normal">
                    <img src={letter} alt="Letter" />
                    info@designmodo.com
                </div>
                <div className="flex gap-x-4 mt-[44px] text-base/[26px] font-normal">
                    <img src={building} alt="Building" />
                    San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909
                </div>
            </div>

            <form className="min-w-[470px] bg-white rounded-[10px] px-[50px] py-[57px]">
                <div className="flex space-x-[30px]">
                    <div>
                        <label className="contact-label" htmlFor="">Your name</label>
                        <input className="rounded-full contact-input" type="text" placeholder="First name"/>
                    </div>
                    <div className="relative">
                        <label className="contact-label" htmlFor="">Budget</label>
                        <img className="absolute top-[54px] right-[26px]" src={selectArrow} alt="Select arrow" />
                        <select className="min-w-[142px] appearance-none rounded-full contact-input text-dark-dark-blue text-lg/[26px] font-medium]" name="" id="">
                            <option className="" value="">$500</option>
                        </select>
                    </div>
                </div>
                <label className="contact-label mt-[35px]" htmlFor="">Input field</label>
                <input className="rounded-full contact-input" type="text" placeholder="name@mail.com"/>
                <label className="contact-label mt-[35px]" htmlFor="">Your message</label>
                <div className="relative">
                    <label className="absolute font-medium text-lg/[26px] left-3 top-4 text-light-grey" htmlFor="">Message</label>
                    <input className="min-h-[110px] w-full rounded-[10px] px-[19px] border-2 border-[#EBEAED]" type="textarea"/>
                </div>
                <div className="flex items-center justify-between mt-[45px]">
                    <label className="flex items-center text-light-grey">
                        
                        {
                            check ? 
                                <div className="w-[20px] h-[20px] bg-turquoise rounded-sm mr-3">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke="#1E0E62" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                                </div> :
                            <div className="w-[20px] h-[20px] border-2 border-dark-dark-blue rounded-sm mr-3"></div>
                        }
                        <input onClick={() => setCheck(check => !check)} className="absolute opacity-0" type="checkbox" />
                        <div className="text-base/[26px] font-normal">Send me a copy</div>
                    </label>
                    <Button text="Send" color="bg-turquoise" auto="m-0"/>
                </div>
            </form>
        </div>
    );
}

export default Contact;