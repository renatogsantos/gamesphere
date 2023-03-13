import CardGame from "../components/CardGame";
import { GameController } from "@phosphor-icons/react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Home({ games }) {
  const [searchValue, setSearchValue] = useState("");

  const listSearch = games.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log(games);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Container fluid className="hero-1">
          <Container>
            <Row className="d-flex align-items-center g-2">
              <Col sm="12" lg="6">
                <div className="position-relative">
                  <h1>GAMEFLIX</h1>
                  <h2 className="text-end">
                    <GameController size={32} weight="duotone" /> Baixe Jogos
                    Gratuitos
                  </h2>
                  <div className="input-main-box">
                    <input
                      className="input-main"
                      type="search"
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
          <Container>
            <Row className="d-flex align-items-stretch justify-content-center g-2">
              {listSearch.slice(0, 12).map((item) => {
                return (
                  <Col key={item.id} sm="12" md="6" lg="4">
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

export async function getServerSideProps() {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "X-RapidAPI-Key": "d373269286msh95a010d237c165dp10cfc9jsn5ab8cd674519",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const games = response.data;
    return { props: { games } };
  } catch (error) {
    console.error(error);
    return { props: { games: [] } };
  }
}
