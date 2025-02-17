import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BackButton } from './BackButton'

describe('BackButton', () => {
  it('renders back button with correct aria-label', () => {
    render(<BackButton onClick={() => {}} />)

    const button = screen.getByLabelText('go back')

    expect(button).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn()

    render(<BackButton onClick={handleClick} />)

    const button = screen.getByLabelText('go back')

    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
