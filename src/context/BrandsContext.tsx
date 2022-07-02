//library
import { useState, ReactNode, createContext, useContext } from 'react'

//types
import { RefetchOptions } from 'axios-hooks'
import { AxiosResponse, AxiosError, AxiosRequestConfig, AxiosPromise } from 'axios'

//api
import { getBrandsList } from '../axios/brandsApi'

export type BrandsContextType = {
	brandsListData: AxiosResponse | null
	isBrandsGetListApiPending: boolean
	brandsGetListApiError: AxiosError | null
	callGetBrandsListApi: (
		config?: AxiosRequestConfig<any> | undefined,
		options?: RefetchOptions | undefined
	) => AxiosPromise<any> | null
	incrementUserId: any
	setPageNumber: any
	pageNumber: number
	setSort: any
	sort: object | undefined
}

export const BrandsContext = createContext<BrandsContextType>({
	brandsListData: null,
	isBrandsGetListApiPending: false,
	brandsGetListApiError: null,
	callGetBrandsListApi: () => null,
	incrementUserId: () => undefined,
	setPageNumber: null,
	pageNumber: 1,
	setSort: null,
	sort: { label: '', sorting: false }
})

export function useBrandsContext() {
	return useContext(BrandsContext)
}
type Props = {
	children: ReactNode
}

export function BrandsContextProvider({ children }: Props) {
	//states
	const [userId, setUserId] = useState(1)
	const [pageNumber, setPageNumber] = useState<any>(1)
	const [sort, setSort] = useState<any>({ label: '', sorting: false })

	//handlers
	const incrementUserId = () => setUserId((prevState) => prevState + 1)

	//api call
	const [
		{ data: brandsListData, loading: isBrandsGetListApiPending, error: brandsGetListApiError },
		callGetBrandsListApi
	] = getBrandsList({ pageNumber: pageNumber, pageSize: 10, sort: sort })

	return (
		<BrandsContext.Provider
			value={{
				brandsListData,
				isBrandsGetListApiPending,
				brandsGetListApiError,
				callGetBrandsListApi,
				incrementUserId,
				setPageNumber,
				pageNumber,
				setSort,
				sort
			}}
		>
			{children}
		</BrandsContext.Provider>
	)
}

export default BrandsContext
