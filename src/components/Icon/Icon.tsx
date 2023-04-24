import styled from 'styled-components'

import { ReactComponent as RockIcon } from 'assets/icons/rock.svg'
import { ReactComponent as PaperIcon } from 'assets/icons/paper.svg'
import { ReactComponent as ScissorsIcon } from 'assets/icons/scissors.svg'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg'

const IconMap = {
  rock: RockIcon,
  paper: PaperIcon,
  scissors: ScissorsIcon,
  close: CloseIcon,
  settings: SettingsIcon,
} as const

export enum IconName {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
  CLOSE = 'close',
  SETTINGS = 'settings',
}

type IconProps = {
  className?: string
  name: IconName
  onClick?: (event: React.MouseEvent<SVGElement>) => void
}

const S = {
  Icon: styled.div``,
}

export const Icon = ({ className = '', name, onClick }: IconProps) => {
  const IconComponent = IconMap[name]

  return (
    <S.Icon
      as={IconComponent}
      className={className}
      aria-label={`${name} icon`}
      onClick={onClick}
    />
  )
}
