import React from 'react';
import {IconType} from 'react-icons';
import { IconContext } from 'react-icons';

type Props = {
    icon: IconType | string;
    size: string;
    color: string;
};

export const Icon = ({ icon, size, color }: Props) => {
    const IconComponent = icon;

    return (
        <IconContext.Provider value={{ size, color }}>
            <IconComponent />
        </IconContext.Provider>
    );
};
