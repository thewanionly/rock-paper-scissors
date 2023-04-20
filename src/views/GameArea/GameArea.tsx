import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Option } from 'types'
import { useGameContext } from 'context'

import { OptionPicker } from './OptionPicker'
import { ResultsArea } from './ResultsArea'
import { pickHouseOption } from './services'

const S = {
  GameArea: styled.div`
    margin: 10.4rem auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

enum GameAreaViews {
  OptionPicker = 'option_picker',
  ResultsArea = 'results_area',
}

export const HOUSE_PICK_DELAY = 1500

export const GameArea = () => {
  const { playerPick, setPlayerPick, setHousePick } = useGameContext()
  const [view, setView] = useState<GameAreaViews>(GameAreaViews.OptionPicker)

  const handleOptionPicked = (option: Option) => {
    setPlayerPick(option)
  }

  useEffect(() => {
    if (playerPick) {
      setView(GameAreaViews.ResultsArea)
    }
  }, [playerPick])

  useEffect(() => {
    if (view === GameAreaViews.ResultsArea) {
      setTimeout(() => {
        setHousePick(pickHouseOption())
      }, HOUSE_PICK_DELAY)
    }
  }, [view, setHousePick])

  return (
    <S.GameArea>
      {view === GameAreaViews.OptionPicker && <OptionPicker onOptionPicked={handleOptionPicked} />}
      {view === GameAreaViews.ResultsArea && <ResultsArea />}
    </S.GameArea>
  )
}
