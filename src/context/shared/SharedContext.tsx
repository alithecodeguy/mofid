//library
import { useState, createContext, useContext } from 'react'

//type
import { SharedContextInterface, SharedContextProviderInterface } from './SharedContextType'

//context
import { SharedContextInitialValues } from './SharedContextInitialValues'
const SharedContext = createContext<SharedContextInterface>(SharedContextInitialValues)

//context hook
export const useSharedContext = () => useContext(SharedContext)

//context provider
export function SharedContextProvider({ children }: SharedContextProviderInterface) {
	//state
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
	const [isContentGridEditable, setIsContentGridEditable] = useState<boolean>(true)

	//handler
	const toggleSidebarStatus = () => setIsSidebarOpen((prevState: boolean) => !prevState)

	return (
		<SharedContext.Provider
			value={{
				isSidebarOpen,
				toggleSidebarStatus,
				isContentGridEditable,
				setIsContentGridEditable
			}}
		>
			{children}
		</SharedContext.Provider>
	)
}

export default SharedContext
