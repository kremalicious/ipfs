import React from 'react'
import { ipfsGateway } from '../../../site.config'
import { FileIpfs } from '../../@types/ipfs'
import styles from './FileLink.module.css'

export default function FileLink({
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
