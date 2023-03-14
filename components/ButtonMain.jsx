import Link from "next/link";

export default function ButtonMain({
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
          className={`button-main ${variant}`}
          href={link}
          onClick={onClick}
          target={target}
        >
          {icon} {title}
        </Link>
      )}
      {type && (
        <button
          className={`button-main ${variant}`}
          type={type}
          onClick={onClick}
        >
          {icon} {title}
        </button>
      )}
    </>
  );
}
