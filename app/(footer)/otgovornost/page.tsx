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
        ОГРАНИЧАВАНЕ НА ОТГОВОРНОСТТА НА ДОСТАВЧИКА
      </h1>

      <section
        id="otgovornost"
        className="text-wrap flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 text-white"
      >
        <p>&nbsp;</p>
        <p>
          Настоящият документ за ограничаване на отговорността на Доставчика
          представлява неразделна част от Общите условия за използване на Сайта
          www.myride.bg. Всички дефиниции и определения, дадени в Общите
          условия, са приложими и в настоящия документ.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност за субективните възприятия и
          интерпретация на точността, пълнотата и полезността на информационните
          ресурси на сайта.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност за информацията (в т.ч. за
          нейната пълнота и достоверност), съдържаща се в сайтове, към които
          настоящият сайт съдържа препратки. Доставчикът не дава никаква
          гаранция за коректността или надеждността на съдържанието на сайта.
          При никакви обстоятелства Доставчикът няма да носи отговорност за
          загуби или щети, причинени от вашето разчитане на съдържание на
          уебсайта.
        </p>
        <p>
          &bull; Доставчикът има право на обезщетение за всички вреди, разноски
          и претенции на трети лица, които са следствие от нарушение на тези
          Общи условия и/или нерегламентирана употреба на услугите на сайта.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност за настъпили вреди за
          Потребителя, във връзка с каквато и да било невъзможност или липса на
          достъп до този сайт поради технически причини и др.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност за достоверността и истинността
          на link-препратките и профилите, публикувани в този сайт.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност в случай на непреодолима сила,
          случайни събития, проблеми в Интернет, технически или други обективни
          причини, включително и разпореждания на компетентните държавни органи.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност за вреди, причинени от
          Потребителя на трети лица.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност за имуществени или
          неимуществени вреди, изразяващи се в пропуснати ползи или претърпени
          вреди, причинени на Потребителя в процеса на използване или
          неизползване на сайта и сключване на договори за услуга с Партньори на
          Доставчика.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност за вреди от коментари, мнения и
          публикации в платформатa.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност в случай на преодоляване на
          мерките за сигурност на техническото оборудване и от това последва
          загуба на информация, разпространение на информация, достъп до
          информация, ограничаване на достъп до информация и други сходни
          последствия.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност и за всички вреди, причинени на
          получателите на услугата при предоставяне на услугата, с изключение на
          умишлено причинени вреди от служители на доставчика на услугата;
        </p>
        <p>
          &bull; Доставчикът не носи отговорност за субективните възприятия и
          очаквания за качество на предлаганите услуги от Доставчика.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност за сключените договори между
          Потребителите на платформата и Партньорите на Доставчика, както и за
          тяхното развитие, резултати, полезност за Потребителя и прекратяването
          им.
        </p>
        <p>
          &bull; Доставчикът не дължи каквото и да е било обезщeтение, ако
          Потребителят не е доволен от услугата и при каквито и да е било други
          условия.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност за отношенията, които могат да
          възникнат между Потребителя и Партньорите на Доставчика.
        </p>
        <p>
          &bull; Доставчикът не носи отговорност при забавяне на комуникацията
          от страна на Партньорите на Доставчика.
        </p>
        <p>
          &bull;Макар, че работи само с доверени партньорски фирми, Доставчикът
          не дава никакви обещания или гаранции, от какъвто и да е вид и не носи
          каквато и да е отговорност и не дължи каквото и да е обезщетение, ако
          Потребителят не е доволен от предоставените услуги от партньорски
          фирми или от преживяването си на уебсайта www.myride.bg.
        </p>
        <p>
          Доставчикът не гарантира, че уебсайтът е съвместим с всички устройства
          и операционни системи. Потребителят трябва да използва собствен
          софтуер за защита от вируси.
        </p>
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
