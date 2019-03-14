import React, { useEffect } from 'react';
import './Navigation.scss';
import {
    Link,
    Events,
} from "react-scroll";
import SocialIcons from './../SocialIcons';

const navigationData = [
    {
        label: "Home",
        url: "home"
    },
    {
        label: "About us",
        url: "",
        child: [
            {
                label: "Who we are",
                url: "whoweare",
            },
            {
                label: "Our farm",
                url: "ourFarm",
            },
            {
                label: "Why Mango",
                url: ""
            }
        ]
    },
    {
        label: "Contact",
        url: "contactus"
    }
]

// {
//     label: "Buy",
//     url: "ourProducts"
// },
// {
//     label: "Gift",
//     url: ""
// }



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
                                offset={-100}
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
        <nav className={`navigation ${props.toggle && "mobile-navigation"}`}>
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

export default Navigation;