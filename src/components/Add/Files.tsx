import React from 'react'
import { FileIpfs } from '../../@types/ipfs'
import FileLink from './FileLink'
import styles from './Files.module.css'

export default function Files({ files }: { files: FileIpfs[] }) {
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
