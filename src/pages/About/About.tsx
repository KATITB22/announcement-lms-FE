import { ABOUT_US_TITLE } from '@/types/constant';
import oskmLogo from '@/assets/images/oskm-logo-text.svg';
import { useToggle } from '@/hooks/useToggle';
import AboutDetail from './AboutDetail';

const aboutContents: Array<string> = [
    'Pemasaran yang dulu dilakukan dengan menggunakan flyer, spanduk, koran, kini beralih ke media digital dan juga internet',
];

const About: React.FC<{}> = () => {
    const [isOn, toggle] = useToggle();
    return (
        <div>
            {isOn ? (
                <AboutDetail toggle={toggle} />
            ) : (
                <div className="bg-gradient-to-b from-DarkOrange to-MediumBrown">
                    <div className="container max-w-screen-lg min-h-content mx-auto px-[3.75rem]">
                        <p className="font-Heading text-4xl text-center pt-16 pb-16">
                            {ABOUT_US_TITLE}
                        </p>
                        <div className="relative flex flex-col items-center bg-MediumBrown opacity-70 rounded-[37px] pb-6 px-4 lg:bg-transparent text-center">
                            <div className="hidden bg-MediumBrown w-60 h-40 rounded-xl absolute mt-16 lg:block">
                                &nbsp;
                            </div>
                            <img
                                className="relative -top-[4rem] -mb-[4rem] lg:w-96"
                                src={oskmLogo}
                                alt=""
                            />
                            {aboutContents.map((content: string) => (
                                <p
                                    key={`aboutcontent${aboutContents.indexOf(
                                        content
                                    )}`}
                                    className="font-Subheading text-h6 md:text-[40px] lg:text-h3"
                                >
                                    {content}
                                </p>
                            ))}
                            <button
                                type="button"
                                onClick={toggle}
                                className="font-title bg-MediumOrange text-white px-4 py-3 mt-8 rounded-[15px] drop-shadow-lg hover:drop-shadow-xl"
                            >
                                see more
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
