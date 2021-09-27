import { Curso } from "../Curso";

interface CursoRowProps {

  curso: Curso;

}

export function CursoRow({ curso }: CursoRowProps) {
  return (
    <>
      <tr>
        <th scope="row">
          <span>{curso.day}</span>
        </th>
        <td>
          {curso.link ? <a href={curso.link}>{curso.nome}</a> : <span>{curso.nome}</span>}
        </td>
        <td>
          {`${curso.clock.hoursToString()} ${curso.clock.minutesToString()}`}
        </td>
      </tr>
    </>
  )
}