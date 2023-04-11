import { render, screen } from 'test'
import App from './App'

describe('App', () => {
  it('displays Header component', () => {
    render(<App />)

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })
})
