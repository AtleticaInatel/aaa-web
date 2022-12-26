import Head from 'next/head'
import Button from "../components/Button";
import Profile from "../components/Profile";

export default function links() {
    return (
        <div className='bg-aaa-blue2 h-screen overflow-auto'>
            <Head>
                <title>Atlética Inatel</title>
                <meta name="description" content="Atlética Inatel" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Profile/>
                <Button/>
            </main>
        </div>
    );
}
