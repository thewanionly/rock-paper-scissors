import { useEffect } from 'react'
import styled from 'styled-components'

import { Option, Result, Views } from 'types'
import { useGameContext } from 'context'

import { OptionPicker } from './OptionPicker'
import { ResultsArea } from './ResultsArea'
import { pickHouseOption, playGame } from './services'

const S = {
  GameArea: styled.div`
    margin: 10.4rem auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

export const HOUSE_PICK_DELAY = 1500
export const RESULTS_TEXT_DELAY = 600
export const PLAY_AGAIN_BUTTON_DELAY = 500

export const GameArea = () => {
  const {
    view,
    playerPick,
    housePick,
    incrementScore,
    setPlayerPick,
    setHousePick,
    setResult,
    setView,
  } = useGameContext()

  const handleOptionPicked = (option: Option) => {
    setPlayerPick(option)
  }

  useEffect(() => {
    if (playerPick) {
      setView(Views.ResultsArea)
    }
  }, [playerPick, setView])

  useEffect(() => {
    if (view === Views.ResultsArea) {
      setTimeout(() => {
        setHousePick(pickHouseOption())
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
      {view === Views.OptionPicker && <OptionPicker onOptionPicked={handleOptionPicked} />}
      {view === Views.ResultsArea && <ResultsArea />}
    </S.GameArea>
  )
}
