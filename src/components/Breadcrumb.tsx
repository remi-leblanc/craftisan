export default function Breadcrumb({ children }) {

	return (
		<div className="breadcrumbs py-0">
			<ul>
				{children.map((child, index) => {
					return (
						<li key={index}>
							{child}
						</li>
					)
				})}
			</ul>
		</div>
	)
}