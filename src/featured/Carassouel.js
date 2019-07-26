import React from 'react';
import Slider from 'react-slick';

import slide_one from '../resources/images/slide_one.jpg';
import slide_two from '../resources/images/slide_two.jpg';
import slide_three from '../resources/images/slide_three.jpg';
const Carassouel = (props) => {
    
    const Settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500

    }
    
    return (
        <div className="carassouel_wrapper" style= {{
            height : `${window.innerHeight}px`,
            overflow: 'hidden'
        }}>
            <Slider {...Settings}>
                <div>
                    <div className="carrausel_image" 
                        style={{
                            background: `url(${slide_one})`,
                            height : `${window.innerHeight}px`
                    }}>

                        </div>
                    </div>
                <div>
                    <div className="carrausel_image" 
                        style={{
                            background: `url(${slide_two})`,
                            height : `${window.innerHeight}px`
                    }}>

                        </div>
                </div>
                <div>
                    <div className="carrausel_image" 
                        style={{
                            background: `url(${slide_three})`,
                            height : `${window.innerHeight}px`
                    }}>

                        </div>
                </div> 
            </Slider>   
        </div>
    );
};

export default Carassouel;