"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const usePrevNextButtons = (emblaApi) => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return
		emblaApi.scrollPrev()
	}, [emblaApi])

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return
		emblaApi.scrollNext()
	}, [emblaApi])

	const onSelect = useCallback((emblaApi) => {
		setPrevBtnDisabled(!emblaApi.canScrollPrev())
		setNextBtnDisabled(!emblaApi.canScrollNext())
	}, [])

	useEffect(() => {
		if (!emblaApi) return

		onSelect(emblaApi)
		emblaApi.on('reInit', onSelect).on('select', onSelect)
	}, [emblaApi, onSelect])

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick
	}
}

export const PrevButton = (props) => {
	const { children, ...restProps } = props

	return (
		<button
			className="embla__button embla__button--prev btn btn-circle"
			type="button"
			{...restProps}
		>
			<FontAwesomeIcon icon={faChevronLeft} />
			{children}
		</button>
	)
}

export const NextButton = (props) => {
	const { children, ...restProps } = props

	return (
		<button
			className="embla__button embla__button--next btn btn-circle"
			type="button"
			{...restProps}
		>
			<FontAwesomeIcon icon={faChevronRight} />
			{children}
		</button>
	)
}
