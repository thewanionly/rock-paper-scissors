import { motion } from 'framer-motion'
import styled from 'styled-components'

import { OptionChip } from 'components'
import { MoveOption } from 'types'

import { HOUSE_PICK_DELAY } from '../GameArea.constants'

const optionChipPlaceholder = {
  animate: {
    scale: [1, 1.25, 1, 1.25, 1],
    opacity: [1, 0.4, 1, 0.4, 1],
  },
  transition: {
    duration: HOUSE_PICK_DELAY / 1000,
  },
}

const housePickMount = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.2, ease: 'easeOut' },
}

const optionChipRingsMount = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: [1, 1, 1], scale: [1, 1.2, 1] },
  transition: { duration: 0.4 },
}

const S = {
  PickedOptionChip: styled.div`
    width: 13rem;
    height: 13.3rem;
    display: grid;
    align-items: center;
    justify-items: center;
    position: relative;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      width: 29.3rem;
      height: 30rem;
    }
  `,
  OptionChipContainerPlaceholder: styled(motion.div)`
    grid-column: 1;
    grid-row: 1;
    background-color: ${({ theme: { colors } }) => colors.resultsOptionChipPlaceholderBg};
    border-radius: 50%;
    width: 11rem;
    height: 11rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      width: 22.5rem;
      height: 22.5rem;
    }
  `,
  OptionChip: styled(motion(OptionChip))`
    grid-column: 1;
    grid-row: 1;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      width: 29.3rem;
      height: 30rem;
    }

    .option-chip-icon {
      @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
        width: 10.8rem;
        height: 12.5rem;
      }
    }
  `,
  OptionChipRings: styled(motion.div)`
    position: absolute;
    z-index: -1;
    background-image: ${({ theme: { colors } }) =>
      `radial-gradient(circle, ${colors.resultsOptionChipRingBg1} 0 43%, ${colors.resultsOptionChipRingBg2} 43% 56%, ${colors.resultsOptionChipRingBg3} 56% 100%)`};
    opacity: 0.5;
    border-radius: 50%;
    width: 221.5%;
    height: 221.5%;
  `,
}

type PickedOptionChipProps = {
  pickedOption?: MoveOption | null
  showPickedOptionAnimation?: boolean
  showRings?: boolean
  showPlaceholder?: boolean
}

export const PickedOptionChip = ({
  pickedOption = null,
  showPickedOptionAnimation = false,
  showRings = false,
  showPlaceholder = false,
}: PickedOptionChipProps) => {
  const optionChipMount = showPickedOptionAnimation ? housePickMount : {}

  return (
    <S.PickedOptionChip>
      {showPlaceholder && <S.OptionChipContainerPlaceholder {...optionChipPlaceholder} />}
      {pickedOption && <S.OptionChip option={pickedOption} {...optionChipMount} />}
      {showRings && <S.OptionChipRings {...optionChipRingsMount} />}
    </S.PickedOptionChip>
  )
}
