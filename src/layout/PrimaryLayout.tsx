//library
import { Outlet } from 'react-router-dom'
import ReactGridLayout from '../components/common/ReactGridLayout'

//component
import Header from './Header'
import Sidebar from './Sidebar'

export default function PrimaryLayout() {
	return (
		<main className={`max-w-screen overflow-x-hidden`}>
			<Header />
			<Sidebar />

			<section className="h-full w-full pl-2 pb-2 pt-12 pr-12" dir="ltr">
				<Outlet />
			</section>
		</main>
	)
}
