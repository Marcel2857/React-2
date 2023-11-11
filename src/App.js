import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";

function App() {
  const [output, setOutput] = useState();
  function handleOnSubmit(event) {
    event.preventDefault();

    const value = event.target.amount.value;
    const currency = event.target.currency.value;
    const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const rate = data?.rates?.[0]?.mid;
        if (!rate) {
          setOutput("Wystąpił błąd");
        } else {
          const result = (value * rate).toFixed(2);
          setOutput(`${result} PLN`);
        }
      })
      .catch(() => {
        setOutput("Wystąpił błąd");
      });
  }

  return (
    <>
      <section class="main">
        <form onSubmit={handleOnSubmit}>
          <Input></Input>
          <Select></Select>
          <Button></Button>
        </form>
      </section>
      <h1 class="output">{output}</h1>
    </>
  );
}

export default App;
