'use client';
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginForm(props) {

	async function login(formData) {

		const res = await fetch('https://localhost:4000/api/auth/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
			credentials: 'include'
		})

		if (res.ok) {
			props.loginSuccess();
		}

	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => login(data);

	return (
		<form className={props.className} onSubmit={handleSubmit(onSubmit)}>
			<input type="text" className="input bg-base-200 w-full" placeholder="Email" defaultValue="" {...register("email")} aria-label="email" />
			<input type="password" className="input bg-base-200 w-full" placeholder="Mot de passe" defaultValue="" {...register("password")} aria-label="password" />
			<button className="btn btn-neutral" name="submit">Se connecter</button>
		</form>
	);
}
