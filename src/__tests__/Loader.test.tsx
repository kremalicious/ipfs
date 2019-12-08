import React from 'react'
import { render } from '@testing-library/react'
import Loader from '../components/Loader'

describe('Loader', () => {
  it('renders without crashing', () => {
    const { container } = render(<Loader message="Hello" />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
