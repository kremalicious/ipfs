import { FileDropzone } from './components/Dropzone'

export interface FileIpfsAdd {
  path: string
  content: File | ReadableStream | Buffer | string
}

export interface FileIpfs {
  path: string
  hash: string
  size: number
}

export function streamFiles(ipfs: any, ipfsFiles: FileIpfsAdd[]) {
  return new Promise((resolve, reject) => {
    const stream = ipfs.addReadableStream({
      wrapWithDirectory: true
      // progress: (length: number) => setFileSizeReceived(formatBytes(length, 0))
    })
    console.log(stream)

    stream.on('data', (data: FileIpfs) => {
      console.log(`Added ${data.path} hash: ${data.hash}`)
      // The last data event will contain the directory hash
      if (data.path === '') resolve(data.hash)
    })

    stream.on('error', reject)
    ipfsFiles.forEach((file: FileIpfsAdd) => stream.write(file))
    stream.end()
  })
}

export async function addToIpfs(ipfs: any, files: FileDropzone[]) {
  const ipfsFiles = [
    ...files.map((file: FileDropzone) => {
      return { path: file.path, content: file }
    })
  ]
  const directoryCid = await streamFiles(ipfs, ipfsFiles)
  return directoryCid
}
