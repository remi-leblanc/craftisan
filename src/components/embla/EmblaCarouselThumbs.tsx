"use client";
import { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './components/EmblaCarouselThumbsButton'
import EmblaSlide from './components/EmblaSlide';


const EmblaCarouselThumbs = (props) => {
	const { slides, options } = props
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
	const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
		containScroll: 'keepSnaps',
		dragFree: true
	})

	const onThumbClick = useCallback(
		(index: number) => {
			if (!emblaMainApi || !emblaThumbsApi) return
			emblaMainApi.scrollTo(index)
		},
		[emblaMainApi, emblaThumbsApi]
	)

	const onSelect = useCallback(() => {
		if (!emblaMainApi || !emblaThumbsApi) return
		setSelectedIndex(emblaMainApi.selectedScrollSnap())
		emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
	}, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

	useEffect(() => {
		if (!emblaMainApi) return
		onSelect()

		emblaMainApi.on('select', onSelect).on('reInit', onSelect)
	}, [emblaMainApi, onSelect])

	useEffect(() => {
		if (!emblaMainApi) return
		emblaMainApi.scrollTo(props.currentSlide)
	}, [props.currentSlide])

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaMainRef}>
				<div className="embla__container flex">
					{props.children.map((child, index) => (
						<EmblaSlide className="grow-0 shrink-0 basis-full h-[32rem]">
							{child}
						</EmblaSlide>
					))}
				</div>
			</div>

			<div className="embla-thumbs">
				<div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
					<div className="embla-thumbs__container flex">
						{props.children.map((child, index) => (
							<Thumb
								key={index}
								onClick={() => onThumbClick(index)}
								selected={index === selectedIndex}
								index={index}
								image={child}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default EmblaCarouselThumbs
