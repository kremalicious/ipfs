import React from 'react'
import { render, screen } from '@testing-library/react'
import useIpfs from '../src/hooks/use-ipfs-api'

export default function TestComponent() {
  const { version, isIpfsReady, ipfsError } = useIpfs()

  return (
    <div>
      {isIpfsReady && <span>Ready</span>}
      {version} - {ipfsError}
    </div>
  )
}

describe('use-ipfs', () => {
  it('renders without crashing', async () => {
    render(<TestComponent />)
    const element = await screen.findByText('Ready')
    expect(element).toBeInTheDocument()
  })
})
