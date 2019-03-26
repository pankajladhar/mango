import React, { useEffect } from 'react';
import Layout from './../../Components/_UI/Layout/Layout';
import './ErrorPage.scss';


const ErrorPage = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <Layout>
            <div className="ErrorPage section-top-spacing-layout container">
                <div className="svg-box">
                    <svg className="circular red-stroke">
                        <circle className="path" cx="75" cy="75" r="50" fill="none" strokeWidth="5" strokeMiterlimit="10" />
                    </svg>
                    <svg className="cross red-stroke">
                        <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">
                            <path className="first-line" d="M634.087,300.805L673.361,261.53" fill="none" />
                        </g>
                        <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">
                            <path className="second-line" d="M634.087,300.805L673.361,261.53" />
                        </g>
                    </svg>
                </div>
                <div>
                    We have captured your details successfully. <br />We will reach out to you very soon.
                </div>
            </div>
        </Layout>
    );
};


export default (ErrorPage);