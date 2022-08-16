// import { useState, useEffect } from 'react';
// import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';
// import Rumpun from '@/components/Rumpun';
// import { DEFILE_UNIT, mockData, SELAMAT_DATANG } from '@/types/constant';
// import vistock from '@/assets/images/background-detail-page/vistock22.png';
// import VistockBackground from '@/components/VistockBackground';
import ToBeAnnounced from './ToBeAnnounced';

const TreasureHuntPage = () => {
    document.title = 'Defile - DEVA: Blog OSKM ITB 2022';
    return <ToBeAnnounced />;
};
// const [available, setAvailable] = useState(false);
// const [password, setPassword] = useState('');
// const [incorrect, setIncorrect] = useState(false);
// const [show, setShow] = useState(false);
// const date1 = new Date('2022-08-15');
// const date2 = new Date();

// if (date1.getDate() > date2.getDate()) {
// return <ToBeAnnounced />
// }
// const handleClick = () => setShow(!show);

// const submitPassword = (e: any) => {
//     if (e.key === 'Enter') {
//         if (password === 'password') {
//             setAvailable(true);
//             localStorage.setItem('available', 'true');
//             window.scrollTo(0, 0);
//         } else {
//             setIncorrect(true);
//         }
//     }
// };

// const inputPassword = (e: any) => {
//     setIncorrect(false);
//     setPassword(e.target.value);
// };

// useEffect(() => {
//     const result = localStorage.getItem('available');
//     const availableRes = result ? JSON.parse(result) : false;
//     if (availableRes) {
//         setAvailable(availableRes);
//     } else {
//         setAvailable(false);
//     }
// }, []);

// document.title = 'Defile - DEVA: Blog OSKM ITB 2022';

// return (
//     <div>
//         <div className="py-20 bg-Yellow">
//             <h1 className="text-4xl font-Heading font-bold mb-2 text-center">
//                 {available ? DEFILE_UNIT : SELAMAT_DATANG}
//             </h1>
//         </div>
//         {!available ? (
//             <div className="min-h-content bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] flex flex-col items-center justify-center py-5 relative z-10  overflow-hidden">
//                 <div className="w-full px-3 md:w-2/3 xl:w-1/2 text-center z-10">
//                     <p className="text-xl font-Body">
//                         Defile unit adalah ....
//                     </p>
//                     <p className="text-xl font-Body">
//                         Tapi sebelum itu kalian harus menjawab clue ini buat
//                         menemukan{' '}
//                         <span className="font-bold font-Body">
//                             password
//                         </span>{' '}
//                         yang membawa kalian ke unit - unit
//                     </p>
//                     <iframe
//                         src="https://www.youtube.com/embed/i9LWnyI0VrE"
//                         title="YouTube video player"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         className="my-4 mx-auto w-full h-[14em] md:h-[17em] lg:h-[24em]"
//                     />
//                     <div className="flex flex-col gap-3">
//                         <div>
//                             <p className="font-Body font-semibold text-xl">
//                                 Clue 1 :
//                             </p>
//                             <p className="font-Body text-lg">
//                                 Lorem ipsum dolor sit amet consectetur
//                                 adipisicing elit. Laborum nulla optio
//                                 similique?
//                             </p>
//                         </div>
//                         <div>
//                             <p className="font-Body font-semibold text-xl">
//                                 Clue 2 :
//                             </p>
//                             <p className="font-Body text-lg">
//                                 Lorem ipsum dolor sit amet consectetur
//                                 adipisicing elit. Laborum nulla optio
//                                 similique?
//                             </p>
//                         </div>
//                         <div>
//                             <p className="font-Body font-semibold text-xl">
//                                 Clue 3 :
//                             </p>
//                             <p className="font-Body text-lg">
//                                 Lorem ipsum dolor sit amet consectetur
//                                 adipisicing elit. Laborum nulla optio
//                                 similique?
//                             </p>
//                         </div>
//                     </div>
//                     <p className="font-Body mt-5 mb-2">
//                         Kalo udah ketemu, masukin passwordnya di bawah ini
//                     </p>
//                     <InputGroup
//                         minWidth="200px"
//                         maxWidth={{ base: 'xs', md: 'sm', lg: 'md' }}
//                         mx="auto"
//                         my="2"
//                         onKeyDown={(e: any) => submitPassword(e)}
//                     >
//                         <Input
//                             type={show ? 'text' : 'password'}
//                             bg="#FFCD90"
//                             pr="4.5rem"
//                             focusBorderColor="#D27C2F"
//                             borderColor="#D27C2F"
//                             placeholder="Enter Password"
//                             _placeholder={{ color: '#D27C2F' }}
//                             color="#511D05"
//                             outline="none"
//                             className="text-DarkerOrange"
//                             _hover={{ border: '1px solid #D27C2F' }}
//                             onChange={(e: any) => inputPassword(e)}
//                         />
//                         <InputRightElement width="4.5rem">
//                             <Button
//                                 h="1.75rem"
//                                 size="sm"
//                                 bg="#D27C2F"
//                                 color="white"
//                                 fontFamily="Alegreya Sans Regular"
//                                 fontWeight="400"
//                                 _hover={{
//                                     bg: '#D27C2F',
//                                 }}
//                                 _active={{
//                                     bg: '#D27C2F',
//                                 }}
//                                 onClick={handleClick}
//                             >
//                                 {show ? 'Hide' : 'Show'}
//                             </Button>
//                         </InputRightElement>
//                     </InputGroup>
//                     {incorrect && (
//                         <p className="text-[red] font-Body text-xl">
//                             Incorrect Password
//                         </p>
//                     )}
//                 </div>
//                 <img
//                     src={vistock}
//                     alt="vistock"
//                     className="absolute z-[-1] h-full hidden md:block w-screen md:top-0 lg:top-[-2em]"
//                 />
//             </div>
//         ) : (
//             <div className="bg-gradient-to-b h-full from-[#FF8952] to-[#F9DCB0] pt-10 pb-10 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl z-10 relative overflow-hidden">
//                 <VistockBackground />
//                 <div className="bg-MediumBrown bg-opacity-70 rounded-[37px] py-6 px-4 text-center">
//                     <p className="text-center text-xl ">
//                         Haloo, teman-teman maba! <br />
//                         Selamat datang di DEFILE UNIT! Kalian telah berhasil
//                         memecahkan teka teki dan menemukan harta karun ini.{' '}
//                         <br />
//                         <br />
//                         Berikut terdapat beberapa rumpun dari unit-unit yang
//                         ada di ITB. Rumpun-rumpun ini adalah kategori dari
//                         berbagai unit di ITB yang serumpun, seperti BSO,
//                         Agama, Budaya, Seni, Olahraga, dan
//                         Pendidikan/Media/Kajian. Di dalamnya, teman-teman
//                         bisa melihat unit apa saja yang tergabung dalam
//                         kategori rumpun-rumpun yang ada. Silakan klik
//                         rumpunnya, dan saksikan beragam unit yang ada di
//                         ITB!
//                         <br />
//                         <br />
//                         Psst! Buat kalian yang masih kepo, pantengin terus
//                         OHU pada 27 Agustus 2022 yaa!
//                     </p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 max-w-screen-xl w-full place-items-center">
//                     {mockData.map(({ name, link }) => (
//                         <Rumpun link={link} key={name} name={name} />
//                     ))}
//                 </div>
//             </div>
//         )}
//     </div>
// );
export default TreasureHuntPage;
