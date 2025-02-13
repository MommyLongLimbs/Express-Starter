import React, { useEffect, useContext } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import AuthContext from '../context/auth/authContext';


function Home() {
    //? gets size of window
    const size = useWindowSize();

    //? auth context
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext

    return (
        <div style={{ textAlign: 'center', width: size.width }}>
            login successfull
            home page
        </div>
    )
}

export default Home;