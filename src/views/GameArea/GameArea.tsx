import { useEffect } from 'react'
import styled from 'styled-components'

import { MoveOption, Result, View } from 'types'
import { useGameContext } from 'context'
import useEffectOnUpdate from 'hooks/useEffectOnUpdate'

import { OptionPicker } from './OptionPicker'
import { ResultsArea } from './ResultsArea'
import { pickHouseOption, playGame } from './services'
import { HOUSE_PICK_DELAY, RESULTS_TEXT_DELAY } from './GameArea.constants'

const S = {
  GameArea: styled.main`
    margin: 10.4rem auto 0;
    min-height: 37.5rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      min-height: 58.7rem;
    }
  `,
}

export const GameArea = () => {
  const {
    mode,
    view,
    playerPick,
    housePick,
    incrementScore,
    setPlayerPick,
    setHousePick,
    setResult,
    setView,
  } = useGameContext()

  const handleOptionPicked = (option: MoveOption) => {
    setPlayerPick(option)
  }

  useEffect(() => {
    if (playerPick) {
      setView(View.ResultsArea)
    }
  }, [playerPick, setView])

  useEffectOnUpdate(() => {
    if (view === View.ResultsArea) {
      setTimeout(() => {
        setHousePick(pickHouseOption(mode))
      }, HOUSE_PICK_DELAY)
    }
  }, [view, setHousePick])

  useEffect(() => {
    if (playerPick && housePick) {
      setTimeout(() => {
        const gameResult = playGame(playerPick, housePick)

        if (gameResult === Result.UserWins) {
          incrementScore()
        }

        setResult(gameResult)
      }, RESULTS_TEXT_DELAY)
    }
  }, [housePick, playerPick, setResult, incrementScore])

  return (
    <S.GameArea data-testid="game-area">
      {view === View.OptionPicker && (
        <OptionPicker onOptionPicked={handleOptionPicked} mode={mode} />
      )}
      {view === View.ResultsArea && <ResultsArea />}
    </S.GameArea>
  )
}
