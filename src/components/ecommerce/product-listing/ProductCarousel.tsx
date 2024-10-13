import Product from "./ProductListItem";
import EmblaCarousel from "@/components/embla/EmblaCarouselSimple";
import EmblaSlide from "@/components/embla/components/EmblaSlide";

const OPTIONS = { align: 'start' }

export default function ProductCarousel(props) {

	const products = () => {
		let arr = [];

		for (var prod of props.products) {
			arr.push(
				<EmblaSlide className="grow-0 shrink-0 basis-1/4">
					<Product product={prod}/>
				</EmblaSlide>
			);
		}
		return arr;
	}

	return (
		<EmblaCarousel options={OPTIONS} >
			{products()}
		</EmblaCarousel>
	);
}
