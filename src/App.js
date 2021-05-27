import "./App.css";

import { useEffect, useState } from 'react';

import { Card, Container, Table } from 'react-bootstrap';

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
  date: createClock(13, 38)
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

function Row({ curso, index, active }) {

  return (
    <tr className={index === active ? "table-primary" : ""}>
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
    <div className="alert alert-danger mt-2">
      <strong>Link não disponível!</strong>
    </div>
  )
}

function Atrasado() {
  return (
    <div className="alert alert-warning mt-2">
      <strong>A aula já começou!</strong>
    </div>
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

        console.log(curso.link);

        // redireciona para o link
        // window.location.href = curso.link;
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
    <Container>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>
            <strong>{curso.nome}</strong>
          </Card.Title>
          <Card.Text>
            Prof: {curso.prof}
          </Card.Text>

          <span className="text-center">
            {curso.link ? <Countdown curso={curso}></Countdown> : <NotFound />}
          </span>

        </Card.Body>
      </Card>
      <Table striped responsive bordered className="mt-3" variant="light">
        <thead>
          <tr>
            <th scope="col">Dia</th>
            <th scope="col">Curso</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso, index) => <Row curso={curso} index={index} active={today} key={index} />)}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;