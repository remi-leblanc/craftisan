'use client';
import { cookies } from "next/headers";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";


export default function CartItemList({ userData }) {

	const defaultValues = {};

	userData.cart.items.map((cartItem) => {
		defaultValues[cartItem.id] = cartItem.quantity;
	})

	async function updateQuantity(id, quantity) {

		const res = await fetch('https://localhost:4000/api/cart-products/' + id, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ quantity: quantity }),
			credentials: 'include'
		})

	}

	const {
		register,
		watch,
		formState: { errors, dirtyFields, isDirty }
	} = useForm({
		defaultValues: defaultValues
	})

	useEffect(() => {
		const subscription = watch((value, { name, type }) =>
			updateQuantity(name, value[name])
		)
		return () => subscription.unsubscribe();
	}, [watch]);

	return (
		<div>
			{userData.cart.items.map((cartItem, index: number) => (
				<div className="flex py-10 border-t border-base-200" key={index}>
					<a className="w-1/4" href={"/product/" + cartItem.product.id}>
						<img className="w-full" src={"https://localhost:4000/api/photos/" + cartItem.product.photos[0].id} />
					</a>
					<div className="flex flex-col px-6 w-1/4">
						<a href={"/product/" + cartItem.product.id}>
							{cartItem.product.name}
						</a>
						<span>{cartItem.product.price}</span>
					</div>
					<div className="flex px-6 w-1/4">
						<select defaultValue={cartItem.quantity} className="select select-bordered select-sm w-full max-w-16" {...register(cartItem.id.toString())}>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>
				</div>
			))}
		</div>

	);
}