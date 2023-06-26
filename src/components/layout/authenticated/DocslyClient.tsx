import { APP_CONFIG } from '@/config'
import Docsly from '@docsly/react'
import '@docsly/react/styles.css'

import { usePathname } from 'next/navigation'

export default function DocslyClient () {
  const pathname = usePathname()
  return <Docsly publicId={APP_CONFIG.DOCSLY.PUBLIC_ID} pathname={pathname} />
}
