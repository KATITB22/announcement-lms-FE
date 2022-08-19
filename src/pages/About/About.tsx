import oskmLogo from '@/assets/images/logo/logo-oskm-itb-bawah.png';
import { useToggle } from '@/hooks/useToggle';
import VistockAbout from '@/components/VistockAbout';
import AboutDetail from './AboutDetail';

const About: React.FC<{}> = () => {
    const [isOn, toggle] = useToggle();
    document.title = 'About - DEVA: Blog OSKM ITB 2022';
    return (
        <div className="relative min-h-content">
            <VistockAbout />
            {isOn ? (
                <AboutDetail toggle={toggle} />
            ) : (
                <div className="bg-gradient-to-b from-DarkOrange to-MediumBrown">
                    <div className="container max-w-screen-lg min-h-screen mx-auto px-[3.75rem] py-4">
                        <div className="relative flex flex-col items-center bg-MediumBrown bg-opacity-70 rounded-[37px] py-6 px-4 lg:bg-transparent text-center">
                            <div className="hidden w-60 h-40 rounded-xl absolute mt-16 lg:block">
                                &nbsp;
                            </div>
                            <img
                                className="relative w-52"
                                src={oskmLogo}
                                alt="logo-oskm"
                            />
                            <p className="text-h6 md:text-[40px] lg:text-h4">
                                Sejak awal, OSKM ITB merupakan ajang kaderisasi
                                terpusat yang kental dengan agenda pergerakan...
                            </p>
                            <button
                                type="button"
                                onClick={toggle}
                                className="bg-MediumOrange px-4 py-3 mt-8 rounded-[15px] drop-shadow-lg hover:drop-shadow-xl"
                            >
                                See More
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
