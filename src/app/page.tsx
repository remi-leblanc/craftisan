import ProductCarousel from "@/components/ecommerce/product-listing/ProductCarousel";


async function fetchProducts() {

	const res = await fetch('https://localhost:4000/api/products')

	if (!res.ok) {
		return null
	}

	return res.json()
}

export default async function Home() {

	const products = await fetchProducts();

	return (
		<main className="">
			<ProductCarousel products={products} />
		</main>
	);
}
