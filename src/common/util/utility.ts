import { PlayerType, PLAYER_STATE, PositionType } from "../../interface";

export const generateRandNum = (limit: number) => Math.floor(Math.random() * 100) + 1;

export const calculateSumByThree = (random: number, selected: number) => Math.floor((selected + random) / 3);

export const merge = (playerMain: PLAYER_STATE, playerSecondary: PLAYER_STATE, playerType: PlayerType) => {
    const mainNum = playerMain.numbers;
    const secNum = playerSecondary.numbers;

    let m = mainNum.length,
        n = secNum.length,
        i = 0,
        j = 0,
        k = 0,
        tempArr = [];

    if (playerType === 'playerMain') {
        while (i < m || j < n) {
            const position: PositionType = 'left'
            tempArr[k] = {
                id: k, position, ...mainNum[i]
            }
            i++;
            k++;

            if (secNum[j]) {
                const position: PositionType = 'right';
                tempArr[k] = {
                    id: k, position, ...secNum[j]
                }
                j++;
                k++;
            }
        }
    } else {
        while (j < n || i < m) {
            const position: PositionType = 'right';
            tempArr[k] = {
                id: k, position, ...secNum[j]
            }
            j++;
            k++;

            if (mainNum[i]) {
                const position: PositionType = 'left';
                tempArr[k] = {
                    id: k, position, ...mainNum[i]
                }
                i++;
                k++;
            }
        }
    }
    while (i < m) {
        const position: PositionType = 'left';
        tempArr[k] = {
            id: k, position, ...mainNum[i]
        }
        i++;
        k++;
    }
    while (j < n) {
        
        const position: PositionType = 'right';
        tempArr[k] = {
            id: k, position, ...secNum[j]
        }
        j++;
        k++;
    }
    return tempArr;
}
