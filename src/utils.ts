import axios from 'axios'

export function formatBytes(a: number, b: number): string {
  if (a === 0) return '0 Bytes'
  const c = 1024
  const d = b || 2
  const e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const f = Math.floor(Math.log(a) / Math.log(c))
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
}

export async function pingUrl(
  url: string,
  method?: 'get' | 'post'
): Promise<boolean> {
  try {
    const response = await axios[method || 'get'](url, { timeout: 5000 })
    if (!response || response.status !== 200) return false
    return true
  } catch (error) {
    console.error((error as Error).message)
    return false
  }
}
