import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => (
	<footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
		<div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
			<div className="flex justify-start items-center gap-6">
				<Image
					src="/logo1.png"
					alt="logo"
					width={158}
					height={18}
					className="object-contain"
				/>
				<p className="text-base text-gray-700">
					AUTOMDN 2024 <br />
					Всички права запазени &copy;
				</p>
			</div>

			<div className="footer__links">
				{footerLinks.map((item) => (
					<div key={item.title} className="footer__link">
						<h3 className="font-bold">{item.title}</h3>
						<div className="flex flex-col gap-5">
							{item.links.map((link) => (
								<Link
									key={link.title}
									href={link.url}
									className="text-gray-500"
								>
									{link.title}
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
		</div>

		<div className="flex flex-col justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
			<p>@2024 AUTOMDN. Всички права запазени</p>

			<div className="footer__copyrights-link">
				<Link href="/" className="text-gray-500">
					Правила за поверителност
				</Link>
				<Link href="/" className="text-gray-500">
					Условия и положения
				</Link>
			</div>
		</div>
	</footer>
);

export default Footer;
