import { Table } from "react-bootstrap";

import { Curso } from "../Curso";

import { CursoRow } from "./CursoRow";


interface MainTableProps {

  cursoList: Curso[];

}

export function MainTable({ cursoList }: MainTableProps) {
  return (
    <>
      <Table striped responsive className="mt-3 h-100" variant="dark">
        <thead>
          <tr>
            <th scope="col">Dia</th>
            <th scope="col">Curso</th>
            <th scope="col">Horário</th>
          </tr>
        </thead>
        <tbody>
          {cursoList.map((curso, key) => <CursoRow curso={curso} key={key}></CursoRow>)}
        </tbody>
      </Table>
    </>
  )
}