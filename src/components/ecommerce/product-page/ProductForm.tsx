'use client';
import { redirect } from "next/navigation";
import { BaseSyntheticEvent, useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
	variant: number
	product: number
	quantity: number
}


export default function ProductForm(props) {

	const addToCartButton = useRef(null);
	const orderNowButton = useRef(null);

	async function addToCart(formData) {

		const res = await fetch('https://localhost:4000/api/cart-products', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
			credentials: 'include'
		})

	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>()

	const watchVariant = watch("variant")

	const onSubmit: SubmitHandler<FormValues> = (data, event: BaseSyntheticEvent<HTMLFormElement, SubmitEvent>) => {
		if(event.nativeEvent.submitter == addToCartButton.current){
			addToCart(data)
		}
	}

	useEffect(() => {
		props.selectVariant(watchVariant);
	}, [watchVariant])

	return (
		<form className={props.className} onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-2">Variant</div>
			<div className="flex gap-4 mb-8">
				<label className="btn cursor-pointer has-[:checked]:btn-neutral has-[:checked]:text-base-100">
					<span className="">Variant 1</span>
					<input type="radio" defaultChecked className="hidden" {...register("variant")} value={0} />
				</label>
				<label className="btn cursor-pointer has-[:checked]:btn-neutral has-[:checked]:text-base-100">
					<span className="">Variant 2</span>
					<input type="radio" className="hidden" {...register("variant")} value={1} />
				</label>
			</div>
			<div className="mb-2">Quantité</div>
			<select className="select select-bordered w-full mb-8" {...register("quantity")}>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select>
			<input type="hidden" {...register("product")} value={props.product.id} />
			<button className="btn btn-neutral w-full mb-4" ref={addToCartButton} type="submit">Ajouter au panier</button>
			<button className="btn btn-outline w-full" ref={orderNowButton} type="submit">Commander maintenant</button>
		</form>
	)
}