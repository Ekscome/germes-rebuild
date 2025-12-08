// src/components/SectionTitle.tsx

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`text-2xl md:text-3xl font-semibold text-gray-900 mb-6 ${className}`}
    >
      {children}
    </h2>
  );
}
