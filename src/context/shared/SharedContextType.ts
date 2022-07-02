//library
import { ReactNode } from 'react'

//type
import { ChildrenInterface } from '../../types/common/children'

export interface SharedContextInterface {
	isSidebarOpen: boolean
	toggleSidebarStatus: () => void
	isContentGridEditable: boolean
	setIsContentGridEditable: (result: boolean) => void
}

export interface SharedContextProviderInterface extends ChildrenInterface {
	children: ReactNode
}
