//library
import { useEffect, useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useSharedContext } from './context/shared/SharedContext'

//component
import Router from './routes'

function App() {
	//hooks
	const { i18n } = useTranslation()

	//localization
	document.documentElement.setAttribute('lang', i18n.language)
	document.documentElement.style.direction = i18n.dir()

	return (
		<BrowserRouter>
			<MainWrapper>
				<Router />
			</MainWrapper>
		</BrowserRouter>
	)
}

const MainWrapper = ({ children }: any) => {
	const { setIsContentGridEditable } = useSharedContext()
	const currentLocation = useLocation()
	const routes = ['/grid3', '/grid4', '/grid5']
	useLayoutEffect(() => {
		setIsContentGridEditable(routes.includes(currentLocation.pathname))
	}, [currentLocation])

	return <>{children}</>
}

export default App
