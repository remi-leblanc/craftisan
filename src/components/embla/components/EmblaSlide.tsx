"use client";
export default function EmblaSlide(props) {
	return (
		<div className={"embla__slide " + props.className} key={props.index}>
			{props.children}
		</div>
	);
}
