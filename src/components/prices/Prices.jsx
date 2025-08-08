import Price from "./price/Price";

const arr = [
    {name: 'Starter', price: '9.99', checked: [{item:'2 GB of space', check: true}, {item:'14 days of backups', check: true}, {item:'Social integrations', check: true}, {item:'Client billing', check: true}, {item:'Remote access', check: false}, {item:'Custom domain', check: false}, {item:'24 hours support', check: false}, {item:'Admin tools', check: false}, {item:'Collaboration tools', check: false}, {item:'User management', check: false}], active: ''},
    {name: 'Professional', price: '19.99', checked: [{item:'2 GB of space', check: true}, {item:'14 days of backups', check: true}, {item:'Social integrations', check: true}, {item:'Client billing', check: true}, {item:'Remote access', check: true}, {item:'Custom domain', check: true}, {item:'24 hours support', check: true}, {item:'Admin tools', check: false}, {item:'Collaboration tools', check: false}, {item:'User management', check: false}], active: 'active-btn'},
    {name: 'Team', price: '49.99', checked: [{item:'2 GB of space', check: true}, {item:'14 days of backups', check: true}, {item:'Social integrations', check: true}, {item:'Client billing', check: true}, {item:'Remote access', check: true}, {item:'Custom domain', check: true}, {item:'24 hours support', check: true}, {item:'Admin tools', check: true}, {item:'Collaboration tools', check: true}, {item:'User management', check: true}], active: ''},
];

const Prices = () => {
    return (
        <div className="bg-dark-blue bg-no-repeat bg-center bg-prices-bg bg-blend-multiply px-[115px] py-[100px] text-white text-center">
            <h2 className="text-[42px]/[52px] font-bold">Plans & Pricing</h2>
            <p className="text-[22px]/8 font-medium mt-[30px] ">Startup Framework is free forever — you only pay for <br className="hidden lg:block"/> custom domain hosting or to export your site.</p>

            <div className="flex flex-wrap justify-between mt-[54px]">
                {
                    arr.map(item => <Price {...item} />)
                }
            </div>
        </div>
    );
}

export default Prices;