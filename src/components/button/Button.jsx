const Button = ({text, color, marginTop=0, width, auto="m-auto"}) => {
    return <button className={`${width} rounded-full ${color} px-[35px] py-[15px] ${marginTop} ${auto} text-white`}>{text}</button>
    
}

export default Button;