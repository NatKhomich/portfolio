import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type Props = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = ({iconId, width, height, viewBox}: Props) => {
    return (
        <svg width={width || '120'} height={height || '120'} viewBox={viewBox || '0 0 120 120'} fill="none" xmlns="http://www.w3.org/2000/svg">
           <use xlinkHref={`${iconsSprite}#${iconId}`} />
        </svg>
    );
};
