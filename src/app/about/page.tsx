// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-16">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">О сервисе</h1>
        <p className="text-sm text-gray-700 max-w-[700px] space-y-3">
          <span>
            Гермес-Сервис — это команда мастеров с опытом работы в кузовном
            ремонте, покраске и обслуживании автомобилей.
          </span>
          <br />
          <span>
            Мы делаем ставку на аккуратность, честный подход и понятную
            коммуникацию с клиентами: объясняем, что будем делать, из чего
            складывается смета и какие есть варианты по запчастям.
          </span>
        </p>
      </div>
    </div>
  );
}
