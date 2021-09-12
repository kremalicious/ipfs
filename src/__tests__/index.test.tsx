import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages'

describe('Home', () => {
  it('renders without crashing', async () => {
    render(<Home />)
    await screen.findAllByTitle('Online', undefined, { timeout: 10000 })
    expect(screen.getByText('A public IPFS Gateway')).toBeInTheDocument()
  })
})
