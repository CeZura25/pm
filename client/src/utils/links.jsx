import React from "react";
import { GoHomeFill } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import { BsDatabaseFill } from "react-icons/bs";//default
import { BsDatabaseFillCheck } from "react-icons/bs";//existing acc
import { BsDatabaseFillAdd } from "react-icons/bs";//new acc

const links = [
    {
        text: 'home',
        path: '.',
        icon: <GoHomeFill />,
    },
    {
        text: 'dash',
        path: 'dash',
        icon: <GoHomeFill />,
    },
    {
        text: 'progress-report',
        path: 'progress-report',
        icon: <GiProgression />,
    },
    {
        text: 'database',
        path: 'database',
        icon: <BsDatabaseFill />,
    },
];

export default links;