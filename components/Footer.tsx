import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className="mt-5 flex flex-col text-gray-100">
    <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
      <div className="flex items-center justify-start gap-6">
        <Image
          src="/myride_logo.jpg"
          alt="logo"
          width={158}
          height={18}
          className="object-contain hover:shadow-2xl hover:shadow-orange-500"
        />
        <p className="text-base text-gray-400">
          MYRIDE 2024 <br />
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
                  className="text-gray-200 transition-colors duration-300 hover:bg-orange-500 hover:text-center"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-10 flex flex-col flex-wrap items-center justify-between border-t border-gray-100 px-6 py-10 sm:px-16">
      <p>@2024 MYRIDE. Всички права запазени</p>

      <div className="footer__copyrights-link">
        <Link href="/pravila" className="text-gray-500">
          Правила за ползване
        </Link>
        <Link href="/politika" className="text-gray-500">
          Политика за поверителост
        </Link>
        <Link href="/otgovornost" className="text-gray-500">
          Отговорност
        </Link>
        <Link href="/biskvitki" className="text-gray-500">
          Бисквитки
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
