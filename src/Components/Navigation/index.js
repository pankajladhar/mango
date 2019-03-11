import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Navigation.scss';
import {
    Link,
    Events,
} from "react-scroll";

const navigationData = [
    {
        label: "Home",
        url: "whoweare"
    },
    {
        label: "About Mango",
        url: "",
        child: [
            {
                label: "Who we are",
                url: "whoweare",
            },
            {
                label: "Our farm",
                url: "",
            }
        ]
    },
    {
        label: "Why Mango",
        url: ""
    },
    {
        label: "Gift",
        url: ""
    },
    {
        label: "Contact us",
        url: "contactus"
    }
]

const Navigation = props => {
    useEffect(() => {
        Events.scrollEvent.register("begin", function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function () {
            console.log("end", arguments);
        });
        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        }
    });
    const renderChild = (items) => {
        return (
            <ul className="childMenu">
                {items.map((d) => {
                    return (
                        <li key={d.label}>
                            <Link
                                to={d.url}
                                spy={true}
                                offset={-80}
                                smooth={true}
                                duration={500}
                            >
                                {d.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
    return (
        <nav className="navigation">
            <ul className="parentmenu">
                {navigationData.map((d) => {
                    return (
                        <li key={d.label}>
                            <Link
                                to={d.url}
                                spy={true}
                                offset={-80}
                                smooth={true}
                                duration={500}
                            >
                                {d.label}
                            </Link>
                            {d.child && renderChild(d.child)}
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

Navigation.propTypes = {

};

export default Navigation;