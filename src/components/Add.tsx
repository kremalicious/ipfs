import React, { useState, ReactElement } from 'react'
import { ipfsGateway } from '../../site.config'
import Dropzone, { FileDropzone } from './Dropzone'
import styles from './Add.module.css'
import Loader from './Loader'
import useIpfsApi from '../hooks/use-ipfs-api'
import { FileIpfs } from '../@types/ipfs'

export default function Add(): ReactElement {
  const { ipfs, isIpfsReady, ipfsError, addFiles } = useIpfsApi()
  const [files, setFiles] = useState<FileIpfs[]>()
  const [loading, setLoading] = useState(false)
  const [message] = useState()
  const [error, setError] = useState<string>()

  async function handleOnDrop(acceptedFiles: FileDropzone[]): Promise<void> {
    if (!acceptedFiles || !ipfs || !isIpfsReady) return

    setLoading(true)
    setError(undefined)

    try {
      const addedFiles = await addFiles(acceptedFiles)
      if (!addedFiles) return
      setFiles(addedFiles)
      setLoading(false)
    } catch (error) {
      setError(`Adding to IPFS failed: ${(error as Error).message}`)
      return
    }
  }

  return (
    <div className={styles.add}>
      {loading ? (
        <Loader message={message} />
      ) : files?.length ? (
        <ul style={{ textAlign: 'left' }}>
          {files?.map((file: FileIpfs) => (
            <li key={file.path}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${ipfsGateway}/ipfs/${file.cid.toString()}`}
              >
                ipfs://{file.path}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <Dropzone
          multiple
          handleOnDrop={handleOnDrop}
          disabled={!isIpfsReady}
          error={error || ipfsError}
        />
      )}
    </div>
  )
}
