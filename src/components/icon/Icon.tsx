import React from 'react';
import {IconType} from 'react-icons';
import { IconContext } from 'react-icons';

// type Props = {
//     iconId: string
//     width?: string
//     height?: string
//     viewBox?: string
// }
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



        // <svg width={width || '120'} height={height || '120'} viewBox={viewBox || '0 0 120 120'} fill="none" xmlns="http://www.w3.org/2000/svg">
        //    <use xlinkHref={`${iconsSprite}#${iconId}`} />
        // </svg>
    );
};
