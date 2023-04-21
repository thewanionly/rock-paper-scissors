import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { Option, Result, Views } from 'types'

type GameProviderProps = {
  children: React.ReactNode
}

interface GameContextValue {
  view: Views
  score: number
  playerPick: Option | null
  housePick: Option | null
  result: Result | null
  setView: (view: Views) => void
  incrementScore: () => void
  setPlayerPick: (option: Option | null) => void
  setHousePick: (option: Option | null) => void
  setResult: (result: Result | null) => void
  playAgain: () => void
}

const initialGameContext = {
  view: Views.OptionPicker,
  score: 0,
  playerPick: null,
  housePick: null,
  result: null,
  setView: () => null,
  incrementScore: () => null,
  setPlayerPick: () => null,
  setHousePick: () => null,
  setResult: () => null,
  playAgain: () => null,
}

const GameContext = createContext<GameContextValue>(initialGameContext)

export const useGameContext = () => useContext(GameContext)

export const GameProvider = ({ children }: GameProviderProps) => {
  const [view, setView] = useState<Views>(initialGameContext.view)
  const [score, setScore] = useState(initialGameContext.score)
  const [playerPick, setPlayerPick] = useState<Option | null>(initialGameContext.playerPick)
  const [housePick, setHousePick] = useState<Option | null>(initialGameContext.housePick)
  const [result, setResult] = useState<Result | null>(initialGameContext.result)

  const incrementScore = useCallback(() => setScore((prevScore) => prevScore + 1), [])

  const playAgain = useCallback(() => {
    setView(initialGameContext.view)
    setPlayerPick(initialGameContext.playerPick)
    setHousePick(initialGameContext.housePick)
    setResult(initialGameContext.result)
  }, [])

  const value = useMemo(
    () => ({
      view,
      score,
      playerPick,
      housePick,
      result,
      setView,
      incrementScore,
      setPlayerPick,
      setHousePick,
      setResult,
      playAgain,
    }),
    [view, score, playerPick, housePick, result, incrementScore, playAgain]
  )

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
