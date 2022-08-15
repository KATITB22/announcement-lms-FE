import React from 'react';
import oskmLogo from '@/assets/images/logo/logo-oskm-itb-bawah.png';
import { AboutProps } from '@/types/interface';

const AboutDetail: React.FC<AboutProps> = ({ toggle }) => (
    <div className="bg-gradient-to-b from-DarkOrange to-MediumBrown min-h-content">
        <div className="container text-center max-w-screen-lg sm:min-h-content mx-auto px-[2rem] py-20">
            <div className="relative flex flex-col items-center bg-MediumBrown bg-opacity-70 rounded-[37px] pb-6 px-4 md:text-[18px] md:px-14 lg:px-20">
                <img
                    className="relative mt-2 w-20 md:w-28"
                    src={oskmLogo}
                    alt=""
                />

                <h1 className="font-Heading text-h3 text-center py-2">
                    SEJARAH OSKM ITB{' '}
                </h1>
                <h1 className="font-Heading text-center text-h4 py-2">
                    OSKM ITB sebagai Wadah Pergerakan
                </h1>
                <p className="font-Body text-left py-2">
                    Sejak awal, OSKM ITB merupakan ajang kaderisasi terpusat
                    yang kental dengan agenda pergerakan. Hal ini terlihat dari
                    tema dan aksi-aksi yang dilakukan di OSKM ITB yang selalu
                    berbentuk gerakan yang menjawab isu aktual pada masanya.
                    Kemudian, isu aktual tersebut terwujud menjadi visi yang
                    dibawakan oleh ketua OSKM ITB berdasarkan atas pembacaan
                    yang dilakukan terhadap kondisi Indonesia saat itu. Serta
                    OSKM sendiri mempunyai dua substansi, yakni sebagai
                    penyadaran arti mahasiswa dan penyadaran tentang lingkungan
                    KM ITB Memasuki tahun 2015, terlihat bahwa OSKM ITB semakin
                    berusaha beradaptasi dengan isu dan tantangan zaman yang
                    terus berubah, melalui topik-topik yang dapat membantu
                    mahasiswa untuk mewujudkan gerakan-gerakan yang relevan di
                    masanya. Contohnya adalah pada OSKM 2015 yang mulai membuka
                    pandangan terhadap isu internasional, dimana ketua OSKM pada
                    tahun tersebut menuliskan kegelisahannya mengenai isu ASEAN
                    Free Trade Area (AFTA) di tahun 2015 pada dokumen
                    gagasannya.
                </p>
                <p className="font-Body text-left py-2 ">
                    Dari situ, orientasi tentang kemahasiswaan yang dilakukan di
                    OSKM ITB mulai berkembang sehingga arah gerak OSKM ITB yang
                    biasanya cukup spesifik menjawab isu tertentu mulai melebar,
                    dan panitia OSKM ITB mulai berkreasi dengan caranya
                    masing-masing untuk memberikan orientasi kemahasiswaan bagi
                    mahasiswa baru. Seperti pada Integrasi ITB 2016 yang
                    membawakan tema berwarna pendidikan karakter yaitu Empati
                    untuk Negeri, OSKM 2017 yang mempopulerkan tiga lingkar
                    pergerakan (Sosial Masyarakat, Sosial Politik, dan Karya),
                    OSKM ITB 2018 yang memperkuat pendidikan di topik
                    nasionalisme, hingga OSKM ITB 2019 yang mulai memberikan
                    materi-materi self-development untuk mewujudkan pendidikan
                    yang lebih personalized bagi generasi baru.
                </p>
                <h1 className="font-Heading text-center py-2 text-h4">
                    Visi OSKM ITB 2012-2021
                </h1>
                <p className="font-Body text-left">
                    2012 : Integrasi untuk Indonesia <br /> 2013 : Semangat
                    Berkemahasiswaan berdasarkan Kearifan Lokal untuk Indonesia{' '}
                    <br /> 2014 : Simfoni Pergerakan untuk Indonesia <br /> 2015
                    : OSKM ITB 2015 sebagai Penyadaran akan Identitas Insan
                    Akademis Masa Depan Bangsa <br /> 2016 : KAT ITB 2016 yang
                    Melahirkan Perintis Gerakan Berasaskan Empati <br />
                    2017 : Mewujudkan Mozaik Pergerakan untuk Indonesia
                    <br /> 2018 : Sebagai Sarana Inisiasi Pembentuk Mahasiswa
                    Nirmala Pemrakarsa Pembangunan Bangsa <br />
                    2019 : OSKM ITB 2019 sebagai Sarana Inisiasi Semangat
                    Bermimpi untuk Indonesia. <br /> 2020 : Terciptanya
                    mahasiswa dengan keunikannya masing masing senantiasa
                    mendefinisikan perannya dan bertanggung jawab terhadap peran
                    tersebut <br />
                    2021: KAT ITB Sebagai Ruang Inspirasi Bernavigasi Budaya
                    Dalam Mewujudkan Kesadaran Berkontribusi untuk Indonesia
                </p>
                <h1 className="font-Heading text-center py-2 text-h4">
                    Dinamika Legalitas OSKM ITB
                </h1>
                <p className="py-2 font-Body text-left w-full pb-6">
                    {' '}
                    Tahun 90an: OSKM ITB adalah ajang kaderisasi terpusat yang
                    kental dengan agenda pergerakan. <br />
                    Tahun 2000: Munculnya permasalahan legalitas OSKM karena
                    adanya pandangan bahwa kaderisasi di OSKM ITB mengandung
                    unsur kekerasan sehingga menjadi perhatian Rektorat. Hal ini
                    berdampak pelarangan OSKM ITB pada tahun 2000-2002.
                    Penyelenggaraan OSKM ITB ilegal menyebabkan kehadiran
                    peserta yang sangat minim. <br />
                    Tahun 2002: Diselenggarakannya OSKM pertama yang dilegalkan
                    oleh Rektorat dengan beberapa perubahan seperti peniadaan
                    acara Swasta dan metode kekerasan yang diganti menjadi
                    metode disiplin.
                    <br />
                    Tahun 2005: OSKM ITB kembali dibayang-bayangi isu Legalitas.
                    <br />
                    Tahun 2006: Berlangsungnya OSKM ilegal yang hanya diikuti
                    oleh 136 mahasiswa. Ancaman DO membayangi Presiden, Ketua
                    OSKM, dan angkatan 2006 yang mengikuti OSKM. <br />
                    Tahun 2007: OSKM akhirnya dilegalkan dengan banyak perubahan
                    konsep dan metode, dengan pertimbangan agar angkatan 2007
                    dapat berinteraksi dengan seniornya.
                    <br />
                </p>

                <h1 className="font-Heading text-center py-2 text-h4">
                    Berbagai Nama OSKM ITB
                </h1>
                <p className="py-2 font-Body text-left w-full pb-6">
                    1. Pengenalan Satuan Akademik dan Kemahasiswaan (PSAK) ITB
                    (2006) <br />
                    2. Penerimaan Mahasiswa Baru (PMB) KM ITB (2007)
                    <br />
                    3. Pengenalan Ruang Dan Orientasi KM (PROKM) ITB (2009)
                    <br />
                    4. Inisiasi Keluarga Mahasiswa (INKM) ITB (2010)
                    <br />
                    5. Inisiasi Terpusat Keluarga Mahasiswa (INTEGRASI) ITB
                    (2016)
                </p>
                <button
                    type="button"
                    onClick={toggle}
                    className="font-Title bg-MediumOrange  px-5 py-3 rounded-[15px] drop-shadow-lg hover:drop-shadow-xl"
                >
                    Go Back
                </button>
            </div>
        </div>
    </div>
);

export default AboutDetail;
