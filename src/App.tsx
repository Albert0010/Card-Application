import React, { useEffect, useReducer } from "react";
import "./App.css";
import { reducer } from "./reducer/reducer";
import Card, { TCard } from "./components/Card";
import { ACTIONS_ENUM } from "./reducer/actions";

export let initialState: TCard[] = [];
const storageData = JSON.parse(localStorage.getItem("cards")!);
initialState = storageData ? storageData : initialState;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(state));
  }, [state]);

  //randomizer
  let randomNumber = (state.length + 1) * 100;
  const randomNumberGenerator = (): number =>
    Math.floor(Math.random() * randomNumber);

  const handleAdd = (): void => {
    let randomNumber = randomNumberGenerator();
    const condition = state.some(({ number }) => number === randomNumber);

    if (!condition) {
      dispatch({ type: ACTIONS_ENUM.ADD, payload: randomNumber });
      return;
    }
    return handleAdd();
  };

  const handleDelete = (_id: string): void => {
    dispatch({ type: ACTIONS_ENUM.DELETE, payload: _id });
  };
  const handleSort = (): void => {
    dispatch({ type: ACTIONS_ENUM.SORT });
  };

  return (
    <div className="wrapper">
      <section className="container">

        <header>
          <button className="button" onClick={handleAdd}>
            add card
          </button>
          <button className="button" onClick={handleSort}>
            sort cards
          </button>
        </header>

        <main>
          <div className="card_wrapper">
            {state.map((card) => (
              <Card key={card._id} {...card} handleDelete={handleDelete} />
            ))}
          </div>
        </main>

        <footer>
            Footer
        </footer>
      </section>

      <aside>
        <p>
          Press the "add card" button to add the new Card. Use the "sort cards"
          button to sort the Cards by the increase. Press an X icon on the top
          right to delete them.
        </p>
      </aside>
    </div>
  );
}

export default App;
