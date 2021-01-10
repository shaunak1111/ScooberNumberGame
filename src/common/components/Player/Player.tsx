import React, { useMemo, memo } from 'react';
import { PositionType } from '../../../interface';
import CommonBtn from '../Button';
import Input from '../Input';
import { StyledPlayerContainer } from './Player.style';

interface IPlayerProps {
    position: PositionType;
    selected?: number;
    random: number;
}

const Player: React.FunctionComponent<IPlayerProps> = ({ position, random, selected }) => {
    const memoizedComputedValue: number | string = useMemo(() => {
        if (selected !== undefined) {
            return Math.floor((random + selected) / 3);
        } else {
            return '?'
        }
    }, [random, selected])

    const displaySelectedVal = selected !== undefined ? selected : '?';
    return (
        <StyledPlayerContainer position={position}>
            <div className="player-container">
                <CommonBtn disabled={true} content={displaySelectedVal} />
                <Input value={`[(${displaySelectedVal} + ${random}) / 3]`} />
                <Input value={`${memoizedComputedValue}`} />
            </div>
        </StyledPlayerContainer >
    );
};

export default memo(Player);
