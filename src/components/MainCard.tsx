import { Card } from "react-bootstrap";

import { Countdown } from "./Countdown";

import { Curso } from "../Curso";

import { CardAlert } from "./CardAlert";

interface MainCardProps {

  curso: Curso;

}

export function MainCard({ curso }: MainCardProps) {
  return (
    <>
      <Card className="mt-3 border-0 shadow">
        <Card.Header className="text-light py-3 green">
          <Card.Title>
            <strong className="d-inline-block text-truncate w-100">
              {curso.nome || "Não há aula hoje!"}
            </strong>
          </Card.Title>
          <Card.Subtitle>
            <span className="d-inline-block text-truncate w-100">
              Prof: {curso.prof || "Nenhum"}
            </span>
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <span className="text-center">
            {curso.link ? <Countdown curso={curso}></Countdown> : <CardAlert variant="danger">Link não disponível!</CardAlert>}
          </span>
        </Card.Body>
      </Card>
    </>
  )
}