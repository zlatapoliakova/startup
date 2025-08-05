import Customer from "./customer/Customer";

import firstUser from "./customer/1.jpg";
import secondUser from "./customer/2.jpg";
import thirdUser from "./customer/3.jpg";
import fourdUser from "./customer/4.jpg";

const arr = [
    {img: firstUser, name: "Rayhan Curran", comment: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support"},
    {img: secondUser, name: "Kayley Frame", comment: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website"},
    {img: thirdUser, name: "Gene Whitfield", comment: "The most important part of the Startup Framework is the samples"},
    {img: fourdUser, name: "Allan Kim", comment: "I’ve built my website with Startup just in one day, and it was ready-to-go. "},
]

const Testimonial = () => {
    return (
        <div className="text-white bg-dark-dark-blue px-[215px] py-[102px]">
            <h2 className="font-bold text-[42px]">Our Happy Clients</h2>
            <div className="flex flex-wrap gap-[30px] mt-[30px]">
                {
                    arr.map(({img, name, comment}) => <Customer img={img} comment={comment} name={name}/>)
                }
            </div>
        </div>
    );
}

export default Testimonial;