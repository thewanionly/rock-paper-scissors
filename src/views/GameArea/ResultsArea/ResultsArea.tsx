import { useGameContext } from 'context'
import styled from 'styled-components'

import { OptionChip } from 'components'

const S = {
  ResultsArea: styled.div``,
}

export const ResultsArea = () => {
  const { playerPick } = useGameContext()

  return <S.ResultsArea>{playerPick && <OptionChip option={playerPick} />}</S.ResultsArea>
}
