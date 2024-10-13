import LoginForm from "@/components/auth/LoginForm";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { redirect } from "next/navigation";

export default function Login() {

	const loginSuccess = async () => {
		"use server";
		redirect("/")
	}

	return (
		<main className="flex flex-col items-center">
			<h1 className="text-3xl font-bold mb-6">Se connecter</h1>
			<p>Vous n'avez pas encore de compte ? <a className="font-bold underline" href="">Inscrivez-vous</a></p>
			<div className="flex flex-col items-center w-full max-w-sm">
				<LoginForm className="flex flex-col gap-y-3 mt-10 w-full" loginSuccess={loginSuccess} />
				<div className="divider"></div>
				<button className="btn mb-4">
					<FontAwesomeIcon icon={faGoogle} />
					Se connecter avec Google
				</button>
				<button className="btn mb-4">
					<FontAwesomeIcon icon={faFacebookF} />
					Se connecter avec Facebook
				</button>
				<a href="" className="underline font-bold text-sm">Mot de passe oublié ?</a>
			</div>

		</main>
	);
}
