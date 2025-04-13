import { useState } from "react";
import { CardInicial } from "./components/CardInicial";
import { CardFinal } from "./components/CardFinal";

export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0);
  const [submited, setSubmited] = useState(false);

  function handleSubmit() {
    if (notaAvaliacao !== 0) {
      setSubmited(true);
      return;
    }

    alert("Selecione uma nota antes...");
  }

  return submited === false ? (
    <CardInicial
      handleSubmit={handleSubmit}
      setNotaAvaliacao={setNotaAvaliacao}
    />
  ) : (
    <CardFinal notaAvaliacao={notaAvaliacao} />
  );
}
