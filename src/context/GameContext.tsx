import useEffectOnUpdate from 'hooks/useEffectOnUpdate'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { Mode, MoveOption, Result, StorageKeys, View } from 'types'

type GameProviderProps = {
  children: React.ReactNode
}

interface GameContextValue {
  mode: Mode
  view: View
  score: number
  playerPick: MoveOption | null
  housePick: MoveOption | null
  result: Result | null
  setMode: (mode: Mode) => void
  setView: (view: View) => void
  incrementScore: () => void
  resetScore: () => void
  setPlayerPick: (option: MoveOption | null) => void
  setHousePick: (option: MoveOption | null) => void
  setResult: (result: Result | null) => void
  playAgain: () => void
}

const initialGameContext = {
  mode: Mode.RockPaperScissors,
  view: View.OptionPicker,
  score: 0,
  playerPick: null,
  housePick: null,
  result: null,
  setMode: () => null,
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
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem(StorageKeys.Mode)
    return savedMode ? JSON.parse(savedMode) : initialGameContext.mode
  })
  const [score, setScore] = useState<number>(() => {
    const savedScore = localStorage.getItem(StorageKeys.Score)
    return savedScore ? JSON.parse(savedScore) : initialGameContext.score
  })
  const [view, setView] = useState<View>(initialGameContext.view)
  const [playerPick, setPlayerPick] = useState<MoveOption | null>(initialGameContext.playerPick)
  const [housePick, setHousePick] = useState<MoveOption | null>(initialGameContext.housePick)
  const [result, setResult] = useState<Result | null>(initialGameContext.result)

  const resetGameState = () => {
    setView(initialGameContext.view)
    setPlayerPick(initialGameContext.playerPick)
    setHousePick(initialGameContext.housePick)
    setResult(initialGameContext.result)
  }

  const incrementScore = useCallback(() => setScore((prevScore) => prevScore + 1), [])

  const resetScore = useCallback(() => {
    setScore(initialGameContext.score)
    localStorage.clear()
  }, [])

  const playAgain = useCallback(() => {
    resetGameState()
  }, [])

  useEffectOnUpdate(() => {
    if (score > 0) {
      // Store score in localStorage
      localStorage.setItem(StorageKeys.Score, JSON.stringify(score))
    }
  }, [score])

  useEffectOnUpdate(() => {
    // Store mode in localStorage
    localStorage.setItem(StorageKeys.Mode, JSON.stringify(mode))

    // Reset game state when mode changes
    resetGameState()
  }, [mode])

  const value = useMemo(
    () => ({
      mode,
      view,
      score,
      playerPick,
      housePick,
      result,
      setMode,
      setView,
      incrementScore,
      resetScore,
      setPlayerPick,
      setHousePick,
      setResult,
      playAgain,
    }),
    [mode, view, score, playerPick, housePick, result, incrementScore, resetScore, playAgain]
  )

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
