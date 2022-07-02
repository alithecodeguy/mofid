//context

import { useSharedContext } from '../context/shared/SharedContext'

import { BiMenuAltRight } from 'react-icons/bi'
import { GoCreditCard } from 'react-icons/go'
import { GiMoneyStack } from 'react-icons/gi'
import { TbReportAnalytics } from 'react-icons/tb'
import { AiOutlinePieChart } from 'react-icons/ai'
import { MdOutlineChangeCircle } from 'react-icons/md'
import { TbHeartRateMonitor } from 'react-icons/tb'
import { GiPencilRuler } from 'react-icons/gi'
import { BiTransferAlt } from 'react-icons/bi'
import { CgMenuGridR } from 'react-icons/cg'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
	return (
		<div className="fixed right-0 top-10 hidden h-[calc(100vh_-_40px)] w-10 flex-col justify-between border-l phablet:flex">
			<div className="flex flex-col gap-1">
				<button className="group flex h-10 w-10 items-center justify-center text-[25px] hover:bg-[#dedede]">
					<BiMenuAltRight className="duration-200 group-hover:scale-[1.1]" />
				</button>
				<button className="group flex h-10 w-10 items-center justify-center text-[25px] text-[#009688] hover:bg-[#dedede]">
					<GoCreditCard className="duration-200 group-hover:scale-[1.1]" />
				</button>
				<button className="group flex h-10 w-10 items-center justify-center text-[25px] text-[#ef6963] hover:bg-[#dedede]">
					<GiMoneyStack className="duration-200 group-hover:scale-[1.1]" />
				</button>
				<button className="group flex h-10 w-10 items-center justify-center text-[25px] text-[#9c27b0] hover:bg-[#dedede]">
					<TbReportAnalytics className="duration-200 group-hover:scale-[1.1]" />
				</button>
				<button className="group flex h-10 w-10 items-center justify-center text-[25px] text-[#24bcd4] hover:bg-[#dedede]">
					<AiOutlinePieChart className="duration-200 group-hover:scale-[1.1]" />
				</button>
				<button className="group flex h-10 w-10 items-center justify-center text-[25px] text-[#ffa018] hover:bg-[#dedede]">
					<BiTransferAlt className="duration-200 group-hover:scale-[1.1]" />
				</button>
				<button className="group flex h-10 w-10 items-center justify-center text-[25px] text-[#009688] hover:bg-[#dedede]">
					<MdOutlineChangeCircle className="duration-200 group-hover:scale-[1.1]" />
				</button>
				<button className="group flex h-10 w-10 items-center justify-center text-[25px] text-[#9c31b7] hover:bg-[#dedede]">
					<TbHeartRateMonitor className="duration-200 group-hover:scale-[1.1]" />
				</button>
				<button className="group flex h-10 w-10 items-center justify-center text-[25px] text-[#fa5759] hover:bg-[#dedede]">
					<GiPencilRuler className="duration-200 group-hover:scale-[1.1]" />
				</button>
				<button className="group flex h-10 w-10 items-center justify-center text-[25px] text-[#9c27b0] hover:bg-[#dedede]">
					<CgMenuGridR className="duration-200 group-hover:scale-[1.1]" />
				</button>
			</div>
			<div className="flex flex-col items-center justify-center divide-y">
				<button
					onClick={() => alert('chatbox will open!')}
					className="group flex h-10 w-10 items-center justify-center text-[20px] hover:bg-[#dedede]"
				>
					<IoChatbubblesOutline className="duration-200 group-hover:scale-[1.1]" />
				</button>
				<NavLink
					to={`/`}
					className={({ isActive }) =>
						`group flex h-10 w-10 items-center justify-center font-sans leading-none duration-200 hover:bg-[#dedede] ${
							isActive && 'bg-gray-300 font-semibold'
						}`
					}
				>
					<span className="duration-200 group-hover:font-semibold">1</span>
				</NavLink>
				<NavLink
					to={`/grid2`}
					className={({ isActive }) =>
						`group flex h-10 w-10 items-center justify-center font-sans leading-none duration-200 hover:bg-[#dedede] ${
							isActive && 'bg-gray-300 font-semibold'
						}`
					}
				>
					<span className="duration-200 group-hover:font-semibold">2</span>
				</NavLink>
				<NavLink
					to={`/grid3`}
					className={({ isActive }) =>
						`group flex h-10 w-10 items-center justify-center font-sans leading-none hover:bg-[#dedede] ${
							isActive && 'bg-gray-300 font-semibold'
						}`
					}
				>
					<span className="duration-200 group-hover:font-semibold">3</span>
				</NavLink>
				<NavLink
					to={`/grid4`}
					className={({ isActive }) =>
						`group flex h-10 w-10 items-center justify-center font-sans leading-none hover:bg-[#dedede] ${
							isActive && 'bg-gray-300 font-semibold'
						}`
					}
				>
					<span className="duration-200 group-hover:font-semibold">4</span>
				</NavLink>
				<NavLink
					to={`/grid5`}
					className={({ isActive }) =>
						`group flex h-10 w-10 items-center justify-center font-sans leading-none hover:bg-[#dedede] ${
							isActive && 'bg-gray-300 font-semibold'
						}`
					}
				>
					<span className="duration-200 group-hover:font-semibold">5</span>
				</NavLink>
			</div>
		</div>
	)
}
