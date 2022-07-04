//library
import { FC } from 'react'
import ReactGridLayout from '../../components/common/ReactGridLayout'

const HomePage: FC = () => {
	return (
		<ReactGridLayout
			layouts={[
				{
					x: 0,
					y: 0,
					w: 5,
					h: 1,
					i: '0',
					static: false,
					component: (
						<div className="flex h-full w-full flex-col justify-between overflow-hidden border bg-red-300">
							<div>1</div>
							<div>1</div>
						</div>
					)
				}
				// {
				// 	x: 0,
				// 	y: 0,
				// 	w: 12,
				// 	h: 5,
				// 	i: '1',
				// 	static: false,
				// 	component: <div className=" bg-blue-300">component 2</div>
				// }
				// {
				// 	x: 0,
				// 	y: 0,
				// 	w: 2,
				// 	h: 5,
				// 	i: '2',
				// 	static: true,
				// 	component: <div className="h-full w-full bg-blue-300">component 3</div>
				// }
			]}
		/>
	)
}

export default HomePage
