import React, { useState, ReactElement } from 'react'
import { ipfsGateway } from '../../site.config'
import Dropzone from './Dropzone'
import styles from './Add.module.css'
import Loader from './Loader'
import useIpfsApi from '../hooks/use-ipfs-api'
import { FileIpfs } from '../@types/ipfs'
import { FileWithPath } from 'react-dropzone'

function FileLink({
  file,
  cidFolder,
  cid
}: {
  file: FileIpfs
  cidFolder: string
  cid?: string
}) {
  const title = cid ? `ipfs://${cid}` : `ipfs://${cidFolder}/${file.path}`
  const href = cid
    ? `${ipfsGateway}/ipfs/${cid}`
    : `${ipfsGateway}/ipfs/${cidFolder}/${file.path}`

  return cidFolder !== cid ? (
    <a
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {title}
    </a>
  ) : null
}

function Files({ files }: { files: FileIpfs[] }) {
  const cidFolder = files.filter((file) => file.path === '')[0].cid.toString()

  return (
    <ul className={styles.files}>
      {files?.map((file) => (
        <li key={file.path}>
          <h3 className={styles.title}>
            {file.path === '' ? 'Folder with all files' : file.path}
          </h3>
          <FileLink
            file={file}
            cidFolder={cidFolder}
            cid={file.cid.toString()}
          />
          <p>
            <FileLink file={file} cidFolder={cidFolder} />
          </p>
        </li>
      ))}
    </ul>
  )
}

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
