import styled from 'styled-components'

import { ReactComponent as RockIcon } from 'assets/icons/rock.svg'
import { ReactComponent as PaperIcon } from 'assets/icons/paper.svg'
import { ReactComponent as ScissorsIcon } from 'assets/icons/scissors.svg'
import { ReactComponent as LizardIcon } from 'assets/icons/lizard.svg'
import { ReactComponent as SpockIcon } from 'assets/icons/spock.svg'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg'

export enum IconName {
  Rock = 'rock',
  Paper = 'paper',
  Scissors = 'scissors',
  Lizard = 'lizard',
  Spock = 'spock',
  Close = 'close',
  Settings = 'settings',
}

const IconMap = {
  [IconName.Rock]: RockIcon,
  [IconName.Paper]: PaperIcon,
  [IconName.Scissors]: ScissorsIcon,
  [IconName.Lizard]: LizardIcon,
  [IconName.Spock]: SpockIcon,
  [IconName.Close]: CloseIcon,
  [IconName.Settings]: SettingsIcon,
} as const

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
