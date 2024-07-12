"use client";
import { Button } from "@components/ui/button";
import { MessageCircleQuestionIcon, PhoneCall } from "lucide-react";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";

const About = () => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center">
      <h1 className="mt-2 inline-flex h-[40px] w-full animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        За нас{" "}
      </h1>
      <p className="mt-2 w-full bg-black bg-opacity-50 p-2 text-center text-xl text-white">
        Кратка информация
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-4 p-4 text-white">
        <p>
          Започнахме нашата дейност преди 10 години с внос на автомобили, които
          препродавахме след внимателен подбор и осигуряване на най-добри цени.{" "}
        </p>{" "}
        С времето разширихме дейността си и започнахме да внасяме автомобили и
        за наши приятели и клиенти.{" "}
        <p>
          През последните две години се специализирахме в организирането на
          цялостния процес по внос на автомобили, включително и изготвянето на
          необходимата документация.{" "}
        </p>
        Освен това, предлагаме ремонтни услуги, като изпълняваме желанията на
        клиентите за подобрения и поддръжка на техните автомобили.{" "}
        <p>
          {" "}
          Нашият опит и ангажимент към качество ни позволяват да предоставим на
          клиентите си надеждни и висококачествени автомобили, като същевременно
          се грижим за всеки детайл от процеса – от избора и вноса до ремонта и
          поддръжката.
        </p>
        Ние гарантираме професионализъм и внимание към всяко ваше изискване.
        Свържете се с нас и нека ви помогнем да намерите перфектния автомобил,
        съобразен с вашите нужди и желания.
      </div>
      <p className="mt-2 w-full bg-black bg-opacity-50 p-2 text-center text-xl text-white">
        Myride.BG - "Антъни 15" ЕООД - гр. Благоевград
      </p>
      <Image
        className="mb-4 mt-4 shadow-xl shadow-orange-500"
        src="/myride_logo.jpg"
        alt=""
        width={300}
        height={300}
      />
      <div className="flex flex-col items-center justify-center gap-2 md:grid md:flex-none md:grid-cols-2">
        <Button
          className="inline-flex h-[40px] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          variant="outline"
          size="sm"
        >
          <a
            className="flex animate-pulse items-center justify-center gap-1"
            href="tel:+359876995555"
          >
            Получи информация <PhoneCall className="h-4 w-4" />
          </a>
        </Button>

        <Button
          className="inline-flex h-[40px] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          size="sm"
        >
          <ReactWhatsapp
            className="flex animate-pulse items-center justify-center gap-1"
            element="webview"
            number="+359876995555"
            message={`Здравейте, интересувам се от закупуването на автомобил от Myride.bg`}
          >
            Изпрати запитване <MessageCircleQuestionIcon className="h-4 w-4" />
          </ReactWhatsapp>
        </Button>
      </div>
    </div>
  );
};

export default About;
