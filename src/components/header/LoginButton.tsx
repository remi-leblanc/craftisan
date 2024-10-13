import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginButton(props) {
	if (props.username) {
		return (
			<span>{props.username}</span>
		)
	}
	else {
		return (
			<a href="/login" className="btn btn-sm">Se connecter</a>
		)
	}

}
