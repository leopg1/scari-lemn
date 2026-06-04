type IconProps = { className?: string };

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5c0 8.5 6.5 15 15 15a2 2 0 0 0 2-2v-2.3a1 1 0 0 0-.76-.97l-3.4-.85a1 1 0 0 0-1 .36l-.9 1.1a12 12 0 0 1-5.1-5.1l1.1-.9a1 1 0 0 0 .36-1l-.85-3.4A1 1 0 0 0 8.3 3H6a2 2 0 0 0-2 2Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 21l1.6-4.3A8.5 8.5 0 1 1 7.7 19.6L3 21Z" />
      <path d="M9 8.5c0 4 2.5 6.5 6.5 6.5l.4-1.5c.1-.4-.1-.8-.5-.9l-1.3-.4a.7.7 0 0 0-.7.2l-.4.5a5.6 5.6 0 0 1-2-2l.5-.4a.7.7 0 0 0 .2-.7l-.4-1.3a.7.7 0 0 0-.9-.5L8.5 8Z" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronLeft({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12.5 9 17.5 20 6.5" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
