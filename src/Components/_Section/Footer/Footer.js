import React from 'react';
import Scrolling from './../../_UI/Scrolling/Scrolling';
import SocialIcons from './../../_UI/SocialIcons/SocialIcons';
import './Footer.scss';

const Footer = ({ data }) => {
    return (
        <div className="section-top-spacing">
            <footer>
                <div className="container">
                    <h1 className="main-title">
                        {data.title()}
                    </h1>
                    <div className="content">
                        <div className="col-3">
                            <p className="address-title">
                                {data.address.title}
                            </p>
                            {
                                data.address.lines.map((line, i) => {
                                    return (
                                        <p key={i} className="line">{line}</p>
                                    )
                                })
                            }
                            <p className="line">
                                <a href={`mailto:${data.email}?Subject=Hello%20GoodRoots`}>
                                    {data.email}
                                </a>
                            </p>
                            <p className="line">
                                <a href={`tel:${data.contactNumber}`}>
                                    {data.contactNumber}
                                </a>
                            </p>
                            <SocialIcons icons={data.socailIcons} />
                        </div>
                        <div className="col-9">
                            <a className="map-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={data.mapLink}>
                                <img src={data.img} alt={data.alt} />
                                <span className="map-text">{data.mapText}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Scrolling({ scrollId: "contactus" })(Footer);