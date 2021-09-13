import React, { useState, ReactElement } from 'react'
import Dropzone from './Dropzone'
import Loader from '../Loader'
import useIpfsApi from '../../hooks/use-ipfs-api'
import { FileIpfs } from '../../@types/ipfs'
import { FileWithPath } from 'react-dropzone'
import Files from './Files'
import styles from './index.module.css'

export default function Add(): ReactElement {
  const { ipfs, isIpfsReady, ipfsError, addFiles } = useIpfsApi()
  const [files, setFiles] = useState<FileIpfs[]>()
  const [loading, setLoading] = useState(false)
  const [message] = useState()
  const [error, setError] = useState<string>()

  async function handleOnDrop(acceptedFiles: FileWithPath[]): Promise<void> {
    if (!acceptedFiles || !ipfs || !isIpfsReady) return

    setLoading(true)
    setError(undefined)

    try {
      const addedFiles = await addFiles(acceptedFiles)
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
        <Files files={files} />
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
