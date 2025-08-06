const Worker = ({img, name, proffesion, socialMedia}) => {
    return (
        <div>
            <img className="w-[100px] h-[100px] rounded-full" src={img} alt="Worker image" />
            <div className="text-[22px]/[32px] font-medium mt-4">{name}</div>
            <div className="font-normal text-base/[26px] mt-2">{proffesion}</div>

            <div className="flex gap-x-[30px] mt-5">
                {
                    socialMedia.map(item => <img src={item} alt="Social media icon"/>)
                }
            </div>
        </div>
    );
}

export default Worker;