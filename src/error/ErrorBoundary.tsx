//library
import React from 'react'

//asset
import broken_robot from '../assets/images/png/broken_robot.png'
import { withTranslation } from 'react-i18next'

class ErrorBoundary extends React.Component<any, any> {
	state = { hasError: false }

	static getDerivedStateFromError() {
		return { hasError: true }
	}
	render() {
		const { hasError } = this.state
		if (hasError) {
			return (
				<div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
					<img src={broken_robot} alt="logo" className="h-36" />
					<span className="text-[28px]">{this.props.t('somethingwronghappened')}</span>
					<a href="/">{this.props.t('gotohome')}</a>
				</div>
			)
		}

		const { children } = this.props
		return <>{children}</>
	}
}

export default withTranslation()(ErrorBoundary)
