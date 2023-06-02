import { createContext, useContext, useState } from 'react'

export const SidebarContext = createContext()

// export function SidebarProvider({ children }) {
//   const [isOpen, setIsOpen] = useState(false)
//   const toggleOpen = setIsOpen(setIsOpen(!isOpen))
//   return (
//     <SidebarContext.Provider value={{ isOpen, toggleOpen }}>
//       {children}
//     </SidebarContext.Provider>
//   )
// }
