"use client";
import { Button } from "@components/ui/button";
import { MessageCircleQuestionIcon, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";

const About = () => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center">
      <h1 className="mt-2 inline-flex h-[40px] w-full animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Информация
      </h1>
      <section
        id="ourTeam"
        className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 text-white"
      >
        <p className="mt-2 w-full bg-black bg-opacity-50 p-2 text-center text-xl text-white">
          Нашият екип
        </p>
        Нашият екип се състои от професионалисти с дългогодишен опит в
        автомобилната индустрия, които споделят нашата страст към автомобилите и
        стремеж към перфекционизъм. Всеки член на нашия екип е внимателно
        подбран заради своята експертиза, ангажираност и умение да предоставя
        изключително обслужване на клиентите. Започвайки от специалистите по
        внос, които се грижат за избора и доставката на най-добрите автомобили
        от чужбина, до нашите опитни механици, които извършват всички необходими
        ремонти и подобрения, ние сме обединени от една обща цел – да
        предоставим най-високото качество на услугите. Нашите служители по
        продажбите и обслужването на клиенти са винаги готови да помогнат и да
        дадат най-добрите съвети, за да гарантират, че всеки клиент намира
        идеалния автомобил, съобразен с неговите изисквания. Ние се гордеем с
        нашия екип и вярваме, че той е ключът към нашия успех. Благодарение на
        тяхната отдаденост и професионализъм, ние успяваме да постигаме високи
        стандарти и да удовлетворяваме нуждите на нашите клиенти.
      </section>

      <section
        id="ourMission"
        className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 text-white"
      >
        <p className="mt-2 w-full bg-black bg-opacity-50 p-2 text-center text-xl text-white">
          Нашата мисия
        </p>
        Нашата мисия е да предоставим на клиентите си най-доброто изживяване при
        покупка на автомобили, като съчетаваме висококачествени превозни
        средства с изключителни услуги. Започнахме преди 10 години с внос на
        автомобили, които препродавахме след внимателен подбор и осигуряване на
        най-добри цени. С времето разширихме дейността си и започнахме да
        внасяме автомобили и за наши приятели и клиенти. Днес сме специализирани
        в организирането на цялостния процес по внос на автомобили, включително
        и изготвянето на необходимата документация. Освен това, предлагаме
        ремонтни услуги, като изпълняваме желанията на клиентите за подобрения и
        поддръжка на техните автомобили. Нашият опит и ангажимент към качество
        ни позволяват да предоставим на клиентите си надеждни и висококачествени
        автомобили, като същевременно се грижим за всеки детайл от процеса – от
        избора и вноса до ремонта и поддръжката. Стремим се към непрекъснато
        усъвършенстване и адаптиране към нуждите на пазара, за да гарантираме
        удовлетвореността на нашите клиенти. Ние вярваме, че всеки клиент
        заслужава автомобил, който отговаря на неговите нужди и желания, и
        работим усилено, за да направим това възможно.
      </section>

      <section
        id="whyUs"
        className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 text-white"
      >
        <p className="mt-2 w-full bg-black bg-opacity-50 p-2 text-center text-xl text-white">
          Защо да изберете Myride
        </p>
        Избирайки Myride, вие избирате качество, надеждност и професионализъм.
        Нашата дейност е изградена върху основите на дългогодишен опит и
        задълбочено познаване на автомобилната индустрия. През последните десет
        години ние се доказахме като доверен партньор на множество клиенти, като
        осигуряваме внимателно подбрани и висококачествени автомобили на
        най-добри цени. Специализирали сме се в цялостния процес по внос на
        автомобили, включително и изготвянето на необходимата документация,
        което означава, че можем да ви осигурим пълно спокойствие и удобство.
        Освен това, предлагаме ремонтни услуги, като изпълняваме желанията на
        клиентите за подобрения и поддръжка на техните автомобили. Нашият
        ангажимент към качество ни позволява да предоставим на клиентите си
        надеждни и висококачествени автомобили, като същевременно се грижим за
        всеки детайл от процеса – от избора и вноса до ремонта и поддръжката.
        Ние гарантираме професионализъм и внимание към всяко ваше изискване.
        Свържете се с нас и нека ви помогнем да намерите перфектния автомобил,
        съобразен с вашите нужди и желания. Избирайки Myride, вие не само
        получавате превъзходен автомобил, но и партньор, който се грижи за
        вашето удовлетворение и комфорт на всяка стъпка от процеса.
      </section>

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
