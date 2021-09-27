import { Container } from "react-bootstrap";

import { MainCard, MainTable, Curso, DAY, CursoData } from "./components";

import cursoDataList from "./data.json";

function createCurso(cursoData: CursoData) {

  return new Curso(cursoData);

}

const cursoList = cursoDataList.map(createCurso);

const cursoBlank = new Curso({

  day: 0,
  prof: "Nenhum",
  nome: "Não há aula hoje!",
  time: {},
  link: ""

})

function findCurso(day: number) {

  return cursoList.find((curso) => {

    return curso.day === DAY[day];

  })

}

function App() {

  const date = new Date();

  const today: number = date.getDay();

  const curso = findCurso(today) || cursoBlank;

  return (
    <>
      <main>
        <Container>
          <MainCard curso={curso}></MainCard>
          <MainTable cursoList={cursoList}></MainTable>
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