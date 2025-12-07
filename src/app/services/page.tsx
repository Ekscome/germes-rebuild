// src/app/services/page.tsx

import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-[1300px] mx-auto px-6 pt-8 pb-14">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Услуги автосервиса
        </h1>
        <p className="text-sm text-gray-700 mb-6 max-w-[600px]">
          Здесь вы можете подробнее ознакомиться с основными услугами сервиса
          Гермес-Сервис. Для уточнения стоимости и сроков — свяжитесь с нами по
          телефону.
        </p>
      </div>

      <Services />
    </div>
  );
}
