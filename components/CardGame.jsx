export default function CardGame({ img, title, description }) {
  return (
    <div className="card-game">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "200px",
          width: "100%",
        }}
      />
      <div className="p-3 w-100">
        <div className="d-flex align-items-center justify-content-between w-100">
          <h4>{title}</h4>
          <div className="card-game-tag">FREE</div>
        </div>
        <div className="divisor"></div>
        <p className="card-game-description">{description}</p>
      </div>
    </div>
  );
}
