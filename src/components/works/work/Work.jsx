const Work = ({img, type, name}) => {
    return (
        <div className="text-center">
            <img className="rounded-[10px] w-[470px] h-[280px] object-cover" src={img} alt="Cover for work" />
            <div className="uppercase font-bold text-sm/[26px] mt-[30px]">{type}</div>
            <h3 className="font-medium text-[22px]/[32px]">{name}</h3>
        </div>
    );
}

export default Work;