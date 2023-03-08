import { screen, render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@pages/index'

describe('<Home/>', () => {
  test('page main content is rendered', async () => {
    await act(async () => {
      render(<Home />)
    })
    const page = await screen.findByRole(/main/)
    expect(page).toBeInTheDocument()
  })
})
