//library
import axios from 'axios'
import useAxios from 'axios-hooks'

export const getBrandsList = ({
	pageNumber,
	pageSize,
	sort = { label: '', sorting: false }
}: {
	pageNumber: number
	pageSize: number
	sort: any
}) => {
	return useAxios({
		url: `Brands/GetList?Take=${pageSize}&Skip=${pageNumber}&PropToOrderBy=${sort.label}&Desc=${
			sort.sorting == 'up' ? true : false
		}`
	})
}
