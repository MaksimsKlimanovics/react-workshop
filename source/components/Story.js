// Core
import React from 'react';

export default (props) => {
    //alert(props.src)
    return  (
        <div className = 'story'>
            <div>
                <span>
                    <img src = { props.src } alt = { props.alt }/>
                </span>
            </div>
        </div>
    );
};
