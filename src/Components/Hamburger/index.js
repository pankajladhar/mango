import React from 'react';
import './Hamburger.scss';

const Hamburger = props => {
    return (
        <button className="hamburger" onClick={()=> props.onClick()}>
            <div className="icon">
                <div
                    className={`${
                        !props.toggle
                            ? 'icon-container'
                            : 'icon-container icon-container-active'
                        }`}
                >
                    <span className="line" />
                </div>
            </div>
            {/* <span className="title">MENU</span> */}
        </button>
    );
};

export default Hamburger;