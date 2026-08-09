type ImageSlotProps = {
  label: string;
  className?: string;
  dark?: boolean;
  rounded?: string;
};

export default function ImageSlot({
  label,
  className = "",
  dark = false,
  rounded = "rounded-card",
}: ImageSlotProps) {
  return (
    <div
      role="img"
      aria-label="Photo placeholder"
      className={`img-slot ${dark ? "img-slot--dark" : ""} ${rounded} ${className}`}
    >
      <span className="img-slot__label">{label}</span>
    </div>
  );
}
