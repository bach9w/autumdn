"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const BasicFAQ = () => {
  return (
    <div className="bg-red-600/30 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h4 className="mb-4 text-center text-2xl font-semibold uppercase text-white">
          Подробно ръководство за внос на автомобил от САЩ или Канада до
          България
        </h4>
        <Question title="1. Избор на автомобил" defaultOpen>
          <p>
            Онлайн платформи: Най-често автомобилите се избират чрез платформи
            като Copart, IAAI или директно от дилъри. Проверка на автомобила:
            Използваме инструменти като Carfax или AutoCheck, за да проверите
            историята на автомобила (удар, пробег, сервизна история). Състояние:
            Може да закупите автомобил в движение, с минимални повреди или за
            части.
          </p>
        </Question>
        <Question title="2. Покупка на автомобила">
          <p>
            Купуване директно или чрез посредник: Ако работите с Myride , ние ще
            се погрижим за покупката, документите и транспортирането. При
            самостоятелна покупка, трябва да уредите плащането чрез банкова
            трансакция или други договорени методи. Транспорт до пристанище в
            САЩ/Канада: Ако автомобилът не е близо до основно пристанище, може
            да се наложи вътрешен транспорт.
          </p>
        </Question>
        <Question title="3. Транспорт до България">
          <p>
            Избор на контейнер или Ro-Ro транспорт: Контейнер: Автомобилът се
            транспортира в контейнер, който е по-безопасен, но по-скъп. Ro-Ro
            (Roll-on/Roll-off): Автомобилът се кара на борда на кораба, което е
            по-евтино, но с по-висок риск от повреди. Пристанища в Европа:
            Най-често се използват пристанища като Ротердам (Нидерландия),
            Бремен (Германия) или Пирея (Гърция). Оттам автомобилът се
            транспортира до България по суша. Срок за доставка: Обикновено 4-8
            седмици, в зависимост от пристанището на тръгване.
          </p>
        </Question>
        <Question title="4. Митнически процедури">
          <p>
            Митническо освобождаване: Автомобилът трябва да бъде деклариран на
            българската митница. Мита и такси: Мито: Обикновено 10% от
            стойността на автомобила + транспортните разходи. ДДС: 20% върху
            общата сума (стойност на автомобила + транспорт + мито). Документи:
            Фактура или договор за покупка. Документ за транспорт. Заглавие на
            автомобила (Title). Сертификат за произход, ако е приложим.
          </p>
        </Question>
        <Question title="5. Промени за съответствие с ЕС регулации">
          <p>
            Модификации: Автомобилите от САЩ/Канада често не отговарят на
            стандартите в ЕС. Промяна на фаровете (защото са проектирани за
            движение в дясна посока). Настройка на километража (от мили в
            километри). Допълнителни технически проверки за емисии.
          </p>
        </Question>
        <Question title="6. Регистрация в България">
          <p>
            Технически преглед: Автомобилът трябва да премине през първоначален
            технически преглед. Документи за регистрация: Документи за платени
            мита и такси. Документи за технически преглед. Оригинален номер на
            двигател. Регистрационен номер: Регистрацията се извършва в КАТ.
          </p>
        </Question>
        <Question title="7. Съвети за успешен внос">
          <p>
            Работете с професионални посредници, за да избегнете грешки.
            Проверете внимателно историята на автомобила. Разгледайте
            възможността за застраховка по време на транспорта. Планирайте
            допълнителни разходи за модификации и регистрация.
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-red-600 bg-clip-text text-left text-lg font-medium uppercase drop-shadow-lg"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(124 58 237)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-white"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default BasicFAQ;
