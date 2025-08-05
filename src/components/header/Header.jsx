import Button from '../button/Button';
import nextArrow from './next.svg';
import previousArrow from './previous.svg'

const Header = () => {
    return (
        <header className="bg-header-bg bg-dark-blue bg-no-repeat bg-center bg-cover bg-blend-multiply text-white pt-[85px] pb-[163px]">
            <nav className='flex justify-center'>
                <ul className="flex justify-between space-x-[43px] text-lg font-medium">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>☉</li>
                    <li>Be</li>
                </ul>
            </nav>
            <div className='flex justify-between items-center space-x-[206px] px-[115px] mt-[142px]'>
                <img className='w-[20px] h-[45px]' src={previousArrow} alt="Previous" />
                <div className='flex flex-col justify-center'>
                    <h1 className='text-center text-2xl font-medium'>Starup 3</h1>
                    <h2 className='text-center text-7xl mt-[29px] font-bold'>Forget About Code</h2>
                    <p className='text-center text-[22px] mt-[29px] font-medium'>Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. </p>

                    <div className='flex justify-center space-x-[9px] mt-[48px]'>
                        <div className='header-round active'></div>
                        <div className='header-round'></div>
                        <div className='header-round'></div>
                        <div className='header-round'></div>
                        <div className='header-round'></div>
                    </div>

                    <Button text="Create an Account" color="bg-bright-blue" marginTop="mt-[58px]" width="230px" />
                </div>
                <img className='w-[20px] h-[45px]' src={nextArrow} alt="Next" />
            </div>
        </header>
    );
}

export default Header;