import { Alert } from "react-bootstrap";

import { ReactNode } from "react";

// AlertProps.variant?: string | undefined

interface CardAlertProps {

  variant: string;

  children: ReactNode;

}

export function CardAlert({ variant, children }: CardAlertProps) {
  return (
    <Alert variant={variant} className="mt-2 mb-0 py-2">
      <strong>{children}</strong>
    </Alert>
  )
}