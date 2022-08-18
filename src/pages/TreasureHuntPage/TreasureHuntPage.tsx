import { useState, useEffect } from 'react';
import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';
import Rumpun from '@/components/Rumpun';
import { DEFILE_UNIT, mockData, SELAMAT_DATANG } from '@/types/constant';
import vistock from '@/assets/images/background-detail-page/vistock22.png';
import VistockBackground from '@/components/VistockBackground';
import Clue1 from '@/assets/images/clue/1.jpg';
import Clue2 from '@/assets/images/clue/2.jpg';
import Clue3 from '@/assets/images/clue/3.jpg';
import { getSecret } from '@/util/util';

const TreasureHuntPage = () => {
    const [available, setAvailable] = useState(false);
    const [password, setPassword] = useState('');
    const [incorrect, setIncorrect] = useState(false);
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const submitPassword = (e: any) => {
        if (e.key === 'Enter') {
            if (password === getSecret()) {
                setAvailable(true);
                localStorage.setItem('password', password);
                window.scrollTo(0, 0);
            } else {
                setIncorrect(true);
            }
        }
    };

    const inputPassword = (e: any) => {
        setIncorrect(false);
        setPassword(e.target.value);
    };

    useEffect(() => {
        const result = localStorage.getItem('password');
        const availableRes = result;
        if (availableRes === getSecret()) {
            setAvailable(true);
        } else {
            setAvailable(false);
        }
    }, []);

    document.title = 'Defile - DEVA: Blog OSKM ITB 2022';

    return (
        <div>
            <div className="py-20 bg-Yellow">
                <h1 className="text-4xl font-Heading font-bold mb-2 text-center">
                    {available ? DEFILE_UNIT : SELAMAT_DATANG}
                </h1>
            </div>
            {!available ? (
                <div className="min-h-content bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] flex flex-col items-center justify-center py-5 relative z-10  overflow-hidden">
                    <div className="w-[92.5vw] px-3 md:w-2/3 xl:w-1/2 text-center z-10 bg-LightOrange bg-opacity-70 p-4 rounded-lg">
                        <p className="text-xl font-Body text-left">
                            Defile Unit bertugas untuk mengenalkan Unit
                            Kemahasiswaan ITB kepada mahasiswa baru. Pengenalan
                            UKM ITB yang diberikan adalah melalui pemecahan
                            teka-teki yang tutorialnya dapat dilihat di feeds
                            instagram OSKM ITB. Untuk memecahkan teka-tekinya,
                            kalian harus membaca dan melakukannya dengan
                            hati-hati dan teliti.
                        </p>
                        <div className="flex justify-center">
                            <div className="w-10 py-7 flex justify-evenly items-center">
                                <div className="w-1 h-1 bg-black rounded-lg" />
                                <div className="w-1 h-1 bg-black rounded-lg" />
                                <div className="w-1 h-1 bg-black rounded-lg" />
                            </div>
                        </div>
                        <p className="text-xl font-Body text-left">
                            Halo, Pengembara! Selamat telah menaklukan rasa
                            takut sehingga berhasil sampai di sini. Namun,
                            perjuanganmu belum usai, terdapat masalah besar yang
                            terjadi! Bantu aku untuk menemukan kepingan harta
                            karun agar kamu dapat melihat hal luar biasa nanti
                            yang akan membantumu berkembang. Mulai sekarang, aku
                            panggil kamu dengan sebutan Reserse. Jalani misi ini
                            secara sunyi, jangan sampai orang lain mengintaimu!
                        </p>
                        <br />
                        <p className="text-xl font-Body">
                            Di bawah ini terdapat sebuah tombol. Tekan dan cari
                            tahu apa yang terjadi. Pastikan kamu tidak melewati
                            satu hal pun, bisa jadi itu adalah hal yang menjadi
                            petunjukmu.
                        </p>
                        <iframe
                            src="https://www.youtube.com/embed/dCaacpi_a4g"
                            title="TEASER DEFILE UNIT OSKM ITB 2022"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className="my-4 mx-auto w-full h-[14em] md:h-[17em] lg:h-[24em]"
                        />
                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="font-Body font-semibold text-xl">
                                    Clue 1 :
                                </p>
                                <p className="font-Body text-lg text-left">
                                    Kunci utama bagian ini adalah tetap tenang
                                    dan fokus. Berapakah jumlah kategori unit
                                    yang ada di “tombol” di atas? Kalikan dengan
                                    tanggal H-1 opening, dan jawaban berbentuk
                                    bit .ly/jawabankalian
                                </p>
                            </div>
                            <div>
                                <p className="font-Body font-semibold text-xl">
                                    Clue 2 :
                                </p>
                                <p className="font-Body text-lg text-left">
                                    Aku adalah salah satu mata acara yang
                                    ditunggu-tunggu tiap tahun di OSKM ITB. Aku
                                    bersemangat dan berwarna-warni. Jawablah
                                    dengan bit .ly/JawabanKalianITB
                                </p>
                                <div className="flex flex-row justify-center items-center w-full overflow-hidden gap-4">
                                    <img
                                        src={Clue1}
                                        alt="clue1"
                                        className="object-contain w-[100px]"
                                    />
                                    <img
                                        src={Clue2}
                                        alt="clue2"
                                        className="object-contain w-[100px]"
                                    />
                                    <img
                                        src={Clue3}
                                        alt="clue3"
                                        className="object-contain w-[100px]"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="font-Body font-semibold text-xl">
                                    Clue 3 :
                                </p>
                                <p className="font-Body text-lg text-left">
                                    Untuk melanjutkan pencarian ini, suara-suara
                                    yang ada bisa jadi adalah petunjuk. Aku
                                    adalah lantunan nada indah bercahaya yang
                                    menyambut kalian di OSKM. Jawablah dengan
                                    bit .ly/jawabanuntukkalian
                                </p>
                            </div>
                            <div>
                                <p className="font-Body font-semibold text-xl">
                                    Clue 4 :
                                </p>
                                <p className="font-Body text-lg text-left">
                                    Jaga fokusmu dan tetap semangat dalam
                                    menyelesaikan misi. Aku adalah 3 tujuan yang
                                    harus dicapai oleh perguruan tinggi
                                    mahasiswa. Jawablah dengan tinyurl .com
                                    /JawabanKalianPerguruanTinggi
                                </p>
                            </div>
                        </div>
                        <p className="font-Heading py-4">
                            Gabungkan kepingan puzzle kalian, temukan
                            passwordnya, dan masukkan di sini
                        </p>
                        <InputGroup
                            minWidth="200px"
                            maxWidth={{ base: 'xs', md: 'sm', lg: 'md' }}
                            mx="auto"
                            my="2"
                            onKeyDown={(e: any) => submitPassword(e)}
                        >
                            <Input
                                type={show ? 'text' : 'password'}
                                bg="#FFCD90"
                                pr="4.5rem"
                                focusBorderColor="#D27C2F"
                                borderColor="#D27C2F"
                                placeholder="Enter Password"
                                _placeholder={{ color: '#D27C2F' }}
                                color="#511D05"
                                outline="none"
                                className="text-DarkerOrange"
                                _hover={{ border: '1px solid #D27C2F' }}
                                onChange={(e: any) => inputPassword(e)}
                            />
                            <InputRightElement width="4.5rem">
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    bg="#D27C2F"
                                    color="white"
                                    fontFamily="Alegreya Sans Regular"
                                    fontWeight="400"
                                    _hover={{
                                        bg: '#D27C2F',
                                    }}
                                    _active={{
                                        bg: '#D27C2F',
                                    }}
                                    onClick={handleClick}
                                >
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>

                        {incorrect && (
                            <p className="text-[red] font-Body text-xl">
                                Incorrect Password
                            </p>
                        )}
                    </div>
                    <img
                        src={vistock}
                        alt="vistock"
                        className="absolute z-[-1] h-full hidden md:block w-screen md:top-0 lg:top-[-2em]"
                    />
                </div>
            ) : (
                <div className="bg-gradient-to-b h-full from-[#FF8952] to-[#F9DCB0] pt-10 pb-10 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl z-10 relative overflow-hidden">
                    <VistockBackground />
                    <div className="bg-MediumBrown bg-opacity-70 rounded-[37px] py-6 px-4 text-center">
                        <p className="text-center text-xl ">
                            Haloo, teman-teman maba! Selamat datang di DEFILE
                            UNIT! Kalian telah berhasil memecahkan teka teki dan
                            menemukan harta karun ini. <br /> <br />
                            Berikut terdapat beberapa rumpun dari unit-unit yang
                            ada di ITB. Rumpun-rumpun ini adalah kategori dari
                            berbagai unit di ITB yang serumpun, seperti BSO,
                            Agama, Budaya, Seni, Olahraga, dan
                            Pendidikan/Media/Kajian. <br /> <br /> Di dalamnya,
                            teman-teman bisa melihat unit apa saja yang
                            tergabung dalam kategori rumpun-rumpun yang ada.
                            Silakan klik rumpunnya, dan saksikan beragam unit
                            yang ada di ITB! Psst! Buat kalian yang masih kepo,
                            pantengin terus OHU pada 27 Agustus 2022 yaa!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 max-w-screen-xl w-full place-items-center">
                        {mockData.map(({ name, link }) => (
                            <Rumpun link={link} key={name} name={name} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
export default TreasureHuntPage;
