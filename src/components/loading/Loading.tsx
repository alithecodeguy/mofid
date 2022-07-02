//library
import FadeLoader from 'react-spinners/FadeLoader'

export default function Loading() {
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<FadeLoader height={20} width={8} radius={4} margin={10} />
		</div>
	)
}
