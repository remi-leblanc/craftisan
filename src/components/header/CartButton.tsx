import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartButton(props) {

	const Badge = () => {
		if (props.cart.length) {
			return <div className="indicator-item badge badge-primary w-4 h-4 p-0 text-xs font-bold">{props.cart.length}</div>
		}
	}

	return (
		<a href="/cart" className="indicator text-lg">
			<Badge/>
			<FontAwesomeIcon icon={faCartShopping} />
		</a>
	)

}
