import { CID } from 'ipfs-http-client'

export interface FileIpfs {
  path: string
  cid: CID
  size: number
  mode?: number
}
