import Head from 'next/head'
import React from "react";
import Profile from "../components/Profile";
import Button from "../components/Button";


export default function Home() {
    return (
        <div className='bg-gradient-to-tr from-aaa-yellow via-mid-color to-aaa-blue h-screen overflow-auto'>
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
