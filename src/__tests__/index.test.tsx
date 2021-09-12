import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import Home from '../pages'

describe('Home', () => {
  it('renders without crashing', async () => {
    render(<Home />)
    await waitFor(() => screen.getAllByTitle('Online').length === 2)
    expect(screen.getAllByTitle('Online').length).toBe(2)
  })
})
