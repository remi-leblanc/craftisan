import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import "./globals.css";
import LoginButton from '@/components/header/LoginButton';
import { cookies } from "next/headers";
import CartButton from '@/components/header/CartButton';

async function fetchUser() {

	const res = await fetch('https://localhost:4000/api/auth/me', {
		headers: { Cookie: cookies().toString() },
	})

	if (!res.ok) {
		return null
	}

	return res.json()
}

export default async function RootLayout({ children }: {
	children: React.ReactNode
}) {

	config.autoAddCss = false
	library.add(fab, fas, far)

	const userData = await fetchUser()

	return (
		<html data-theme="light" lang="en" >
			<body>
				<div className="bg-base-100" >
					<div className="flex flex-col py-4 section-container" >
						<div className="flex items-center gap-x-4" >
							<div className="" >
								<div className="dropdown" >
									<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" >
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor" >
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4 6h16M4 12h8m-8 6h16" />
										</svg>
									</div>
									< ul
										tabIndex={0}
										className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" >
										<li><a>Item 1</a></li>
										<li>
											<a>Parent</a>
											< ul className="p-2" >
												<li><a>Submenu 1</a></li>
												<li><a>Submenu 2</a></li>
											</ul>
										</li>
										<li><a>Item 3</a></li>
									</ul>
								</div>
								<a href="/" className="text-xl font-semibold">Craftisan</a>
							</div>
							<div className="grow">
								<input type="text" className="input bg-base-200 w-full" placeholder="Recherche" />
							</div>
							< div className="flex items-center gap-x-4" >
								<LoginButton username={userData.username} />
								<CartButton cart={userData.cart} />
							</div>
						</div>
						<div className="flex justify-center" >
							<div className="navbar-center hidden lg:flex" >
								<ul className="menu menu-horizontal px-1" >
									<li><a>Item 1</a></li>
									<li>
										<details>
											<summary>Parent</summary>
											< ul className="p-2" >
												<li><a>Submenu 1</a></li>
												<li><a>Submenu 2</a></li>
											</ul>
										</details>
									</li>
									<li><a>Item 3</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{children}
			</body>
		</html>
	);
}
