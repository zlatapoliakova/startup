import Button from "../button/Button";

const Form = () => {
    return (
        <div className="flex items-center space-x-[130px] px-[215px] py-[100px] bg-content-bg bg-dark-blue bg-blend-multiply bg-no-repeat bg-left">
            <div className="text-white">
                <h2 className="font-bold text-[42px]">We solve digital problems with an outstanding creative flare</h2>
                <p className="mt-[32px] font-normal text-base">We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
            </div>

            <div className="bg-white rounded-[10px]">
                <div className="flex">
                    <button className="active-tab text-light-grey text-sm font-bold uppercase border-b-[3px] w-[50%] py-[25px]">Sign Up</button>
                    <button className="text-sm text-light-grey font-bold uppercase border-b-[3px] w-[50%] py-[25px]">Login</button>
                </div>

                <form className= "px-[70px] pt-[70px] pb-[80px]">
                    <input className="w-[100%] rounded-full border-2 border-light-grey px-6 py-3 " type="email" placeholder="Your email" />
                    <input className="mt-[30px] w-[100%] rounded-full border-2 border-light-grey px-6 py-3 " type="password" placeholder="Your password" />

                    <Button text="Create An Account" color="bg-light-blue" marginTop="mt-[40px]" width="w-[100%]" />
                    
                    <div className="flex items-center space-x-[15px] mt-[30px]">
                        <div className="w-[142px] h-[2px] bg-[#141414] opacity-10"></div>
                        <div className="font-normal text-base text-light-grey">or</div>
                        <div className="w-[142px] h-[2px] bg-[#141414] opacity-10"></div>
                    </div>

                    <Button text="Login via twitter" color="bg-turquoise" marginTop="mt-[30px]" width="w-[100%]" />
                </form>
            </div>
        </div>
    );
}

export default Form;