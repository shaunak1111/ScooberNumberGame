import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Banner } from '../../common/components/Banner';
import Player from '../../common/components/Player';
import { PLAYER_START, PLAYER_MAIN_WON, PLAYER_SECONDARY_WON } from '../../common/constants/constants-view';
import { updateWebSocketConn } from '../../actions/';
import { AppState, PlayersMergedType } from '../../interface';
import { socketClose, socketOpen, webSocket } from '../../service';
import { HomeContainer } from './Home.style';
import { isPlayerConnectedSelector, wsErrorSelector, getPlayerInputsSelector, getPlayerTypeSelector, getPlayerWonSelector } from '../../selectors';

interface IBannerView {
    isBothPlayersConnected: boolean;
    players: PlayersMergedType;
    playerMainHasWon: boolean;
    playerSecondaryHasWon: boolean;
}

const Home: React.FunctionComponent = () => {

    const WsError = useSelector(wsErrorSelector);

    const isBothPlayersConnected = useSelector(isPlayerConnectedSelector);

    // player type based on error
    const playerType = useSelector(getPlayerTypeSelector);
    const players = useSelector((state: AppState) => getPlayerInputsSelector(state, playerType)(state));

    const playerMainHasWon = useSelector((state: AppState) => getPlayerWonSelector('playerMain')(state));
    const playerSecondaryHasWon = useSelector((state: AppState) => getPlayerWonSelector('playerSecondary')(state));

    // noob function for future use
    const openSocketCb = () => { }

    const dispatch = useDispatch();

    useEffect(() => {
        socketOpen(webSocket, openSocketCb);
        dispatch(updateWebSocketConn(false));
        return () => {
            socketClose(webSocket, () => {
                webSocket.close();
            });
        }
    }, []);

    const DisplayBanner: React.FunctionComponent<IBannerView> = ({ isBothPlayersConnected, players, playerMainHasWon, playerSecondaryHasWon }) => {
        if (!isBothPlayersConnected) {
            return <Banner text={WsError?.error || ''} />
        } else if (isBothPlayersConnected && players.length === 0) {
            return <Banner text={PLAYER_START} />
        } else if (playerMainHasWon || playerSecondaryHasWon && players.length > 1) {
            const text = (playerMainHasWon) ? PLAYER_MAIN_WON : PLAYER_SECONDARY_WON;
            return <Banner text={text} />
        }
        return <></>
    }

    return (
        <HomeContainer>
            <DisplayBanner
                isBothPlayersConnected={isBothPlayersConnected}
                players={players}
                playerMainHasWon={playerMainHasWon}
                playerSecondaryHasWon={playerSecondaryHasWon}
            />
            {
                players.map((item) => {
                    return <Player
                        key={item.id}
                        position={item.position}
                        selected={item.selected}
                        random={item.random}
                    />
                })
            }
        </HomeContainer>
    );
}

export default memo(Home);
