import Link from "next/link";

export default function ButtonSecondary({
  type,
  link,
  onClick,
  target,
  title,
  icon,
  variant,
}) {
  return (
    <>
      {link && (
        <Link
          className={`button-secondary ${variant}`}
          href={link}
          onClick={onClick}
          target={target}
        >
          {icon} {title}
        </Link>
      )}
      {type && (
        <button
          className={`button-secondary ${variant}`}
          type={type}
          onClick={onClick}
        >
          {icon} {title}
        </button>
      )}
    </>
  );
}
