import ProductPage from "@/components/ecommerce/product-page/ProductPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

async function fetchProduct(id: number) {
	const res = await fetch('https://localhost:4000/api/products/' + id)

	if (!res.ok) {
		return null
	}

	return res.json()
}

export default async function Product({ params }: { params: { id: number } }) {

	const product = await fetchProduct(params.id);

	return (
		<ProductPage product={product}/>
	);
}
