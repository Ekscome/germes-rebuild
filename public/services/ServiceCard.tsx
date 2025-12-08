// src/components/ServiceCard.tsx
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  img: string;
}

export default function ServiceCard({ title, img }: ServiceCardProps) {
  return (
    <article className="bg-[var(--surface)] border border-default rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-[180px] w-full">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-[16px] font-semibold mb-1.5">{title}</h3>
        <p className="text-[13px] text-gray-600">
          Подробнее об услуге вы можете узнать у мастера или по телефону
          сервиса.
        </p>
      </div>
    </article>
  );
}
