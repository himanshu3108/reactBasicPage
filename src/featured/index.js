import React from 'react';

import Carassouel from './Carassouel'
const Featured = (props) => {
    return (
        <div style= {{position: 'relative'}}>
            <Carassouel/>
            <div className="artist_name">
                    <div className="wrapper">
                        Anshu Mishra
                    </div>

                </div> 
        </div>
    );
};

export default Featured;