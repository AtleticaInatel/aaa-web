import Head from 'next/head'
import {Analytics} from '@vercel/analytics/react';
import Button from "../components/Button";
import Profile from "../components/Profile";

export default function links() {
    return (
        <div className='bg-gradient-to-tr from-aaa-yellow via-mid-color to-aaa-blue h-screen overflow-auto'>
            <Head>
                <title>Atlética Inatel</title>
                <meta name="description" content="Atlética Inatel"/>
                <link rel="icon" href="favicon.ico"/>
            </Head>
            <main>
                <Profile/>
                <Button/>
            </main>
            <Analytics/>
        </div>
    );
}
