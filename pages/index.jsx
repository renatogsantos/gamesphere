import CardGame from "../components/CardGame";
import { GameController } from "@phosphor-icons/react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [gamesList, setGamesList] = useState([]);

  const listSearch = gamesList.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": process.env.X_KEY,
        "X-RapidAPI-Host": process.env.X_HOST,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setGamesList(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

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
                  <h1>GAMESPHERE</h1>
                  <h2 className="text-end">
                    <GameController size={32} weight="duotone" /> Baixe Jogos
                    Gratuitos
                  </h2>
                  <small className="text-end">O jogo que você procura está aqui!</small>
                  <div className="input-main-box pt-5">
                    <input
                      className="input-main"
                      type="text"
                      placeholder="Faça sua busca..."
                      onChange={(e) => {
                        setSearchValue(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </Col>
              <Col sm="12" lg="6">
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
          <Container fluid>
            <Row className="d-flex align-items-stretch justify-content-center g-4">
              {listSearch.slice(0, 12).map((item) => {
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
              })}
            </Row>
          </Container>
        </Container>
        <ul></ul>
      </section>
    </>
  );
}