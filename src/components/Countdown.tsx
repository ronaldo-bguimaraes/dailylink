import { useEffect, useState } from "react";

import { Clock } from "./Clock";

import { Curso } from "../Curso";

import { CardAlert } from "./CardAlert";

interface CountdownProps {

  curso: Curso;

}

export function Countdown({ curso }: CountdownProps) {

  const [atrasado] = useState(curso.clock.toSeconds() < Clock.now());

  const [time, setTime] = useState(!atrasado ? curso.clock.toSeconds() - Clock.now() : 5);

  useEffect(function () {

    function loop(interval: NodeJS.Timeout) {

      if (time > 0) {

        setTime(!atrasado ? curso.clock.toSeconds() - Clock.now() : time - 1);
      }

      else {

        // finaliza o contador
        clearInterval(interval);

        // redireciona para o link
        window.location.href = curso.link;
      }
    }

    const interval: NodeJS.Timeout = setInterval(() => loop(interval), 1000);

    return () => clearInterval(interval);

  }, [atrasado, curso.clock, curso.link, time]);

  return (
    <>
      <span className="d-block">
        <h2>
          {Clock.fromSeconds(time).toString()}
        </h2>
        <a href={curso.link}>Não abriu? Clique aqui</a>
        {atrasado ? <CardAlert variant="warning">A aula já começou!</CardAlert> : false}
      </span>
    </>
  )
}