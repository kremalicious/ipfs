import { useCallback, useEffect, useState } from 'react'
import { create } from 'ipfs-http-client'
import type { IPFSHTTPClient } from 'ipfs-http-client'
import type { CIDVersion } from 'multiformats/cid'
import { ipfsNodeUri } from '../../site.config'
import { formatBytes } from '../utils'
import { FileDropzone } from '../components/Dropzone'
import type { FileIpfs } from '../@types/ipfs'

export interface IpfsApiValue {
  ipfs: IPFSHTTPClient | undefined
  version: string | undefined
  isIpfsReady: boolean
  ipfsError: string | undefined
  addFiles: (files: FileDropzone[]) => Promise<FileIpfs[] | undefined>
}

const { hostname, port, protocol } = new URL(ipfsNodeUri)

const ipfsConfig = {
  protocol: protocol.replace(':', ''),
  host: hostname,
  port: Number(port) || 443
}

export default function useIpfsApi(): IpfsApiValue {
  const [ipfs, setIpfs] = useState<IPFSHTTPClient>()
  const [version, setVersion] = useState<string>()
  const [isIpfsReady, setIpfsReady] = useState(Boolean(ipfs))
  const [ipfsError, setIpfsError] = useState<string>()

  const addFiles = useCallback(
    async (files: FileDropzone[]): Promise<FileIpfs[] | undefined> => {
      if (!ipfs || !files?.length) return

      const ipfsFiles = [
        ...files.map((file: FileDropzone) => {
          return { path: file.path, content: file }
        })
      ]

      const options = {
        wrapWithDirectory: true,
        cidVersion: 1 as CIDVersion,
        hashAlg: 'sha2-256',
        progress: (length: number) => formatBytes(length, 0)
      }

      const results: FileIpfs[] = []
      for await (const result of ipfs.addAll(ipfsFiles, options)) {
        console.log(result)
        results.push(result)
      }

      return results
    },
    [ipfs]
  )

  useEffect(() => {
    if (ipfs) return

    async function initIpfs() {
      try {
        const ipfs = create(ipfsConfig)
        setIpfs(ipfs)
        const version = await ipfs.version()
        setVersion(version.version)
        setIpfsReady(Boolean(ipfs && (await ipfs.id())))
      } catch (e) {
        setIpfsError(`IPFS connection error: ${(e as Error).message}`)
        setIpfsReady(false)
        return
      }
    }
    initIpfs()

    return () => {
      if (ipfs) {
        setIpfsReady(false)
        setIpfs(undefined)
        setVersion(undefined)
        setIpfsError(undefined)
      }
    }
  }, [ipfs])

  return { ipfs, version, isIpfsReady, ipfsError, addFiles }
}
