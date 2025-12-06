import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F2F2F4] text-[var(--foreground)] mt-14 border-t border-gray-300">
      <div
        className="
          max-w-[1300px]
          mx-auto
          px-6
          py-7
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          text-sm
        "
      >
        {/* 1 — ЛОГО + ОПИСАНИЕ */}
        <div className="flex flex-col gap-2.5">
          <Image
            src="/logo.svg"
            alt="HermesTO logo"
            width={62}
            height={62}
            className="object-contain"
          />

          <p className="text-gray-600 leading-[1.3] max-w-[220px] text-xs">
            Гермес-Сервис — автосервис в Санкт-Петербурге. Профессиональный
            ремонт, обслуживание, кузовные работы и шиномонтаж.
          </p>
        </div>

        {/* 2 — НАВИГАЦИЯ */}
        <div>
          <h3 className="text-[15px] font-semibold mb-2.5">Навигация</h3>
          <ul className="flex flex-col gap-1 text-gray-700 text-[13px]">
            <li>
              <Link href="/" className="hover:opacity-60">
                Главная
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:opacity-60">
                Услуги
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:opacity-60">
                Контакты
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:opacity-60">
                О нас
              </Link>
            </li>
          </ul>
        </div>

        {/* 3 — КОНТАКТЫ */}
        <div>
          <h3 className="text-[15px] font-semibold mb-2.5">Контакты</h3>

          <p className="text-gray-700 mb-1 text-[13px]">Телефоны:</p>

          <div className="flex flex-col gap-0.5 text-[13px]">
            <a href="tel:+79633000650" className="hover:opacity-60">
              +7 (963) 300-06-50
            </a>

            <a href="tel:+79112186175" className="hover:opacity-60">
              +7 (911) 218-61-75
            </a>
          </div>

          <p className="text-gray-700 mt-3 mb-1 text-[13px]">Мы в соцсетях:</p>

          <div className="flex items-center gap-2.5">
            <a
              href="https://vk.com/club230725340"
              target="_blank"
              aria-label="Мы ВКонтакте"
            >
              <Image src="/icons/vk.svg" width={22} height={22} alt="VK" />
            </a>

            <a
              href="https://wa.me/79633000650?text=Обращение+из+Яндекс+Карт%0AЗдравствуйте!+Меня+заинтересовало+ваше+предложение"
              target="_blank"
              aria-label="Написать в WhatsApp"
            >
              <Image
                src="/icons/whatsapp.svg"
                width={22}
                height={22}
                alt="WhatsApp"
              />
            </a>
          </div>
        </div>

        {/* 4 — АДРЕС + ГРАФИК */}
        <div>
          <h3 className="text-[15px] font-semibold mb-2.5">Адрес</h3>

          <a
            href="https://yandex.ru/maps/?text=Малая%20Балканская%2059%201Б%20Санкт-Петербург"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-gray-600 hover:opacity-70 transition text-[13px] leading-[1.3]"
          >
            <Image
              src="/icons/map-pin.svg"
              width={18}
              height={18}
              alt="Адрес"
              className="mt-[2px] opacity-80"
            />

            <span>
              Малая Балканская ул., 59, корп. 1Б
              <br />
              Санкт-Петербург
            </span>
          </a>

          <p className="text-gray-700 mt-3 mb-1 text-[13px]">График работы:</p>

          <div className="text-gray-600 text-[13px] leading-[1.25]">
            Пн–Вс: 10:00–20:00
          </div>
        </div>
      </div>

      {/* НИЖНЯЯ ПОЛОСА */}
      <div className="border-t border-gray-300 py-2.5 text-center text-[11px] text-gray-600">
        © {new Date().getFullYear()} Гермес-Сервис. Все права защищены.
      </div>
    </footer>
  );
}
