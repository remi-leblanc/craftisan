import CartItemList from "@/components/ecommerce/cart/CartItemList";
import { cookies } from "next/headers";
import { SubmitHandler, useForm } from "react-hook-form";

async function fetchUser() {

	const res = await fetch('https://localhost:4000/api/auth/me', {
		headers: { Cookie: cookies().toString() },
	})

	if (!res.ok) {
		return null
	}

	return res.json()
}


export default async function Cart() {

	const userData = await fetchUser();

	return (
		<main className="section-container">
			<h1 className="text-3xl font-bold mb-12">Votre panier</h1>
			<div className="flex">
				<div className="w-3/5">
					<CartItemList userData={userData} />
				</div>
				<div className="w-2/5 pl-16">
					<div className="bg-base-200 p-8">
						<h2 className="text-xl font-semibold mb-4">Détails de la commande</h2>
						<div className="flex justify-between py-3 border-b border-base-300">
							<span className="opacity-70">Sous-total</span>
							<span className="font-semibold">99</span>
						</div>
						<div className="flex justify-between py-3 border-b border-base-300">
							<span className="opacity-70">Estimation livraison</span>
							<span className="font-semibold">99</span>
						</div>
						<div className="flex justify-between py-3 border-b border-base-300">
							<span className="opacity-70">TVA</span>
							<span className="font-semibold">99</span>
						</div>
						<div className="flex justify-between text-lg py-3 mb-4">
							<span className="font-semibold">Total</span>
							<span className="font-semibold">99</span>
						</div>
						<a href="" className="btn btn-primary w-full text-lg">Finaliser la commande</a>
					</div>
				</div>
			</div>
		</main>
	);
}
