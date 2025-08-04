const Feature = ({image, title, descr}) => {
    return (
        <div>
            <img className="w-[37px] h-[37px]" src={image} alt="Icon for feature"/>
            <h3 className="uppercase font-bold text-sm/[26px] text-shadow-lg mt-[29px]">{title}</h3>
            <p className="font-normal text-base/[26px] mt-[16px]">{descr}</p>
        </div>
    );
}

export default Feature;