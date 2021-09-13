import React from 'react'
import { render, screen } from '@testing-library/react'
import Loader from '../src/components/Loader'

describe('Loader', () => {
  it('renders without crashing', async () => {
    render(<Loader message="Hello" />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
