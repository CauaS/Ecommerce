import { render, screen } from '@testing-library/react'
import Main from './index'

describe('<Main />', () => {
  it('Should render Header', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', {
        name: /react/i
      })
    ).toBeInTheDocument()
  })
})
