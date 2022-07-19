import oskmLogo from '../../resource/oskm-logo.svg';
import AboutDetail from './AboutDetail';
import { useToggle } from '../../hooks/useToggle';

const About = () => {
    const [isOn, toggle] = useToggle();

    return isOn ? (
        <AboutDetail toggle={toggle} />
    ) : (
        <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0]">
            <div className="container max-w-screen-lg min-h-screen mx-auto px-[3.75rem]">
                <p className="text-[24px] text-center pt-16 pb-16">about us</p>
                <div className="relative flex flex-col items-center bg-[#F9DCB0] opacity-70 rounded-[37px] pb-6 px-4 lg:bg-transparent">
                    <div className="hidden lg:bg-[#F9DCB0] lg:w-60 lg:h-40 lg:rounded-xl lg:block lg:absolute lg:mt-16">
                        &nbsp;
                    </div>
                    <img
                        className="relative -top-[4rem] -mb-[4rem] lg:w-96"
                        src={oskmLogo}
                        alt=""
                    />
                    <p className="text-[20px] md:text-[40px] lg:text-[48px] text-center">
                        Pemasaran yang dulu dilakukan dengan menggunakan flyer,
                        spanduk, koran, kini beralih ke media digital dan juga
                        internet
                    </p>

                    <button
                        type="button"
                        onClick={toggle}
                        className="bg-[#FFC176] text-white px-4 py-3 mt-8 rounded-[15px] drop-shadow-lg hover:drop-shadow-xl"
                    >
                        see more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
