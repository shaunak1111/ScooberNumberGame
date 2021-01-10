import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayerSelectedNum } from '../../../actions';
import { PLAYER_MAIN_UPDATE_NUM_SELECTED } from '../../../actions/constant.actions';
import { AppState } from '../../../interface';
import { getPlayerInputsSelector, getPlayerWonSelector } from '../../../selectors';
import { getPlayerTypeSelector, isPlayerConnectedSelector } from '../../../selectors/connection.selector';
import { NEGATIVE_BTN_TEXT, POSITIVE_BTN_TEXT, ZERO_BTN_TEXT } from '../../constants/constants-view';
import CommonBtn from '../Button';
import { StyledFooterContainer } from './Footer.style';

interface IFTButtons {
  content: string;
  number: number;
}

const Footer: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const isBothPlayersConnected = useSelector(isPlayerConnectedSelector);

  const playerMainHasWon = useSelector((state: AppState) => getPlayerWonSelector('playerMain')(state));
  const playerSecondaryHasWon = useSelector((state: AppState) => getPlayerWonSelector('playerSecondary')(state));

  const playerType = useSelector(getPlayerTypeSelector);
  const players = useSelector((state: AppState) => getPlayerInputsSelector(state, playerType)(state));

  const FtButtons: React.FunctionComponent<IFTButtons> = ({ content, number }) => {
    const handleClick = () => {
      dispatch(updatePlayerSelectedNum(PLAYER_MAIN_UPDATE_NUM_SELECTED, number));
    }
    return (
      <CommonBtn disabled={!isBothPlayersConnected || playerMainHasWon || playerSecondaryHasWon || players.length === 0} content={content} onClick={handleClick} />
    )
  }

  return (
    <StyledFooterContainer>
      <FtButtons number={-1} content={NEGATIVE_BTN_TEXT} />
      <FtButtons number={0} content={ZERO_BTN_TEXT} />
      <FtButtons number={+1} content={POSITIVE_BTN_TEXT} />
    </StyledFooterContainer>
  );
};

export default memo(Footer);
