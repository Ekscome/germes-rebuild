import Image from "next/image";

interface ServiceCardProps {
  title: string;
  img: string;
}

export default function ServiceCard({ title, img }: ServiceCardProps) {
  return (
    <div
      className="
      bg-gray-50 
      rounded-xl 
      overflow-hidden 
      shadow-md 
      hover:shadow-xl 
      transition 
      group
    "
    >
      <div className="relative w-full h-56">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
}
