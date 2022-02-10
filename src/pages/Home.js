import React from 'react';

import MainLanding from '../components/MainLanding';
import Genres from '../components/Genres';
export default function Home() {
    return (
        <div>
            <MainLanding />
            <hr />
            <Genres />
        </div>
    );
}
