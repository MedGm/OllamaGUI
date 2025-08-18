interface ProgressBarProps {
	value: number // 0..100
}

export default function ProgressBar({ value }: ProgressBarProps) {
	const v = Math.max(0, Math.min(100, value))
	return (
		<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
			<div className="h-2 bg-black" style={{ width: `${v}%` }} />
		</div>
	)
}
