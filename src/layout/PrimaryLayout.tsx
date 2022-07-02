//library
import { Outlet } from 'react-router-dom'

//component
import Header from './Header'
import Sidebar from './Sidebar'

export default function PrimaryLayout() {
	return (
		<main className="flex min-h-screen w-full flex-col">
			<Header />
			<Sidebar />
			<section className={`mt-[40px] h-full w-full p-2 pr-[48px]`}>
				<Outlet />
			</section>
		</main>
	)
}
