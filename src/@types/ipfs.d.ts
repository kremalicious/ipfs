import { CID } from 'ipfs-http-client'

// mirroring AddResult, which is not exported from 'ipfs-http-client'
export interface FileIpfs {
  cid: CID
  size: number
  path: string
  mode?: number
  mtime?: Mtime
}
