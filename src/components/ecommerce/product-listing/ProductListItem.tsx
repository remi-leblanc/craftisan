import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductListItem(props) {
	return (
		<a href={"/product/" + props.product.id} className="w-full">
			<div className="w-full h-72 mb-3">
				<img className="object-cover w-full h-full" src={"https://localhost:4000/api/photos/" + props.product.photos[0].id} />
			</div>
			<h3 className="font-bold text-xl">{props.product.title}</h3>
			<div className="text-sm">Variant</div>
			<div className="font-bold text-2xl mt-2">{props.product.price}</div>
		</a>
	);
}
