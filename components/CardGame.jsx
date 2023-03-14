import { Col, Row } from "react-bootstrap";
import ButtonMain from "./ButtonMain";
import ButtonSecondary from "./ButtonSecondary";

export default function CardGame({ img, title, description, link1, link2, genero, plataforma, lancamento }) {
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
        <p className="card-game-description pb-3">{description}</p>
        <div className="d-flex align-items-center justify-content-between">
          <ButtonMain link={link1} title="Download" target="_blank" />
          <ButtonSecondary link={link2} title="Game Score" target="_blank" />
        </div>
        <Row className="mt-4">
          <Col className="d-flex flex-column align-items-center">
            <span className="f-12">Gênero</span>
            <span className="f-12">{genero}</span>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <span className="f-12">Plataforma</span>
            <span className="f-12">{plataforma}</span>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <span className="f-12">Lançamento</span>
            <span className="f-12">{lancamento}</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}
