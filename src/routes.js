//library
import { Navigate, useRoutes } from 'react-router-dom'

//layout
import PrimaryLayout from './layout/PrimaryLayout'

//component
import GridPage2 from './pages/grids/grid2'
import GridPage3 from './pages/grids/grid3'
import GridPage4 from './pages/grids/grid4'
import GridPage5 from './pages/grids/grid5'

//component
import HomePage from './pages/home'
import ProfilePage from './pages/profile'

export default function Router() {
	return useRoutes([
		{
			element: <PrimaryLayout />,
			children: [{ path: '/', element: <HomePage /> }]
		},
		{
			element: <PrimaryLayout />,
			children: [{ path: '/grid2', element: <GridPage2 /> }]
		},
		{
			element: <PrimaryLayout />,
			children: [{ path: '/grid3', element: <GridPage3 /> }]
		},
		{
			element: <PrimaryLayout />,
			children: [{ path: '/grid4', element: <GridPage4 /> }]
		},
		{
			element: <PrimaryLayout />,
			children: [{ path: '/grid5', element: <GridPage5 /> }]
		},
		{
			element: <PrimaryLayout />,
			children: [{ path: '/profile', element: <ProfilePage /> }]
		},

		{
			path: '/404',
			element: <div>Not Found</div>
		},

		{ path: '*', element: <Navigate to="/404" replace /> }
	])
}
