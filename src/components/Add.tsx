import React, { useState } from 'react'
import { ipfsNodeUri, ipfsGateway } from '../../site.config'
import Dropzone, { FileDropzone } from './Dropzone'
import styles from './Add.module.css'
import Loader from './Loader'
import useIpfsApi from '../hooks/use-ipfs-api'
import { IpfsConfig } from '../@types/ipfs'
import { addToIpfs, FileIpfs } from '../ipfs'

const { hostname, port, protocol } = new URL(ipfsNodeUri)

const ipfsConfig: IpfsConfig = {
  protocol: protocol.replace(':', ''),
  host: hostname,
  port: port || '443'
}

export default function Add() {
  const { ipfs, isIpfsReady, ipfsError } = useIpfsApi(ipfsConfig)
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [message] = useState()
  const [error, setError] = useState('')

  async function handleOnDrop(acceptedFiles: FileDropzone[]): Promise<any> {
    if (!acceptedFiles) return

    setLoading(true)
    setError('')

    try {
      const directoryCid = await addToIpfs(ipfs, acceptedFiles)
      if (!directoryCid) return

      const fileList = await ipfs.ls(directoryCid)
      setFiles(fileList)
      setLoading(false)
    } catch (error) {
      setError(`Adding to IPFS failed: ${error.message}`)
      return null
    }
  }

  return (
    <div className={styles.add}>
      {loading ? (
        <Loader message={message} />
      ) : files.length ? (
        <ul style={{ textAlign: 'left' }}>
          {files.map((file: FileIpfs) => (
            <li key={file.path}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${ipfsGateway}/ipfs/${file.path}`}
              >
                ipfs://{file.path}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <Dropzone
          handleOnDrop={handleOnDrop}
          disabled={!isIpfsReady}
          error={error || ipfsError}
        />
      )}
    </div>
  )
}
