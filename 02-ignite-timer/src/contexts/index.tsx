import { ReactNode } from 'react'
import { CyclesContextProvider } from './Cycles'

interface GlobalContextProviderProps {
  children: ReactNode
}

function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  return (
    <>
      <CyclesContextProvider>{children}</CyclesContextProvider>
    </>
  )
}

export default GlobalContextProvider
