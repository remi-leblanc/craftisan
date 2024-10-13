"use client";

export const Thumb = (props) => {
	const { selected, index, onClick } = props

	return (
		<div
			className={'embla-thumbs__slide'.concat(
				selected ? ' embla-thumbs__slide--selected' : ''
			)}
		>
			<button
				onClick={onClick}
				type="button"
				className="embla-thumbs__slide__number h-28 w-28"
			>
				{props.image}
			</button>
		</div>
	)
}
