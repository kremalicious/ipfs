import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from '../Layout'

describe('Layout', () => {
  it('renders without crashing', () => {
    render(<Layout pageTitle="Hello">Hello</Layout>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
