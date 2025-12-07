// src/components/ContactCTA.tsx

export default function ContactCTA() {
  return (
    <section className="bg-[var(--surface-strong)] text-[var(--foreground)] py-10 md:py-12 mt-4 border-t border-[var(--border)]">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Текстовый блок */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Остались вопросы по ремонту или стоимости?
          </h2>
          <p className="text-sm md:text-[15px] text-[var(--foreground-muted)] max-w-[480px]">
            Позвоните нам или напишите в WhatsApp — подскажем по срокам,
            приблизительной стоимости и запишем на удобное время.
          </p>
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+79633000650"
            className="
              inline-flex items-center justify-center 
              px-6 py-3 rounded-lg 
              bg-[var(--accent)] text-black font-semibold text-sm 
              hover:bg-[var(--accent-dark)] transition
            "
          >
            Позвонить в сервис
          </a>

          <a
            href="https://wa.me/79633000650?text=Обращение+из+сайта+Гермес-Сервис"
            target="_blank"
            className="
              inline-flex items-center justify-center 
              px-6 py-3 rounded-lg 
              border border-[var(--border)] 
              text-sm hover:bg-[var(--surface-hover)] 
              transition
            "
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
