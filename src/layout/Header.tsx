//icons
import { ImExit } from 'react-icons/im'
import { FiSettings } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'
import { BiMenuAltLeft } from 'react-icons/bi'
import { TbPlugConnected } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'

import { NavLink, Outlet } from 'react-router-dom'

//component
import Clock from '../components/common/Clock'

//asset
import logoBrandLight from '../assets/images/logo/logo-brand-light.png'
import logoBrandLightMini from '../assets/images/logo/logo-brand-light-mini.png'

//context
import { useSharedContext } from '../context/shared/SharedContext'

export default function Header() {
	const { isContentGridEditable } = useSharedContext()
	return (
		<header className="fixed top-0 left-0 flex h-[40px] w-full items-center justify-between bg-blue-primary text-white">
			<section className="flex h-full items-center">
				<button className="flex h-full w-[40px] items-center justify-center bg-blue-light text-[24px] text-[#ccc]">
					<div className={`${isContentGridEditable && 'spin_container'} `}>
						<AiFillSetting />
					</div>
				</button>
				<section className="flex h-full items-center ">
					<img src={logoBrandLight} alt="mofid logo" className="hidden border-l px-[10px] py-[5px] ultra:block" />
					<img
						src={logoBrandLightMini}
						alt="mofid logo"
						className="block px-[10px] py-[5px] tablet:border-l ultra:hidden"
					/>
					<section className="hidden h-full items-center px-[10px] tablet:flex">
						<div className="flex items-center leading-none">
							<div className="mx-[5px] h-3 w-3 rounded-full bg-red-primary"></div>
							<div className="mt-[4px] px-[5px]">بلوکه شده: 0</div>
						</div>
						<div className="flex items-center leading-none">
							<div className="mx-[5px] h-3 w-3 rounded-full bg-green-primary"></div>
							<div className="mt-[4px] px-[5px]">بلوکه شده: 0</div>
						</div>
					</section>
					{/* <section className="">1</section> */}
				</section>
			</section>
			<section className="flex h-full items-center">
				<div className="hidden h-full items-center gap-[10px] px-[10px] leading-none desktop:flex">
					<span className="mt-[4px] flex items-center">شاخص کل</span>
					<span className="flex items-center rounded-md bg-red-secondary p-1 pt-[6px]">
						{`${(+1504072).toLocaleString('fa')} (${(+0.64).toLocaleString('fa')} %)`}
					</span>
					<span className="mt-[4px] flex items-center">{(+1504072).toLocaleString('fa')}</span>
				</div>
				<div className="flex h-full items-center justify-center leading-none phablet:w-[80px] desktop:border-r">
					<Clock />
				</div>
				<div className="hidden h-full items-center border-r leading-none phablet:flex">
					<span className="px-[10px] text-[20px]">
						<HiOutlineMail />
					</span>
					<span className="px-[10px] text-[20px]">
						<MdOutlineNotificationsNone />
					</span>
					<span className="px-[10px] text-[20px]">
						<FiSettings />
					</span>
				</div>
				<div className="hidden h-full items-center border-r px-[5px] phablet:flex">
					<div className="mt-[4px] hidden px-[10px] leading-none wide:flex">علی خدایی دوست</div>
					<NavLink to={`/profile`} className={({ isActive }) => `mx-[5px] h-[30px] w-[30px]`}>
						<div className="flex h-full w-full items-center justify-center rounded-full bg-green-secondary text-[20px]">
							<TbPlugConnected />
						</div>
					</NavLink>
				</div>
				<div className=" hidden h-full items-center gap-[5px] border-r px-[10px] text-[20px] leading-none phablet:flex ">
					<ImExit />
					<span className="mt-[4px] hidden items-center  text-[16px] wide:flex">خروج</span>
				</div>
				<div className="flex  h-full items-center px-[10px] text-[20px] leading-none phablet:hidden ">
					<BiMenuAltLeft />
				</div>
			</section>
		</header>
	)
}
