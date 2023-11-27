// Importações de terceiros
import { PropsWithChildren } from 'react'

// Importações locais
import { GlobalStyles } from '@/styles/global'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
