"use client";
import { DotButton, useDotButton } from './components/EmblaCarouselDotButton'
import {
	PrevButton,
	NextButton,
	usePrevNextButtons
} from './components/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarouselSimple = (props) => {
	const { options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options)

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi)

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick
	} = usePrevNextButtons(emblaApi)

	return (
		<section className="embla overflow-hidden" ref={emblaRef}>
			<div className="flex gap-x-4 embla__container mb-12">
				{props.children}
			</div>

			<div className="embla__controls flex items-center justify-between">
				<div className="embla__dots flex gap-x-2">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={'embla__dot'.concat(
								index === selectedIndex ? ' embla__dot--selected' : ''
							)}
						/>
					))}
				</div>
				<div className="embla__buttons flex gap-x-2">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>

			</div>
		</section>
	)
}

export default EmblaCarouselSimple
