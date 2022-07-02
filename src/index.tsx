//library
import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'

//component
import App from './App'
import Loading from './components/loading/Loading'

//style
import './styles/index.css'

//i18n
import i18n from './i18n'

//context
import { SharedContextProvider } from './context/shared/SharedContext'

//error
import ErrorBoundary from './error/ErrorBoundary'

//axios defaults --------- DON'T DELETE THE COMMENT PART , IT WILL BE USED FOR JWT ---------
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL
axios.defaults.headers.common['accept'] = '*/*'
axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.interceptors.request.use(
// 	async (config) => {
// 		const token = localStorage.getItem('token')

// 		if (token) {
// 			config.headers = {
// 				Authorization: `Bearer ${token}`
// 			}
// 		}
// 		return config
// 	},
// 	(error) => Promise.reject(error)
// )

// response interceptor intercepting 401 responses, refreshing token and retrying the request
// axios.interceptors.response.use(
// 	(response) => response,
// 	async (error) => {
// 		const config = error.config

// 		if (error.response.status === 401 && !config._retry) {
// 			config._retry = true
// 			localStorage.setItem('token', '0.ssdsd')

// 			return axios(config)
// 		}

// 		return Promise.reject(error)
// 	}
// )

// --------- DON'T DELETE THE COMMENT PART ---------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<React.Suspense fallback={<Loading />}>
			<I18nextProvider i18n={i18n}>
				<ErrorBoundary>
					<SharedContextProvider>
						<App />
					</SharedContextProvider>
				</ErrorBoundary>
			</I18nextProvider>
		</React.Suspense>
	</React.StrictMode>
)
