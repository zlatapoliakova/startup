import facebook from "./facebook.svg";
import google from "./google.svg";
import twitter from "./twitter.svg";

const Footer = () => {
    return (
        <div className="text-base/[26px] font-normal px-[115px] py-[45px] bg-dark-dark-blue text-white">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Startup 3</h2>
                <ul className="flex items-center gap-x-[30px]">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
                    <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                    <li><a href="#"><img src={google} alt="Google" /></a></li>
                </ul>
            </div>
            <div className="mt-[41px] h-[2px] w-full rounded-full bg-[rgba(255,255,255,0.5)]"></div>
            <div className="flex justify-between mt-[48px]">
                <ul className="flex gap-x-[30px]">
                    <li><a href="">Tour</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing Plans</a></li>
                    <li><a href="">Our Works</a></li>
                    <li><a href="">Brands</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
                <div>© 2017 Designmodo. All rights reserved.</div>
            </div>
        </div>
    );
}

export default Footer;