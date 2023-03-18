import CardGame from "../components/CardGame";
import { GameController, MagicWand, Sword } from "@phosphor-icons/react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { gamesList } from "../config/games";
import ButtonMain from "../components/ButtonMain";
import { useForm } from "react-hook-form";
import ButtonPaginate from "../components/ButtonPaginate";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [searchValue, setSearchValue] = useState("");
  const [gameFound, setGameFound] = useState("");

  const [pageDown, setPageDown] = useState(0);
  const [pageUp, setPageUp] = useState(6);

  const listSearch = gamesList.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const ordemAlfa = (a, b) => {
    let nomeA = a.title.toLowerCase();
    let nomeB = b.title.toLowerCase();
    if (nomeA > nomeB) {
      return 1;
    }
    if (nomeA < nomeB) {
      return -1;
    }
    return 0;
  };

  const onSubmit = (data) => {
    if (data) {
      setSearchValue(data.search);
      setPageDown(0);
      setPageUp(6);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "ArrowRight") {
      alert("direita");
    }
  };

  return (
    <>
      <Head>
        <title>GameSphere</title>
        <meta name="description" content="Baixe Jogos Gratuitos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Container fluid className="hero-1 py-5">
          <Container className="py-5">
            <Row className="d-flex align-items-center g-2">
              <Col sm="12" lg="6">
                <div className="position-relative">
                  <img
                    draggable={false}
                    className="vector-play rotate-center"
                    src="/vector-play.svg"
                    alt="vetor"
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
              <Col sm="12" lg="6" className="position-relative">
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
            <Row className="d-flex align-items-center pb-5">
              <Col sm="12" lg="6" className="py-3">
                <h4>
                  <GameController size={32} weight="duotone" /> Encontre seu
                  jogo aqui:
                </h4>
              </Col>
              <Col sm="12" lg="6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex justify-content-between">
                    <input
                      className="input-main"
                      type="search"
                      placeholder="Faça sua busca..."
                      name="search"
                      {...register("search")}
                    />
                    <ButtonMain
                      type="submit"
                      title=" Search"
                      variant="ms-3"
                      icon={<Sword size={24} weight="duotone" />}
                    />
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
          <Container className="p-4">
            <Row className="g-4">
              {listSearch ? (
                listSearch
                  .sort(ordemAlfa)
                  .slice(pageDown, pageUp)
                  .map((item) => {
                    return (
                      <Col
                        key={item.id}
                        sm="12"
                        lg="6"
                        xl="4"
                        className="d-flex align-items-stretch justify-content-center"
                      >
                        <CardGame
                          img={item.thumbnail}
                          title={item.title}
                          description={item.short_description}
                          link1={item.game_url}
                          link2={item.freetogame_profile_url}
                          genero={item.genre}
                          plataforma={item.platform}
                          lancamento={item.release_date}
                        />
                      </Col>
                    );
                  })
              ) : (
                <div className="d-flex align-items-center justify-content-center py-5">
                  <p>Lista vazia...</p>
                </div>
              )}
              <Col sm="12">
                <div className="d-flex align-items-center justify-content-between">
                  <ButtonPaginate
                    side={true}
                    onClick={() => {
                      setPageUp(pageUp - 6);
                      setPageDown(pageDown - 6);
                    }}
                    variant={pageDown > 0 ? "" : "disabled"}
                  />
                  <ButtonPaginate
                    side={false}
                    onClick={() => {
                      setPageUp(pageUp + 6);
                      setPageDown(pageDown + 6);
                    }}
                    variant={pageUp < listSearch.length ? "" : "disabled"}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
}
