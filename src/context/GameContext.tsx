import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
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
  resetScore: () => void
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
  resetScore: () => null,
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

  const resetScore = useCallback(() => {
    setScore(initialGameContext.score)
    localStorage.clear()
  }, [])

  const playAgain = useCallback(() => {
    setView(initialGameContext.view)
    setPlayerPick(initialGameContext.playerPick)
    setHousePick(initialGameContext.housePick)
    setResult(initialGameContext.result)
  }, [])

  useEffect(() => {
    if (score > 0) {
      localStorage.setItem('score', JSON.stringify(score))
    }
  }, [score])

  useEffect(() => {
    const localScore = localStorage.getItem('score')

    if (localScore) {
      setScore(JSON.parse(localScore))
    }
  }, [setScore])

  const value = useMemo(
    () => ({
      view,
      score,
      playerPick,
      housePick,
      result,
      setView,
      incrementScore,
      resetScore,
      setPlayerPick,
      setHousePick,
      setResult,
      playAgain,
    }),
    [view, score, playerPick, housePick, result, incrementScore, resetScore, playAgain]
  )

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
