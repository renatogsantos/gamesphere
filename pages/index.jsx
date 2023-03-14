import CardGame from "../components/CardGame";
import { GameController } from "@phosphor-icons/react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { gamesList } from "../config/games";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  //const [gamesList, setGamesList] = useState([]);

  const listSearch = gamesList.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  //     headers: {
  //       "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
  //       "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setGamesList(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      <Head>
        <title>GameSphere</title>
        <meta name="description" content="Baixe Jogos Gratuitos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Container fluid className="hero-1">
          <Container>
            <Row className="d-flex align-items-center g-2">
              <Col sm="12" lg="6">
                <div className="position-relative">
                  <img
                    draggable={false}
                    className="vector-play"
                    src="/vector-play.svg"
                    alt=""
                  />
                  <h1>GAMESPHERE</h1>
                  <h2>
                    <GameController size={38} weight="duotone" /> Baixe Jogos
                    Gratuitos
                  </h2>
                  <p className="pt-4 f-12">
                    Bem-vindo ao GameSphere, o lugar perfeito para encontrar e
                    baixar jogos gratuitamente. Estamos animados em oferecer aos
                    nossos usuários uma ampla seleção de jogos em vários
                    gêneros, desde jogos de ação até jogos de simulação. Com uma
                    interface amigável e fácil de usar, estamos comprometidos em
                    fornecer a melhor experiência de usuário possível. Nossa
                    equipe está trabalhando duro para garantir que todos os
                    jogos em nosso site sejam seguros para download e estejam
                    disponíveis para você gratuitamente. Obrigado por visitar o
                    Gameflix e esperamos que você aproveite nossa seleção de
                    jogos gratuitos.
                  </p>
                </div>
              </Col>
              <Col sm="12" lg="6" className="d-none d-lg-flex">
                <div className="d-flex align-items-center justify-content-center w-100">
                  <img
                    draggable={false}
                    src="/fortnite.png"
                    width="100%"
                    alt="Game Fortnite"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section>
        <Container fluid className="py-5">
          <Container>
            <div className="input-main-box py-5">
              <input
                className="input-main"
                type="text"
                placeholder="Faça sua busca..."
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </div>
          </Container>
          <Row className="d-flex align-items-stretch justify-content-center g-4">
            {listSearch ? (
              listSearch.slice(0, 12).map((item) => {
                return (
                  <Col key={item.id} sm="12" md="6" lg="4" xl="3" xxl="2">
                    <CardGame
                      img={item.thumbnail}
                      title={item.title}
                      description={item.short_description}
                      link1={item.game_url}
                      link2={item.freetogame_profile_url}
                    />
                  </Col>
                );
              })
            ) : (
              <div className="d-flex align-items-center justify-content-center py-5">
                <p>Lista vazia...</p>
              </div>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}
