import React from 'react'
import { render, wait } from '@testing-library/react'
import Home from '../pages'

describe('Home', () => {
  it('renders without crashing', async () => {
    const { container } = render(<Home />)
    await wait()
    expect(container.firstChild).toBeInTheDocument()
  })
})
