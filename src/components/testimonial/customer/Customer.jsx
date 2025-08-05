const Customer = ({img, comment, name}) => {
    return (
        <div className="min-h-[237px] h-[100%] relative flex space-x-[30px] border-2 border-[rgba(255,255,255,0.5)] rounded-[10px] pt-[35px] pl-[35px] pr-7 ">
            <img className="w-[70px] h-[70px] rounded-[10px]" src={img} alt="User image" />

            <div className="w-[300px]">
                <p className="text-lg/7 font-medium">{comment}</p>
                <div className="absolute bottom-6 uppercase font-bold text-sm/[26px] text-[rgba(255,255,255,0.5)]">{name}</div>
            </div>
        </div>
    );
}

export default Customer;