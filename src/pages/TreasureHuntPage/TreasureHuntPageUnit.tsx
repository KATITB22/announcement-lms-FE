import useFetch from '@/hooks/useFetch';
import { fetchAllUnit } from '@/service/ghostAPI';
import { Posts, TreasureHuntPageProps } from '@/types/interface';
import Card from '@/components/Card';
import { Navigate, useParams } from 'react-router-dom';
import { ErrorTypes } from '@/types/enum';
import { possibleLink } from '@/types/constant';
import VistockRumpun from '@/components/VistockRumpum';
import { formatSingleWordCapitalCase, getSecret } from '@/util/util';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';

function greetings(rumpunName: string) {
    const RumpunName = formatSingleWordCapitalCase(rumpunName.toLowerCase());
    return (
        <div className="py-20 bg-Yellow">
            <h1 className="text-5xl font-Heading font-bold mb-2 text-center capitalize">
                Rumpun {RumpunName}
            </h1>
            <p className="text-2xl font-Heading font-bold mb-2 text-center max-w-[95vw] mx-auto">
                Selamat datang di Rumpun {RumpunName}! Berikut merupakan
                beberapa unit yang tergabung dalam Rumpun {RumpunName}. Kalau
                kalian penasaran mengenai kegiatan-kegiatan Unit tersebut,
                kalian dapat klik unit yang ingin kalian pilih lalu baca
                deskripsi, lihat foto, dan tonton videonya! <br /> <br />
                Psstt! Buat kalian yang masih kepo, pantengin terus ya OHU pada
                27 Agustus 2022! See you!!
            </p>
        </div>
    );
}

function showCard(input: Posts, slug: string) {
    return input.map((post) => (
        <Card
            key={post.slug}
            slug={post.slug}
            id={post.slug}
            title={post.title}
            feature_image={post.feature_image}
            preSlug={slug}
        />
    ));
}

const TreasureHuntPageUnit: React.FC<TreasureHuntPageProps> = () => {
    const { unitId: id } = useParams();
    const res = localStorage.getItem('password');

    if (!possibleLink.includes(id!)) {
        return <ErrorPage type={ErrorTypes.PageNotFound} />;
    }

    if (res !== getSecret()) {
        return <Navigate to="/defile" />;
    }

    const { data, isLoading, error, message } = useFetch(
        fetchAllUnit(id!.toUpperCase())
    );

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorPage message={message} type={ErrorTypes.ServerError} />;
    }
    const posts: Posts = data;

    if (posts.length === 0) {
        return <ErrorPage message={message} type={ErrorTypes.EmptyPost} />;
    }

    document.title = `${id?.toUpperCase()} - DEVA: Blog OSKM ITB 2022`;

    return (
        <div>
            {greetings(id!.toUpperCase())}
            <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] relative z-10 py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                <VistockRumpun />
                <div className="relative">
                    <div className="absolute bg-LightOrange rounded-xl p-2 right-[50%] translate-x-[50%]">
                        {formatSingleWordCapitalCase(id!)}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full bg-opacity-70 bg-LightOrange rounded-lg p-4 pt-12">
                    {showCard(posts, id!)}
                </div>
            </div>
        </div>
    );
};

export default TreasureHuntPageUnit;
