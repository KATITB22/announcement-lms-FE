import oskmLogo from '@/assets/images/logo/logo-oskm-itb-bawah.png';
import { useToggle } from '@/hooks/useToggle';
import PageTransition from '@/components/PageTransition';
import VistockAbout from '@/components/VistockAbout';
import AboutDetail from './AboutDetail';

const aboutContents: Array<string> = [
    'Pemasaran yang dulu dilakukan dengan menggunakan flyer, spanduk, koran, kini beralih ke media digital dan juga internet',
];

const About: React.FC<{}> = () => {
    const [isOn, toggle] = useToggle();
    document.title = 'About - OSKM ITB 2022';
    return (
        <PageTransition>
            <div className="relative min-h-content">
                <VistockAbout />
                {isOn ? (
                    <AboutDetail toggle={toggle} />
                ) : (
                    <div className="bg-gradient-to-b from-DarkOrange to-MediumBrown">
                        <div className="container max-w-screen-lg min-h-screen mx-auto px-[3.75rem] py-4">
                            <div className="relative flex flex-col items-center bg-MediumBrown opacity-70 rounded-[37px] py-6 px-4 lg:bg-transparent text-center">
                                <div className="hidden w-60 h-40 rounded-xl absolute mt-16 lg:block">
                                    &nbsp;
                                </div>
                                <img
                                    className="relative w-52"
                                    src={oskmLogo}
                                    alt="logo-oskm"
                                />
                                {aboutContents.map((content: string) => (
                                    <p
                                        key={`aboutcontent${aboutContents.indexOf(
                                            content
                                        )}`}
                                        className="text-h6 md:text-[40px] lg:text-h4"
                                    >
                                        {content}
                                    </p>
                                ))}
                                <button
                                    type="button"
                                    onClick={toggle}
                                    className="bg-MediumOrange text-white px-4 py-3 mt-8 rounded-[15px] drop-shadow-lg hover:drop-shadow-xl"
                                >
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </PageTransition>
    );
};

export default About;
