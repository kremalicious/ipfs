import React from 'react'
import { render } from '@testing-library/react'
import Home from '../pages'

describe('Home', () => {
  it('renders without crashing', async () => {
    const { container } = render(<Home />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
