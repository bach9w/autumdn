

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
        Политика за поверителност
      </h1>

      <section
        id="pravila"
        className="text-wrap flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 text-white"
      >
        <p className="mt-2 w-full bg-black bg-opacity-50 p-2 text-center text-xl text-white">
          Правила
        </p>
        <p>
          <strong>
            ПОЛИТИКА ЗА ПОВЕРИТЕЛНОСТ на www.myride.bg
            <span>&nbsp;</span>
          </strong>
        </p>
        <p>
          Настоящият документ разкрива Политиката за поверителност и защита на
          личните данни, които се събират от потребителите на Сайта с адрес
          (URL)
          <strong>www.myride.bg</strong>
        </p>
        <p>
          Настоящата Политика за поверителност има за цел да Ви осведоми за това
          как собственикът на <span>&nbsp;</span> www.myride.bg третира Вашите
          лични данни като Администратор, а също и за това как бихте могли да
          контролирате своите предпочитания и настройки, във връзка с това
          третиране.
        </p>
        <p>
          Моля, запознайте се с настоящата Политика за поверителност и защита на
          лични данни внимателно преди да осъществите достъп до Сайта и неговите
          услуги. Ако не сте съгласни с някое от условията, следва да не
          посещавате Сайта и да не използвате по какъвто и да е начин услугите,
          които предлага.
        </p>
        <p>
          Настоящата Политика за поверителност представлява неразделна част от
          Общите условия за използване на Сайта www.myride.bg. Всички дефиниции
          и определения, дадени в Общите условия, са приложими и в настоящата
          Политика за поверителност.
        </p>
        <p>Настоящата Политика е в сила от 01.07.2024 г.</p>
        <p>&nbsp;</p>
        <p>
          <strong>АДМИНИСТРАТОР НА ЛИЧНИ ДАННИ</strong>
        </p>
        <p>
          <strong>&ldquo;Антъни 15&rdquo; ЕООД</strong> е Администратор на лични
          данни по смисъла на Регламент (ЕС) 2016/679 на Европейския парламент и
          на Съвета от 27 април 2016 година относно защитата на физическите лица
          във връзка с обработването на лични данни и относно свободното
          движение на такива данни и за отмяна на Директива 95/46/EО (наричан
          по-долу &bdquo;ОРЗД&ldquo;) и Закона за защита на личните данни
          (наричан по-долу &bdquo;ЗЗЛД&ldquo;).
        </p>
        <p>
          С оглед изпълняване на изискванията на приложимото законодателство за
          защита на личните данни дружеството, отговарящо за защитата на Вашите
          лични данни в качеството им на Администратор на данни е:
        </p>
        <p>
          1. Наименование на фирма:{" "}
          <strong>&ldquo;Антъни 15&rdquo; ЕООД; ЕИК: 205550021</strong>;
        </p>
        <p>
          2. Седалище и адрес за кореспонденция: гр.Благоевград, ж.к. Ален Мак,
          бл. 39 вх. Б;
        </p>
        <p>* служебен имейл за комуникация с клиенти: sales@myride.bg;</p>
        <p>* тел.: +359 87699 5555;</p>
        <p>&nbsp;</p>
        <p>3. Надзорни органи:</p>
        <p>
          <strong>(1) Комисия за защита на личните данни</strong>
          <br /> Адрес: София 1592, бул. &bdquo;Проф. Цветан Лазаров&rdquo;
          №&nbsp;2, <br /> тел.: (02) 940 20 46
          <br /> факс: (02) 940 36 40
          <br /> Email: kzld@government.bg, kzld@cpdp.bg
          <br /> Уеб сайт: www.cpdp.bg
          <br /> <br /> Администраторът събира и обработва всички лични данни в
          съответствие със законите за защита на личните данни, приложими в
          България и Европейския съюз.
        </p>
        <p>
          <strong>ПРИНЦИПИ ПРИ ОБРАБОТВАНЕ НА ЛИЧНИ ДАННИ</strong>
        </p>
        <p>
          При обработването на лични данни Администраторът спазва следните
          принципи:
        </p>
        <p>
          1) събира лични данни само при наличие на правно основание, обработва
          ги добросъвестно и по прозрачен начин по отношение на субекта на
          данните -{" "}
          <strong>
            принцип на законосъобразност, добросъвестност и прозрачност;
          </strong>
        </p>
        <p>
          2) събира лични данни за конкретни, изрично указани и легитимни цели и
          не обработва тези лични данни по начин, който е несъвместим с
          първоначалните цели -{" "}
          <strong>принцип на ограничение на целите;</strong>
        </p>
        <p>
          3) обработва само такъв обем и вид лични данни, свързани с и
          ограничени до необходимото във връзка с целите, за които се обработват
          - <strong>принцип на свеждане на данните до минимум;</strong>
        </p>
        <p>
          4) поддържа личните данни точни и в актуален вид -{" "}
          <strong>принцип на точност;</strong>
        </p>
        <p>
          5) съхранява личните данни във форма, която позволява идентифицирането
          на субекта на данните за период, не по-дълъг от необходимото за
          целите, за които се обработват личните данни -{" "}
          <strong>принцип на ограничение на съхранението;</strong>
        </p>
        <p>
          6) спазва{" "}
          <strong>
            принципите за защита на данните на етапа на проектирането и защита
          </strong>{" "}
          на данните по подразбиране като взема предвид достиженията на
          техническия прогрес, разходите за прилагане и естеството, обхвата,
          контекста и целите на обработването, както и породените от
          обработването рискове с различна вероятност и тежест за правата и
          свободите на физическите лица, и въвежда подходящи мерки за защита на
          личните данни и постигане на съответствие с Регламент (ЕС) 2016/679.{" "}
        </p>
        <p>
          7)гарантира подходящо ниво на сигурност на личните данни, включително
          защита срещу неразрешено или незаконосъобразно обработване и срещу
          случайна загуба, унищожаване или повреждане, като прилага подходящи
          технически или организационни мерки -{" "}
          <strong>принцип на цялостност и поверителност.</strong>
        </p>
        <p>
          <strong>ОСНОВАНИЕ ЗА СЪБИРАНЕ НА ЛИЧНИ ДАННИ</strong>
        </p>
        <p>
          Администраторът събира и обработва Вашите лични данни, въз основа на
          следните основания:
        </p>
        <p>
          &bull; Изрично получено съгласие от Вас като Потребител - на основание
          чл. 6, ал. 1, б. &bdquo;а&ldquo; от GDPR. Полученото съгласие за
          обработване на лични данни е доброволно и се предоставя за всеки
          конкретен случай. Предоставеното от Вас съгласие за обработване на
          лични данни може да бъде оттеглено по всяко време посредством
          подаването на Формуляр за оттегляне на съгласие до Администратора.
          Оттегленото съгласие има действие занапред, като същото не се отразява
          върху законосъобразността на обработването на предоставените от Вас
          лични данни преди подаването на Формуляра за оттегляне на съгласие;
        </p>
        <p>
          Дocтaвчиĸът oбpaбoтвa личнитe дaнни нa &Pi;oтребителите нa ocнoвaниe
          чл. 6, aл. 1, б. &bdquo;б&ldquo; oт GDРR &ndash; oбpaбoтвaнeтo e
          нeoбxoдимo зa изпълнeниe нa дoгoвop с вас; С използването на Услугите
          вие сте сключили договор с нас чрез Условията за ползване на услугата
          и ние ще обработваме определени лични данни, за да изпълним
          задълженията си съгласно този договор;
        </p>
        <p>
          &bull; Легитимни интереси. Доставчикът може да обработва лични данни
          за неговите законни интереси, включително спазване на всеки приложим
          закон, правило или наредба, разследване или средство за защита;
          прилагане на Общите условия; защита на потребителите или на други
          права, собственост и безопасност; и откриване и разрешаване на
          всякакви измами или проблеми със сигурността;
        </p>
        <p>
          <strong>КАКВИ ДАННИ СЪБИРАМЕ НИЕ ОТ НАШИТЕ ПОТРЕБИТЕЛИ</strong>
        </p>
        <p>
          Преди да осъществите достъп до услугите на Сайта, Вие следва да
          изразите своето изричното съгласие да обработваме Вашите лични данни
          съгласно настоящата Политика. Ние събираме лична информация, която
          доброволно ни предоставяте, когато посещавате сайта.
        </p>
        <p>
          1. Администраторът не събира и не съхранява{" "}
          <strong>&bdquo;чувствителни&ldquo;</strong> категории лични данни като
          например политически убеждения, етнически произход, сексуална
          ориентация, данни за здравословното състояние на субекта, религиозни
          или философски убеждения и др.
        </p>
        <p>
          <strong>
            2. Лични данни, събирани от субекта на данни, когато лицата се
            свързват с Администратора, чрез контактна форма на сайта.
          </strong>
        </p>
        <p>
          Когато лицето изпрати съобщение до Администратора, използвайки
          контактната форма, Администраторът събира и съхранява името и адреса
          на електронната поща на лицето, както и информацията, предоставена в
          съобщението.
        </p>
        <p>
          <strong>Цел за която се събират данните</strong>: Администраторът
          събира и съхранява посочената информация за целите на комуникацията с
          физическото лице.
        </p>
        <p>
          <strong>3. Лични данни събирани автоматично.</strong>
        </p>
        <p>В нашия уебсайт събираме данни за всички посетители, а именно:</p>
        <p>&bull; Идентификатор на браузъра;</p>
        <p>
          &bull; История на посетените страници, с цел установяване на
          предпочитанията ви към определени типове съдържание;
        </p>
        <p>&bull; История на направените от вас търсения в нашите страници;</p>
        <p>
          &bull; Данни за устройството. Ние събираме данни за устройства, като
          например информация за вашия компютър, телефон, таблет или друго
          устройство, което използвате за достъп до уебсайта. В зависимост от
          използваното устройство, тези данни за разделяне могат да включват
          информация като вашия IP адрес или прокси сървър, идентификационни
          номера на устройство и приложение, местоположение, тип браузър,
          хардуерен модел, предоставена интернет услуга и/или мобилен оператор,
          операционна система и информация за конфигурацията на системата.
        </p>
        <p>
          <strong>Цел за която се събират данните: </strong>Подобряване на
          сигурността на предоставените от Доставчика услуги и предотвратяване
          на злоупотреби с използването на потребителския акаунт от трети лица.
        </p>
        <p>
          <strong>
            4. Лични данни събирани от потребители, когато искат да се
            възползват от конкретна оферта през платформата:
          </strong>
        </p>
        <p>&bull; три имена;</p>
        <p>&bull; имейл;</p>
        <p>&bull; телефон.</p>
        <p>
          <strong>Цел за която се събират данните: </strong>за статистически
          цели и за осъществяване на комуникация с Потребителя.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>КАК ПОЛУЧАВАМЕ ВАШИТЕ ЛИЧНИ ДАННИ</strong>
        </p>
        <p>Ние събираме вашите лични данни от следните категории източници:</p>
        <p>
          <strong>Директно от вас</strong>: Когато ни ги предоставите директно и
          доброволно;
        </p>
        <p>
          <strong>Автоматично или индиректно от вас</strong>: Например чрез и в
          резултат на вашето използване и достъп до Услугите. Също така събираме
          IP адреси и типове браузъри от устройствата, които използвате.
        </p>

        <p>
          <strong>ЦЕЛИ ЗА ОБРАБОТВАНЕ НА ЛИЧНИ ДАННИ</strong>
        </p>
        <p>
          Администраторът събира и обработва личните данни на физическите лица,
          които са предоставени директно от тях или са събрани автоматично и за
          следните цели:
        </p>
        <p>&bull; За нормалното функциониране на всички услуги в Сайта;</p>
        <p>
          &bull; За осъществяване на контакт с лицето; за общуване с вас чрез
          имейл и текстово съобщение относно Услугите, потвърждаване на вашата
          самоличност, отговаряне на запитвания за поддръжка или споделяне на
          информация за Услугите;
        </p>
        <p>&bull; За предоставяне на услуги, които се предлагат на Сайта;</p>
        <p>
          За подобряване ефективността и функционалността на Сайта; за
          отстраняване на грешки за идентифициране и такива, които нарушават
          съществуващата предвидена функционалност;
        </p>
        <p>За статистически цели и анализи за подобряване на услугите ни;</p>
        <p>
          За защита на информационната сигурност; за откриване на инциденти
          свързани със сигурността, защита срещу злонамерена, измамна или
          незаконна дейност и преследване на отговорните за тази дейност.
        </p>
        <p>
          За да се уверим, че Потребителите ни са реални и да предотвратим
          измами;
        </p>
        <p>
          &bull; За разработване, подобряване, опериране, предоставяне,
          прогнозиране или изпълнение, включително поддържане или обслужване на
          акаунти, подобряване на Услугите и вашето преживяване с тях,
          предоставяне на обслужване на клиенти, обработка или изпълнение на
          транзакции (ако е приложимо), потвърждаване на вашата самоличност и
          обработка на плащания.
        </p>
        <p>
          &bull; За предприемане на дейности за проверка или поддържане на
          качеството или безопасността на Услугите и за подобряване, надграждане
          или подобряване на Услугите, контролирани от нас;{" "}
        </p>
        <p>
          Няма да използваме събраните от нас лични данни за съществено
          различни, несвързани или несъвместими цели, без да ви уведомим и да
          получим вашето съгласие.
        </p>
        <p>
          При промяна в целите ние ще Ви информираме и ще поискаме изричното Ви
          съгласие за обработване на личните Ви данни в съответствие с новите
          цели.
        </p>
        <p>
          <strong>ВАШИЯТ ИЗБОР</strong>
        </p>
        <p>
          Имате право на избор, относно определена информация, която събираме за
          вас, как да комуникираме с вас и как да обработваме определени лични
          данни. Когато бъдете помолени да предоставите информация, можете да
          откажете да го направите, но ако решите да не предоставяте информация,
          която е необходима за предоставяне на някои от нашите Услуги, може да
          не можете да използвате тези Услуги. Освен това е възможно да
          промените настройките на браузъра си, за да блокирате автоматичното
          събиране на определена информация.
        </p>
        <p>
          а. <strong>Отказ от комуникация.</strong> Можете да се откажете от
          получаването на имейл съобщения от нас по всяко време, като се
          свържете с нас, както е посочено в края на тази Политика за
          поверителност. Обърнете внимание, че не можете да се откажете от
          определени автоматизирани известия.
        </p>
        <p>
          b. <strong>Информация за местоположение</strong>. Ако искате да
          ограничите или предотвратите възможността ни да получаваме информация
          за местоположението ви, можете да откажете или премахнете разрешението
          за достъп до информация за местоположение или да деактивирате услугите
          за местоположение на вашето устройство. Моля, вижте инструкциите на
          производителя на вашето устройство или операционната система за
          инструкции как да направите това.
        </p>
        <p>
          c. <strong>Бисквитки и уеб проследяване</strong>. Моля, запознайте се
          с политиката ни за бисквитки за повече информация как да контролирате
          и/или да се откажете от бисквитки.
        </p>
        <p>
          <strong>КОЛКО ВРЕМЕ СЪХРАНЯВАМЕ ИНФОРМАЦИЯТА</strong>
        </p>
        <p>
          Ние няма да съхраняваме Вашите данни за период по-дълъг от необходимия
          за постигане на целите, за които ги обработваме. Ако отпадне
          основанието, на което съхраняваме Ваши лични данни (например, ако
          престанем да имаме основателен интерес от съхранение на личните Ви
          данни, ако законоопределеният срок за съхраняването на личните Ви
          данни е изтекъл или ако сте оттеглили съгласието си да съхраняваме
          Ваши лични данни), ние ще ги изтрием или унищожим по сигурен начин.
          Дружеството съхранява Вашите лични данни, събрани чрез Сайта, за срок,
          не по-дълъг от необходимото и/или дължимото съгласно изискванията на
          приложимото право.
        </p>
        <p>
          Прилагаме следните срокове за съхраняване на различните типове лични
          данни според тяхната цел, а именно:
        </p>
        <ol>
          <li>
            Относно лични данни на лицата, които са направили запитване, чрез
            контактна форма на Сайта: до 12 месеца от изпращане на запитването.
          </li>
          <li>
            Относно лични данни на лицата, които са направили запитване, чрез
            телефонно обаждане: до 1 месец след проведения разговор.
          </li>
        </ol>
        <p>
          3. Когато Потребителят е пожелал да се възползва от определена оферта
          &ndash; до 5 години от датата на заявката.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>КЪДЕ СЪХРАНЯВАМЕ ВАШИТЕ ЛИЧНИ ДАННИ</strong>
        </p>
        <p>
          Вашите лични данни, които събираме, се съхраняват на територията на
          Европейското икономическо пространство.
        </p>
        <p>
          Ние съхраняваме личните Ви данни за период не по-дълъг от необходимия
          за постигане на гореописаните цели, или до преустановяване на услугите
          и/или на Сайта. Събраните чрез Сайта Ваши лични данни ще бъдат
          събирани, обработвани, съхранявани и унищожавани в съответствие с
          приложимото българско и европейско законодателство.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>МЕРКИ ЗА СИГУРНОСТ</strong>
        </p>
        <p>
          Администраторът е предприел широк кръг от технически и организационни
          мерки за защита на Вашите лични данни срещу загуба или други форми на
          незаконна обработка. Всички наши служители са запознати с нашата
          политика за сигурност, предвидени в Закона за защита на личните данни.
          Личната информация на нашите Потребители е достъпна само за ограничен
          брой квалифицирани служители. Ние редовно проверяваме системите и
          процесите си за сигурност.
        </p>
        <p>
          Въпреки че предприемаме разумни мерки за поддържане на защитен сайт,
          електронните комуникации и бази данни са обект на грешки, подправяне и
          пробиви и не можем да гарантираме, че подобни събития няма да се
          случат и няма да носим отговорност пред посетители за всякакви подобни
          събития.
        </p>
        <p>
          В случай, че желаете да получите подробна информация, относно
          техническите и организационните мерки, моля не се колебайте да се
          свържете с нас.
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>
          <strong>ЛИЧНИ ДАННИ НА ТРЕТИ ЛИЦА</strong>
        </p>
        <p>
          Ние обработваме и използваме само данни, които Вие сте ни предоставили
          доброволно, и разчитаме на това, че тези данни се притежават и
          предоставят от Вас законосъобразно.
        </p>
        <p>
          Това означава, че всеки потребител носи отговорност да не предоставя
          на Администратора данни на трети лица в нарушение на техните права за
          защита на личните данни.
        </p>
        <p>
          Ето защо, всяко лице носи неограничена лична отговорност, ако ни
          предостави данни на трето лице без негово знание или без да получи
          съгласието му в съответствие с изискванията на приложимото
          законодателство за защита на личните данни, независимо от вида на
          данните или причините, за които се предоставят: имена, адрес на
          електронна поща, и други.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>МАЛОЛЕТНИ И НЕПЪЛНОЛЕТНИ ЛИЦА</strong>
        </p>
        <p>
          Ние не желаем да събираме или обработваме данни на малолетни или
          непълнолетни лица, на възраст под 18 години. Ако получим информация,
          че сме събрали лични данни от/на лице под 18-годишна възраст, ние
          незабавно ще ги изтрием, освен ако не сме законово задължени да
          съхраняваме тези данни.
        </p>
        <p>
          <br /> Моля, свържете се с нас, ако смятате, че погрешно или
          несъзнателно сме събрали информация от/на лице на възраст под 18
          години.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>НА КОГО СПОДЕЛЯМЕ И РАЗКРИВАМЕ ВАШИТЕ ЛИЧНИ ДАННИ</strong>
        </p>
        <p>
          Понякога записваме част от информацията на наши сървъри или я
          изпращаме на трети страни. Това се налага, за да можем да осигурим
          най-доброто Ви преживяване при използване на нашите услуги, а понякога
          - и изобщо, за да можем да осигурим наличност и достъпност на
          използваната от Вас услуга.
        </p>
        <p>
          Вашите лични данни няма да бъдат прехвърляни на трети страни, освен
          ако:
        </p>
        <ul>
          <li>
            ни предоставите своето изричното, информирано и свободно дадено
            съгласие;
          </li>
          <li>
            въпросните трети страни ни предоставят поддръжка по силата на
            договор с цел предоставянето на нашите продукти или услуги;
          </li>
          <li>
            това се изисква по закон или по силата на властнически акт на
            публичен орган;
          </li>
          <li>
            това се налага във връзка с продажба на бизнес, на нашата компания
            или нейни активи, които са обект на конфиденциалност.
          </li>
        </ul>
        <p>
          Нашите служители и партньори са надлежно информирани, относно
          значението на тяхното задължение за спазване на конфиденциалност и
          носят отговорност за изпълнението на това задължение.
        </p>
        <p>
          За всякакви други цели, които не са изрично упоменати в настоящата
          Политика, ние ще поискаме Вашето изрично съгласие, като ще
          идентифицираме своите партньори, както и целите за прехвърлянето и
          споделянето на данни.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>АНАЛИЗ НА УЕБ ПРОСТРАНСТВОТО</strong>
        </p>
        <p>
          Нуждаем се от статистическа информация за използването на нашата
          уеб-страница, за да я направим по-достъпна, да извършваме измервания
          на обхвата и да правим пазарни проучвания.
        </p>
        <p>
          За тази цел използваме инструментите за уеб анализ, описани в този
          раздел.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>Google Analytics</strong> се предлага от GoogleInc., 1600
          AmphitheatreParkway, MountainView, CA 94043, USA ("Google"). Ползваме
          GoogleAnalytics с предлаганата от Google допълнителна функция за
          анонимизиране на IP адресите. Google съкращава IP адреса още в рамките
          на ЕС и само в изключителни случаи в САЩ, като и в двата случая
          записва само съкратени IP адреси.
        </p>
        <p>
          Нашият уебсайт използва услугите, предоставени от Google Analytics, за
          да анализираме и редовно да подобряваме използването на нашия уебсайт.
          Анализа на вашата потребителска активност в сайта се осъществява с
          помощта на &bdquo;бисквитки&rdquo;, които се съхраняват на вашия
          компютър, генерират информация за потребителското ви поведение и я
          предават към Google.
        </p>
        <p>
          При нормални обстоятелства, съкратена версия на вашия IP адрес се
          изпраща до сървърите на Google, но в изключителни случаи пълния IP
          адрес също може да бъде изпратен. Google използва тази информация от
          наше име, за да създаде отчет относно дейността на потребителя в нашия
          уебсайт. IP адреса, идентифициран от Google Analytics, не се комбинира
          с други данни на Google.
        </p>
        <p>
          Ако активирате анонимния режим на този уебсайт, вашият IP адрес ще
          бъде пресечен в държавите-членки на Европейския съюз или в други
          държави, подписали споразумението за Европейското икономическо
          пространство. В изключителни случаи пълният IP адрес може да бъде
          прехвърлен на сървър на Google в САЩ и там пресечен.
        </p>
        <p>
          Google използва тази информация от името на оператора на този уебсайт,
          за да анализира използването ви на уебсайта, да състави отчети за
          дейностите на уебсайта и за да предостави други услуги за оператора на
          уебсайта, във връзка с използването на уебсайта и Интернет.
        </p>
        <p>
          Можете да откажете използването на бисквитки, като изберете
          подходящите настройки на вашия браузър, но имайте предвид, че ако
          направите това, може да не можете да използвате пълната функционалност
          на този уебсайт
        </p>
        <p>Условия за ползване на потребителите:</p>
        <p>
          <a href="http://www.google.com/analytics/terms/de.html">
            http://www.google.com/analytics/terms/de.html
          </a>
          ,
        </p>
        <p>Декларацията за поверителност на данните:</p>
        <p>
          <a href="https://policies.google.com/privacy?hl=bg">
            https://policies.google.com/privacy?hl=bg
          </a>
        </p>
        <p>
          <strong>Facebook пиксел </strong>за създаване на персонализирани
          аудитории.
        </p>
        <p>
          Ако потребител кликне върху реклама, поставена от нас, която се
          възпроизвежда във Facebook, URL адресът на нашата свързана страница ще
          бъде добавен от Facebook Pixel. Ако нашият сайт позволява споделяне на
          данни с Facebook чрез пиксели, този URL параметър се записва в
          браузъра на потребителя чрез бисквитка, която нашият свързан сайт
          задава сам. След това тази бисквитка се чете от Facebook Pixel и
          позволява данните да бъдат препратени към Facebook.
        </p>
        <p>
          Съответно ние използваме Facebook пиксела само за показване на
          рекламите във Facebook, поставени от нас на потребители на Facebook,
          които също са показали интерес към нашата онлайн оферта или, които
          имат определени характеристики (например интереси към определени теми
          или продукти, които се основават на посетените уебсайтове) , които
          предаваме на Facebook (т.нар. &bdquo;Custom Audiences&ldquo;).
          Събраните данни са анонимни за нас, така че не ни позволяват да правим
          никакви заключения относно самоличността на потребителя. Въпреки това,
          данните се съхраняват и обработват от Facebook, така че да е възможна
          връзка със съответния потребителски профил и Facebook може да използва
          данните за свои собствени рекламни цели в съответствие с указанията за
          използване на данни на Facebook (https://www.facebook.com
          /относно/поверителност/). Данните могат да позволят на Facebook и
          неговите партньори да поставят реклами във и извън Facebook.
        </p>
        <p>
          Обработката на данни, свързана с използването на пиксела на Facebook,
          се извършва въз основа на нашия предимно легитимен интерес от
          оценката, оптимизацията и икономическото функциониране на нашата
          онлайн оферта, както и нашите рекламни мерки в съответствие с член 6
          (1) GDPR.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>ПРАВА НА СУБЕКТИТЕ НА ДАННИ СПОРЕД GDPR</strong>
        </p>
        <p>
          <strong>Право на достъп до личните Ви данни</strong>. Вие имате право
          да изискате и получите от Администратора потвърждение дали се
          обработват лични данни, свързани с Вас, като изпратите искане в
          свободен текст по имейл.
        </p>
        <p>
          <strong>Право на поправка на лични данни:</strong> ако откриете, че
          личните данни, които обработваме за Вас, са неточни, имате право да ни
          накарате да коригираме тези лични данни. Вие можете по всяко време да
          коригирате или да попълните неточните или непълни лични данни,
          свързани с Вас, с отправяне на искане до Администратора по имейл в
          свободен текст.
        </p>
        <p>
          <strong>
            Право на изтриване на лични данни (правото да &bdquo;бъдете
            забравени&ldquo;)
          </strong>
        </p>
        <p>
          Вие имате правото да поискате от Администратора изтриване на част или
          всички свързани с Вас лични данни, а Администраторът има задължението
          да ги изтрие без ненужно забавяне, когато е налице някое от посочените
          по-долу основания:
        </p>
        <p>
          личните данни повече не са необходими за целите, за които са били
          събрани или обработвани по друг начин;
        </p>
        <p>
          &bull; Вие оттеглите своето съгласие, върху което се основава
          обработването на данните и няма друго правно основание за
          обработването;
        </p>
        <p>
          &bull; Вие възразите срещу обработването на свързаните с Вас лични
          данни и няма законни основания за обработването, които да имат
          преимущество;
        </p>
        <p>&bull;личните данни са били обработвани незаконосъобразно;</p>
        <p>
          &bull; личните данни трябва да бъдат изтрити с цел спазването на
          правно задължение по правото на ЕС или правото на държава членка,
          което се прилага спрямо Администратора;
        </p>
        <p>
          Администраторът не е длъжен да изтрие личните данни, ако ги съхранява
          и обработва:
        </p>
        <p>
          &bull; за упражняване на правото на свобода на изразяването и правото
          на информация;
        </p>
        <p>
          за спазване на правно задължение, което изисква обработване,
          предвидено в правото на ЕС или правото на държавата членка, което се
          прилага спрямо Администратора или за изпълнението на задача от
          обществен интерес или при упражняването на официални правомощия, които
          са му предоставени;
        </p>
        <p>
          по причини от обществен интерес в областта на общественото здраве;
        </p>
        <p>
          за целите на архивирането в обществен интерес, за научни или
          исторически изследвания или за статистически цели;
        </p>
        <p>
          за установяването, упражняването или защитата на правни претенции.
        </p>
        <p>
          За да упражните правото си да бъдете забравен, е необходимо да
          изпратите по имейл искане за изтриване на личните Ви данни, които
          Администраторът обработва, чрез искане в свободен текст.
        </p>
        <p>
          <strong>Право на ограничаване на обработването</strong>: при
          определени обстоятелства, като например, ако се съмнявате в точността
          на личните Ви данни или сте възразили на легитимната ни цел за
          обработка на личните Ви данни, имате право да поискате да ограничим
          обработката на Вашите лични данни, докато не бъде намерено решение.
          Вие имате право да изискате от Администратора да ограничи
          обработването на свързаните с Вас данни, като ни изпратите искане в
          свободен текст по имейл, когато:
        </p>
        <p>
          &bull; оспорите точността на личните данни, за срок, който позволява
          на Администратора да провери точността на личните данни;
        </p>
        <p>
          обработването е неправомерно, но Вие не желаете личните данни да бъдат
          изтрити, а само използването им да бъде ограничено;
        </p>
        <p>
          Администраторът не се нуждае повече от личните данни за целите на
          обработването, но Вие ги изисквате за установяването, упражняването
          или защитата на свои правни претенции;
        </p>
        <p>
          Възразили сте срещу обработването в очакване на проверка дали
          законните основания на Администратора имат преимущество пред Вашите
          интереси.
        </p>
        <p>
          <strong>Право на преносимост на данни</strong>. Ако сте дали съгласие
          за обработване на Вашите лични данни или обработването е необходимо за
          изпълнението на договора с Администратора, или ако данните Ви се
          обработват по автоматизиран начин, Вие можете:
        </p>
        <p>
          да поискате от Администратора да Ви предостави Вашите лични данни в
          четим формат и да ги прехвърлите към друг Администратор;
        </p>
        <p>
          да поискате от Администратора пряко да прехвърли Вашите лични данни
          към посочен от Вас администратор, когато това е технически
          осъществимо.
        </p>
        <p>
          <strong>Право на подаване на жалба в контролен орган</strong>: имате
          право да подадете жалба по отношение на обработката на Вашите лични
          данни от нас в съответния контролен орган.
        </p>
        <p>
          Субектът на данни има{" "}
          <strong>
            право и да не бъде обект на решение, основаващо се единствено на
            автоматизирано обработване
          </strong>
          , включващо профилиране, което поражда правни последствия за субекта
          на данните или по подобен начин го засяга в значителна степен;
        </p>
        <p>
          <strong>Право на защита по съдебен или административен ред</strong>, в
          случай, че правата на субекта на данни са били нарушени.
        </p>
        <p>
          Можете да упражните всички права като се свържете с нас чрез имейл:
          <strong> sales@myride.bg</strong>
        </p>
        <p>
          Ние ще се свържем с Вас и ще Ви запознаем подробно с процедурата за
          упражняване на Вашите права.
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
