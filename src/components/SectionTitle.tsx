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
      className={`
        text-3xl md:text-4xl font-bold text-center 
        text-gray-900 mb-12
        ${className}
      `}
    >
      {children}
    </h2>
  );
}
