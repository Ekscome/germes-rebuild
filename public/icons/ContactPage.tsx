// src/app/contacts/page.tsx

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-16">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">Контакты</h1>

        <div className="grid gap-8 md:grid-cols-2 text-sm">
          <div className="space-y-3">
            <p>
              <span className="font-semibold">Адрес:</span>
              <br />
              Малая Балканская ул., 59, корп. 1Б, Санкт-Петербург
            </p>
            <p>
              <span className="font-semibold">Телефоны:</span>
              <br />
              +7 (963) 300-06-50
              <br />
              +7 (911) 218-61-75
            </p>
            <p>
              <span className="font-semibold">График работы:</span>
              <br />
              Пн–Вс: 10:00–20:00
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold">Написать нам:</p>
            <ul className="space-y-2">
              <li>
                VK:{" "}
                <a
                  href="https://vk.com/club230725340"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  vk.com/club230725340
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/79633000650?text=Обращение+из+сайта+Гермес-Сервис"
                  target="_blank"
                  className="text-green-600 hover:underline"
                >
                  написать в WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
