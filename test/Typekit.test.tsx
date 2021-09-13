import React from 'react'
import { render } from '@testing-library/react'
import Typekit from '../src/components/Typekit'

describe('Typekit', () => {
  it('renders without crashing', async () => {
    render(<Typekit />)
  })
})
