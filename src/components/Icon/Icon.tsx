import styled from 'styled-components'

import { ReactComponent as RockIcon } from 'assets/icons/rock.svg'
import { ReactComponent as PaperIcon } from 'assets/icons/paper.svg'
import { ReactComponent as ScissorsIcon } from 'assets/icons/scissors.svg'

const IconMap = {
  rock: RockIcon,
  paper: PaperIcon,
  scissors: ScissorsIcon,
} as const

export enum IconName {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
}

type IconProps = {
  className?: string
  name: IconName
}

const S = {
  Icon: styled.div``,
}

export const Icon = ({ className = '', name }: IconProps) => {
  const IconComponent = IconMap[name]

  return <S.Icon as={IconComponent} className={className} aria-label={`${name} icon`} />
}
