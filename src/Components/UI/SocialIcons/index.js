import React from 'react';
import './SocialIcons.scss';


const SocialIcons = ({ data }) => {
    return (
        <div className="socialIcons">
            <ul>
                {
                    data.map(({ icon, url }) => {
                        return (
                            <li key={icon}>
                                <a href={url} target={`${url !== "javascipt:void(0)" ? "_blank" : "_self"}`}>
                                    <i className={`icon-${icon}`} />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SocialIcons;