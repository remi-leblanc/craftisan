
"use client"
import Breadcrumb from "@/components/Breadcrumb";
import ProductForm from "@/components/ecommerce/product-page/ProductForm";
import ProductPhotosCarousel from "@/components/ecommerce/product-page/ProductPhotosCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export default function ProductPage({ product }) {
	const [variant, setVariant] = useState(0)

	const selectVariant = (variant: number) => {
		setVariant(variant)
	}

	return (
		<main className="flex section-container">
			<div className="w-1/2 pr-16">
				<Breadcrumb>
					<a href="" className="">Boutique</a>
					<a href="" className="">Categorie</a>
					<a href="" className="font-bold">{product.name}</a>
				</Breadcrumb>
				<h1 className="text-3xl font-bold py-4">{product.name}</h1>
				<div className="flex mb-4">
					<div className="text-2xl font-bold">{product.price}</div>
				</div>
				<p className="mb-8">{product.description}</p>
				<ProductForm product={product} selectVariant={selectVariant}/>
			</div>
			<div className="w-1/2 overflow-hidden">
				<ProductPhotosCarousel product={product} variant={variant} />
			</div>
		</main>
	);
}
