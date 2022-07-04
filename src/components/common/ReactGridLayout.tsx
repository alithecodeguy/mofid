import { useState, useEffect } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveReactGridLayout = WidthProvider(Responsive)

const ReactGridLayout = (props: any) => {
	const [mounted, setMounted] = useState(false)
	const [layouts, setLayouts] = useState({ lg: props.layouts })

	useEffect(() => {
		setMounted(true)
	}, [])

	const generateDOM = () => {
		return props.layouts.map((l: any, i: number) => (
			<div key={i} className={l.static ? 'static bg-green-200' : 'bg-green-200'}>
				{l.static ? (
					<span className="text" title="This item is static and cannot be removed or resized.">
						Static - {i}
					</span>
				) : (
					<span className="text">{l.component}</span>
				)}
			</div>
		))
	}

	return (
		<ResponsiveReactGridLayout
			{...props}
			rowHeight={30}
			autoSize={true}
			layouts={layouts}
			breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
			cols={{ lg: 12, md: 10, sm: 8, xs: 6, xxs: 4 }}
			// WidthProvider option

			measureBeforeMount={false}
			// I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
			// and set `measureBeforeMount={true}`.
			useCSSTransforms={mounted}
		>
			{generateDOM()}
		</ResponsiveReactGridLayout>
	)
}

export default ReactGridLayout
