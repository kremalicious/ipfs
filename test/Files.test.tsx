import React from 'react'
import { render, screen } from '@testing-library/react'
import Files from '../src/components/Add/Files'
import { CID } from 'multiformats/cid'

const files = [
  {
    path: 'hello',
    cid: { toString: () => 'xxx' } as CID,
    size: 1000
  },
  {
    path: '',
    cid: { toString: () => 'xxx' } as CID,
    size: 1000
  }
]

describe('Files', () => {
  it('renders without crashing', async () => {
    render(<Files files={files} />)
    const element = await screen.findByText('ipfs://xxx/')
    expect(element).toBeInTheDocument()
  })
})
