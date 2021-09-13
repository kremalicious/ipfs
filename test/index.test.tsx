import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../src/pages'

describe('Home', () => {
  it('renders without crashing', async () => {
    render(<Home />)
    const online = await screen.findAllByTitle('Online', undefined, {
      timeout: 10000
    })
    expect(screen.getByText('A public IPFS Gateway')).toBeInTheDocument()
    expect(online).toBeDefined()
  })
})
