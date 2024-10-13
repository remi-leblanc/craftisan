import EmblaCarouselThumbs from "@/components/embla/EmblaCarouselThumbs";
import EmblaSlide from "@/components/embla/components/EmblaSlide";

const OPTIONS = { align: 'start' }

export default function ProductPhotosCarousel(props) {

	const photos = () => {
		let arr = [];

		for (var photo of props.product.photos) {
			arr.push(
				<img className="object-cover h-full w-full" src={"https://localhost:4000/api/photos/" + photo.id}/>
			);
		}
		return arr;
	}

	return (
		<EmblaCarouselThumbs currentSlide={props.variant} options={OPTIONS} >
			{photos()}
		</EmblaCarouselThumbs>
	);
}
