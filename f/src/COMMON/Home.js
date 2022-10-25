// @flow strict

import * as React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
<h1>
    HEllow wordl</h1>  
    <Link to={'/mynotes'}>hi</Link>          
        </div>
    );
};

export default Home;