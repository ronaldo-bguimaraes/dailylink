import "./App.css";

import { useEffect, useState } from 'react';

import { Alert, Card, Container, Table } from 'react-bootstrap';

import createClock from "./components/Clock";

const cursos = [];

cursos[1] = {
  nome: "Frameworks Front-end",
  prof: "Pedro Clarindo da Silva Neto",
  date: createClock(19, 0)
}

cursos[2] = {
  nome: "Metodologia de Pesquisa Científica",
  prof: "Inara Aparecida Ferrer Silva",
  date: createClock(19, 0)
}

cursos[3] = {
  nome: "Redes de Computadores",
  prof: "Reginaldo Hugo Szezupior dos Santos",
  link: "https://meet.google.com/ovx-bqmg-fmh",
  date: createClock(19, 00)
}

cursos[4] = {
  nome: "Programação Desktop",
  prof: "Alberto Sales e Silva",
  link: "https://meet.google.com/ped-thta-hyi",
  date: createClock(18, 45)
}

cursos[5] = {
  nome: "Língua Inglesa",
  prof: "Alan Tocantins Fernandes",
  link: "https://meet.google.com/xpx-ibfc-gch",
  date: createClock(19, 0)
}

const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function MakeRow({ curso, index }) {

  return (
    <tr>
      <th scope="row">
        <span>{dias[index]}</span>
      </th>
      <td>
        <a href={curso.link}>{curso.nome}</a>
      </td>
    </tr>
  )
}

function NotFound() {
  return (
    <Alert variant="danger" className="mt-2 mb-0 py-2">
      <strong>Link não disponível!</strong>
    </Alert>
  )
}

function Atrasado() {
  return (
    <Alert variant="warning" className="mt-2 mb-0 py-2">
      <strong>A aula já começou!</strong>
    </Alert>
  )
}

function Countdown({ curso }) {

  const [atrasado] = useState(curso.date.toSeconds() < createClock.now());

  const [time, setTime] = useState(!atrasado ? curso.date.toSeconds() - createClock.now() : 5);

  function effects() {

    function loop(interval) {

      if (time > 0) {

        setTime(!atrasado ? curso.date.toSeconds() - createClock.now() : time - 1);

      }

      else {

        // finaliza o contador
        clearInterval(interval);

        // redireciona para o link
        window.location.href = curso.link;
      }
    }

    const interval = setInterval(() => loop(interval), 1000);

    return () => clearInterval(interval);
  }

  useEffect(effects, [atrasado, curso.date, curso.link, time]);

  return (
    <span className="d-block">
      <h2>
        {createClock.fromSeconds(time).toString()}
      </h2>
      <a href={curso.link}>Não abriu? Clique aqui</a>
      {atrasado ? <Atrasado /> : false}
    </span>
  )
}

function App() {

  const date = new Date();

  const today = date.getDay();

  const curso = cursos[today];

  return (
    <>
      <main>
        <Container>
          <Card className="mt-3 border-0 shadow">
            <Card.Header className="bg-info text-light py-3">
              <Card.Title>
                <strong className="d-inline-block text-truncate w-100">{curso.nome}</strong>
              </Card.Title>
              <Card.Subtitle>
                <span className="d-inline-block text-truncate w-100">Prof: {curso.prof}</span>
              </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <span className="text-center">
                {curso.link ? <Countdown curso={curso}></Countdown> : <NotFound />}
              </span>
            </Card.Body>
          </Card>
          <Table striped responsive className="mt-3 h-100" variant="dark">
            <thead>
              <tr>
                <th scope="col">Dia</th>
                <th scope="col">Curso</th>
              </tr>
            </thead>
            <tbody>
              {cursos.map((curso, index) => <MakeRow curso={curso} index={index} key={index} />)}
            </tbody>
          </Table>
        </Container>
      </main>

      <footer className="footer mt-auto py-3 bg-light text-center">
        <Container>
          <span>Criado por <a href="https://www.instagram.com/ronaldo.bguimaraes/" target="_blank" rel="noreferrer">@ronaldo.bguimaraes</a></span>
        </Container>
      </footer>
    </>
  );
}

export default App;