import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

export default function ButtonPaginate({ side, onClick, variant }) {
  return (
    <>
      {side && (
        <button
          type="button"
          onClick={onClick}
          className={`button-paginate ${variant}`}
        >
          <ArrowCircleLeft size={24} weight="duotone" /> Left
        </button>
      )}
      {!side && (
        <button
          type="button"
          onClick={onClick}
          className={`button-paginate ${variant}`}
        >
          Right <ArrowCircleRight size={24} weight="duotone" />
        </button>
      )}
    </>
  );
}
