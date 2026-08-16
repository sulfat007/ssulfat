interface SectionLabelProps {
  children: string;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-terracotta" />
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-terracotta">
        {children}
      </p>
    </div>
  );
}
