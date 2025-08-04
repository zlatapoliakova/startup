import Feature from './feature/Feature';

import laptop from './laptop.png';
import screen from './screen.jpeg';
import pages from './feature/pages.svg';
import diamond from './feature/diamond.svg';

const Features = () => {
    return (
        <div className="relative flex space-x-[158px] bg-features-bg bg-cover bg-no-repeat bg-dark-blue bg-blend-multiply pl-[515px] pr-[115px] py-[158px] text-white">
            <img className='h-[535px] absolute left-[-33%]' src={laptop} alt="Laptop" />
            <img className='object-cover w-[734px] h-[450px] absolute top-[25%] left-[-35%]' src={screen} alt="Laptop's screen" />
            
            <div>
                <h2 className='text-[42px]/[52px] font-bold'>We Create Something New</h2>
                <p className='text-[22px]/[32px] font-medium mt-5'>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
                <div className='flex space-x-[30px] mt-[67px]'>
                    <Feature 
                        image={pages} 
                        title="30 New feature pages" 
                        descr="Startup Framework contains components and complex blocks which can easily. "/>
                    <Feature 
                        image={diamond} 
                        title="Useful Symbol Components" 
                        descr="Samples will show you the feeling on how to play around using the components."/>
                </div>
            </div>

            <div className='flex flex-col justify-center space-y-[9px] mt-[48px]'>
                <div className='header-round active'></div>
                <div className='header-round'></div>
                <div className='header-round'></div>
                <div className='header-round'></div>
                <div className='header-round'></div>
            </div>
            
        </div>
    );
}

export default Features;