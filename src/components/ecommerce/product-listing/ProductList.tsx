import Product from "./ProductListItem";

export default function ProductList() {
	return (
		<div className="flex gap-x-8 w-full">
			<Product/>
			<Product/>
			<Product/>
		</div>
	);
}
