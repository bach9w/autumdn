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
        ОБЩИ УСЛОВИЯ ЗА ПОЛЗВАНЕ НА САЙТА www.myride.bg
      </h1>

      <section
        id="otgovornost"
        className="text-wrap flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 text-white"
      >
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>
          <strong>I. ВЪВЕДЕНИЕ</strong>
        </p>
        <p>&nbsp;</p>
        <p>
          Моля прочетете внимателно настоящите Общи условия, преди да използвате
          сайта <strong>www.myride.bg.</strong>
        </p>
        <p>
          Приемането и съгласието с настоящите Общи условия е задължително
          условие за използването на сайта.
        </p>
        <p>
          Общите условия влизат в сила от момента, в който Потребителят използва
          за първи път сайта. Те са приложими при всяко посещение и използване
          на уебсайта.
        </p>
        <p>
          Уебсайтът <strong>www.myride.bg </strong>е собственост на{" "}
          <strong>&ldquo;Антъни 15&rdquo; ЕООД</strong>.
        </p>
        <p>
          Настоящите Общи условия представляват споразумение между всеки един
          потребител на Уебсайта и Собственика на уебсайт и имат за цел да
          уредят условията, при които Собственикът на уебсайта предлага
          информационните ресурси и услуги на потребителите през уебсайта,
          находящи се на интернет адрес <strong>www.myride.bg</strong>
          (наричан по-долу за краткост уебсайта).
        </p>
        <p>&nbsp;</p>
        <p>
          Услугите се предлагат само в случай, че се приемат настоящите Общи
          условия, правила и клаузи в този документ. Ако не сте съгласни с тези
          условия - моля не използвайте сайта.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>
            С ползването на интернет сайта всеки Потребител заявява, че има
            правото, пълномощията и дееспособността да бъде обвързан с тези
            условия и че има навършени 18 години.
          </strong>
        </p>
        <p>&nbsp;</p>
        <p>
          Потребителят заявява, че е запознат с настоящите Общи условия за
          ползване и всяко активно действие от негова страна или запазване на
          пасивно поведение, след като интернет сайтът е зареден в браузъра или
          е стартирано мобилното приложение, представлява изрично електронно
          волеизявление по смисъла на Закона за електронния документ и
          електронния подпис, че е съгласен доброволно и съзнателно с настоящите
          Общи условия за ползване.
        </p>
        <p>
          С приемане на настоящите Общи условия Потребителят дава изричното си
          съгласие личните му данни да бъдат обработвани при спазване на
          изискванията на Закона за защита на личните данни, както във връзка с
          настоящите Общи условия и използването на интернет сайта, така и по
          повод на дейността на доставчика на услугите.
        </p>
        <p>&nbsp;</p>
        <p>
          С предоставянето на информация (контактна информация) на интернет
          сайта, получателят на услугите се съгласява, че доставчикът на
          услугите може да влезе в контакт с получателя във връзка с
          информацията, която е изпратил.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>II. ДАННИ ЗА СОБСТВЕНИКА НА УЕБСАЙТА</strong>
        </p>
        <p>&nbsp;</p>
        <p>
          1. Наименование на фирма:{" "}
          <strong>&ldquo;Антъни 15&rdquo; ЕООД; ЕИК: 205550021</strong>;
        </p>
        <p>
          2. Седалище и адрес за кореспонденция: гр. Благоевград, ж.к. Ален Мак,
          бл. 39 вх. Б;
        </p>
        <p>* служебен имейл за комуникация с клиенти: sales@myride.bg;</p>
        <p>* тел.: +359 87699 5555;</p>

        <p>3.Надзорни органи:</p>
        <p>
          <strong>(1) Комисия за защита на личните данни</strong>
          <br /> Адрес: София 1592, бул. &bdquo;Проф. Цветан Лазаров&rdquo;
          №&nbsp;2, <br /> тел.: (02) 940 20 46
          <br /> факс: (02) 940 36 40
          <br /> Email: kzld@government.bg, kzld@cpdp.bg
          <br /> Уеб сайт: www.cpdp.bg
          <br /> <br /> <strong>
            (2) Комисия за защита на потребителите
          </strong>{" "}
          <br /> Адрес: 1000 гр. София, пл."Славейков" №4А, ет.3, 4 и 6, <br />{" "}
          тел.: 02 / 980 25 24 <br /> факс: 02 / 988 42 18 <br /> гореща линия:
          0700 111 22 <br /> Уеб сайт:{" "}
          <a href="http://www.kzp.bg">www.kzp.bg</a>
        </p>
        <p>
          <strong>(3) Орган за алтернативно решаване на спорове (АРС)</strong>
        </p>
        <p>
          Обща помирителна комисия към Комисия за защита на потребителите със
          седалище град София
        </p>
        <p>Адрес: гр. София, пл. Славейков 4 А</p>
        <p>Електронна поща: adr.sofia@kzp.bg</p>
        <p>Уебсайт: http://www.kzp.bg</p>
        <p>Телефон +35929330517</p>
        <p>&nbsp;</p>
        <p>
          <strong>III. ДЕФИНИЦИИ</strong>
        </p>
        <p>
          По смисъла на настоящите Общи условия изброените понятия са използвани
          със следното значение:
        </p>
        <p>
          &bull;{" "}
          <strong>
            &bdquo;НИЕ&ldquo;, &bdquo;СОБСТВЕНИКА&ldquo;,
            &bdquo;ДОСТАВЧИКА&ldquo;
          </strong>{" "}
          е<strong>&ldquo;Антъни 15&rdquo; ЕООД</strong>;
        </p>
        <p>
          &bull;{" "}
          <strong>
            &bdquo;САЙТА&ldquo;, &bdquo;СТРАНИЦАТА&ldquo;,
            &ldquo;ПЛАТФОРМАТА&ldquo;,
          </strong>{" "}
          е уебсайта www.myride.bg<strong>, </strong>който представлява
          платформа за откриване на най-подходящото предложение за Потребиеля от
          предложените оферти на уебсайта, свързани с автомобили, части и
          ремонтни услуги свързани с автомобилите.
        </p>
        <p>
          &bull; <strong>"ПОТРЕБИТЕЛ"</strong> е всяко лице, посещаващо и/или
          ползващо, по какъвто и да е начин уебсайта www.myride.bg, само за
          лична употреба с нетърговска цел;
        </p>
        <p>
          &bull; <strong>"ПАРТНЬОР", &bdquo;ПАРТНЬОРСКА ФИРМА&ldquo; е</strong>{" "}
          всяко физическо или юридическо лице или друго правно образувание, с
          което Собственикът се намира в договорни отношения, което има право да
          предоставя своите продукти, услуги и допълнителна информация за своите
          услуги на Потребители на сайта www.myride.bg;
        </p>
        <p>
          &bull; <strong>"УСЛУГИ"</strong> на сайта включва достъп до
          предоставяните през уеб браузър услуги и информационни ресурси на
          сайта. Собственикът има право да използва подизпълнители за
          изпълнението на услугите, предлагани в уебсайта, без да е необходимо
          да уведоми или получи съгласието на Потребителя за това. Собственикът
          не носи отговорност за действията на тези подизпълнители.
        </p>
        <p>
          <strong>
            Услугите се предоставят само за територията на България.
          </strong>
        </p>
        <p>
          &bull; <strong>&bdquo;ОБРАБОТВАНЕ НА ЛИЧНИ ДАННИ&ldquo; -</strong>{" "}
          операция или операции, извършени чрез автоматични или неавтоматични
          средства като например: събиране, записване, организиране,
          съхраняване, блокиране, изтриване или унищожаване на данни за
          потребителите на услуги от сайта.
        </p>
        <p>
          &bull; <strong>&bdquo;АДМИНИСТРАТОР НА ЛИЧНИ ДАННИ&ldquo;</strong> е
          физическо или юридическо лице, публичен орган, агенция или друга
          структура, която сама или съвместно с други определя целите и
          средствата за обработването на лични данни.
        </p>
        <p>
          &bull; <strong>"ЗЛОНАМЕРЕНИ АТАКИ НА ТРЕТИ ЛИЦА"</strong> &ndash;
          действия или бездействия на трети лица, които са в противоречие с
          правилата на интернет етиката, в това число, но не само DoS (Denial of
          Service - претоварване на сървъра).
        </p>
        <p>
          &bull; <strong>&bdquo;ОБЩИ УСЛОВИЯ&ldquo;</strong> представляват
          отнапред установени разпоредби, които уреждат отношенията между
          Собственика и Потребителите по договор за услуги от разстояние. Общите
          условия са задължителни за всички Потребители на уебсайта и пораждат
          правно действие между страните след като Потребителят заяви, че приема
          Общите условия или Потребителят е знаел за Общите условия или е бил
          длъжен да знае и не ги оспори до момента, в който му е предоставена
          услугата.
        </p>
        <p>&nbsp;</p>
        <ol>
          <li>
            <strong>ОБРАБОТКА НА ЛИЧНИ ДАННИ</strong>
          </li>
        </ol>
        <p>
          Собственикът на www.myride.bg събира и обработва лични данни на
          потребителите на уебсайта при стриктно спазване на разпоредбите на
          Регламент 2016/679 на Европейския парламент и на Съвета от 27 април
          2016 г. Собственикът на уебсайта полага всички необходими усилия за
          защита на личните данни на потребителите на сайта срещу неправомерно
          обработване.
        </p>
        <p>
          Дocтaвчиĸът e пyблиĸyвaл инфopмaциятa oтнocнo личнитe дaнни, ĸoитo
          oбpaбoтвa и цeлитe, зa ĸoитo тe ce oбpaбoтвaт, ĸaĸтo и цялaтa
          изиcĸyeмa инфopмaция, cъглacнo Peглaмeнт (EC) 2016/679 нa Eвpoпeйcĸия
          пapлaмeнт и нa Cъвeтa oт 27 aпpил 2016 гoдинa oтнocнo зaщитaтa нa
          физичecĸитe лицa във вpъзĸa c oбpaбoтвaнeтo нa лични дaнни и oтнocнo
          cвoбoднoтo движeниe нa тaĸивa дaнни и зa oтмянa нa Диpeĸтивa 95/46/ЕO
          (GDРR) в Политиката за поверителност, която е неразделна част от
          настоящите Общите условия.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>V. ХАРАКТЕРИСТИКИ НА ПЛАТФОРМАТА</strong> <strong>И</strong>{" "}
          <strong>ТЕХНИЧЕСКИ СТЪПКИ ЗА ПРЕДОСТАВЯНЕ НА УСЛУГА</strong>
        </p>
        <p>
          Сайтът www.myride.bg представлява онлайн платформа, на която
          Доставчикът може да предлага оферти, свързани с втомобили, части и
          ремонтни услуги свързани с автомобилите.
        </p>
        <p>
          В уебсайта www.myride.bg можете да осъществявате търсене на оферти без
          да е необходимо да се регистрирате.
        </p>
        <p>
          В случай, че дадена оферта, представлява интерес за Потребителя, същия
          следва да се свърже с Доставчика по телефон или чрез платформата
          WhatsApp, след което следва публична среща за обсъждане на
          допълнителните детайли.
        </p>
        <p>
          На платформата може да участвате в аукцион. При интерес от страна на
          Потребителя, Доставчикът му предоставя възможност да участва от негово
          име в аукциона. Доставчикът организира необходимата документация за
          внос на автомобила и съответно организира самата доставка на
          автомобила.
        </p>
        <p>
          При интерес към доставка на части, Доставчикът организира доставката
          до посочен адрес от клиента.
        </p>
        <p>
          При желание на Потребителя да използва някоя от предоставените услуги,
          свързани с ремонт, следва да се направи допълнителен разговор за
          уреждане относно желаното отремонтиране.
        </p>
        <p>
          Доставчикът сам определя какви оферти да бъдат представени на
          уебсайта. Доставчикът сам определя колко време да бъде активна дадена
          оферта.
        </p>
        <p>
          Доставчикът си запазва правото да прекрати едностранно достъпът на
          Потребителя до платформата, без никакви допълнителни задължения за
          двете страни и без да носи отговорност за нанесени вреди.
        </p>
        <p>
          Доставчикът може да откаже предоставяне на услуга, когато съществуват
        </p>
        <p>
          основателни съмнения, че поръчката е неавтентична, в това число, че не
        </p>
        <p>изхожда от Потребителя.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>
          <strong>VI. ПРАВА И ЗАДЪЛЖЕНИЯ НА СТРАНИТЕ</strong>
        </p>
        <p>
          &bull; Потребителите нямат право да деактивират или разстройват
          функционалностите на уебсайта и да осъществяват злонамерени атаки, да
          използват автоматизирани програми, инструменти или процеси (като уеб
          роботи, ботове, паяци и автоматизирани скриптове) за достъп до
          платформата или който и да е сървър, мрежа или система, свързана с
          нея, или да извличат или събират съдържание или информация от
          www.myride.bg.
        </p>
        <p>
          &bull; Потребителите нямат право да използват името, логото на
          платформата или други свързани или подобни имена, лога, имена на
          продукти и услуги, дизайни или слогани, освен с нашето предварително
          писмено съгласие.
        </p>
        <p>
          &bull; Потребителите нямат право да използват платформата по начин,
          който може да повлияе неблагоприятно на нашите системи или сигурност
          или да попречи на използването й от други потребители.
        </p>
        <p>
          &bull; Видът и спецификите на възможностите за ползване на интернет
          сайта могат да бъдат променяни едностранно, по преценка на собственика
          на www.myride.bg
        </p>
        <p>
          &bull; Всички потребители получават правото да използват услугите на
          сайта, единствено за лични/нетърговски цели при спазване на
          приложимото законодателство и изискванията, посочени в настоящите Общи
          условия.
        </p>
        <p>
          &bull; Съдържанието на интернет сайта се определя от собственика на
          www.myride.bg като също така има право по всяко време да променя
          съдържанието на сайта си, като по своя преценка добавя и/или премахва
          рубрики и/или материали.
        </p>
        <p>
          &bull; Достъпът до сайта може да бъде временно спрян или ограничен с
          цел поддръжка на сайта или въвеждане на нови услуги/продукти. Поради
          естеството на Интернет непрекъснатият достъп не може да бъдат
          гарантиран.
        </p>
        <p>
          &bull; Собственикът на сайтa има право да използва
          &bdquo;бисквитки&ldquo; (cookies). &bdquo;Бисквитките&ldquo; се
          използват с цел оптимизация и осигуряване на пълно и качествено
          ползване на функционалностите на сайта. За повече информация моля
          запознайте се с Политиката ни относно бисквитките. С приемането на
          настоящите Общи условия, Потребителят се съгласява с обработването на
          бисквитки и други технологии за целите на директния маркетинг без
          профилиране &ndash; нетаргетирана банерна реклама.
        </p>
        <p>
          Нарушенията на тези Общи условия могат да доведат до спиране или
          прекратяване на достъпа ви до платформата.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>VII. ВРЪЗКИ КЪМ САЙТОВЕ НА ТРЕТИ СТРАНИ</strong>
        </p>
        <p>
          Сайтът може да съдържа специални връзки (линкове, хипервръзки) към
          други уеб сайтове, поддържани от трети страни. Доставчикът не носи
          отговорност за законосъобразността, пълнотата, верността и
          актуалността на съдържанието на информационни ресурси на трети лица,
          към които сочат електронни препратки от този сайт, нито за
          законосъобразността на дейността на тези трети лица.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>VIII. АВТОРСКИ ПРАВА</strong>
        </p>
        <p>
          Цялото съдържание на всички статии, страници, аудио/видео материали,
          лого, графични изображения, надписи, изображения и други ресурси
          качени на сайта принадлежат на Собственика или на негови партньори и
          са защитени по смисъла на Закона за авторското право на Република
          България и сродните му права, Кодекса за международното частно право,
          както и Регламентите на ЕС за защита на авторското право.
          Нерегламентираната им употреба се счита за престъпление и
          извършителите ще бъдат подведени под наказателна и гражданска
          отговорност, спрямо българското и световното законодателство.{" "}
        </p>
        <p>
          Тяхното копиране, споделяне, възпроизвеждане, разпространяване,
          излъчване, предаване, видоизменяне или използване по друг начин, води
          до нарушение на авторските права и подлежи на съдебно преследване и
          нарушителите носят наказателна отговорност по смисъла на Наказателния
          кодекс на Република България.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>IX. ЗАБРАНА ЗА РАМКИРАНЕ НА СТРАНИЦАТА</strong>
        </p>
        <p>&nbsp;</p>
        <p>
          Потребителят може да използва линкове към началната страница на сайта,
          при условие, че прави това обосновано и законосъобразно, без да
          уврежда репутацията на Доставчика или да извлича неследваща се облага
          и след изрично писмено негово съгласие.
        </p>
        <p>
          Потребителят няма право да интегрира линкове по начин, който
          предполага отношения на свързаност, одобрение или подкрепа от страна
          на Доставчика, когато такива липсват.
        </p>
        <p>
          Потребителят няма право да създава линкове към страница на сайта в
          интернет, която не е негова собственост.
        </p>
        <p>
          Поставянето на страница от сайта в &bdquo; рамка&ldquo; на друга
          страница или създаването на линк към раздел на страница от сайта,
          различен от началната страница, са забранени.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>X. РАЗРЕШАВАНЕ НА СПОРОВЕ</strong>
        </p>
        <p>
          Всички спорове, породени от настоящите Общи условия или отнасящи се до
          тях, включително споровете, породени или отнасящи се до тяхното
          тълкуване, недействителност, изпълнение или прекратяване, както и
          споровете за попълване на празноти в Общите условия или
          приспособяването им към нововъзникнали обстоятелства, ще бъдат
          разрешавани чрез разбирателство и взаимни отстъпки.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>XI. КОНФИДЕНЦИАЛНОСТ</strong>
        </p>
        <p>
          Потребителят и Доставчикът се задължават по време и след изтичане на
        </p>
        <p>
          периода на договора да не правят публично достояние писмена или устна
        </p>
        <p>
          кореспонденция проведена между тях. За публично достояние може да се
        </p>
        <p>
          смята публикуването на кореспонденция в печатни и електронни медии,
        </p>
        <p>интернет форуми, лични или публични уеб сайтове и др.</p>
        <p>&nbsp;</p>
        <p>
          <strong>XII. СПАСИТЕЛНА КЛАУЗА</strong>
        </p>
        <p>
          Обстоятелството, че отделна разпоредба на настоящите Общи условия е
          или може да бъде обявена за незаконосъобразна, недействителна или
          неприложима, не води до незаконосъобразност, недействителност и
          неприложимост на останалите разпоредби на Общите условия.
          Недействителната клауза ще бъде заместена от повелителните норми на
          закона или установената практика.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>XIII. ПРИЛОЖИМО ПРАВО</strong>
        </p>
        <p>
          По всички неуредени от настоящите Общи условия въпроси се прилагат
          разпоредбите на действащото законодателство на Република България.
          Евентуалните спорове, възникнали между Собственика и Потребителя ще се
          разрешат по взаимно съгласие или ако това е невъзможно, споровете ще
          бъдат решавани пред компетентния съд в гр. София.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>XIV. ПРОМЕНИ В ОБЩИТЕ УСЛОВИЯ</strong>
        </p>
        <p>
          Доставчикът може да промени, която и да е част от Условията за
          ползване, без да ви уведоми предварително при следните обстоятелства:
        </p>
        <p>
          а/ за отразяване на промените в законите и регулаторните изисквания,
          които се прилагат за уебсайта и услугите, функциите и програмите му,
          когато такива промени изискват да промени своите правила и условия по
          начин, който не ни позволява да се уведомят потребителите в разумен
          срок; и
        </p>
        <p>
          б/ за справяне с непредвидена и непосредствена опасност, свързана със
          защитата на уебсайта от измами, злонамерен софтуер, спам, пробиви на
          данни или други рискове за киберсигурността.
        </p>
        <p>
          При извършване на промени в Общите условия, Доставчикът ги довежда до
          знанието на Потребителите, чрез публикуването им на Уебсайта на
          Доставчика.
        </p>
        <p>&nbsp;</p>
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