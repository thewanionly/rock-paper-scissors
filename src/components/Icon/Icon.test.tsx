import { render, screen } from 'test'

import { Icon, IconName } from './Icon'

describe('Icon', () => {
  describe('Layout', () => {
    it('displays the icon as indicated in the `name` prop', () => {
      const iconName = IconName.PAPER
      render(<Icon name={iconName} />)

      const icon = screen.getByLabelText(`${iconName} icon`)

      expect(icon).toBeInTheDocument()
    })
  })
})
