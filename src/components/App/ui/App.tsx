import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../model/selectors/selectError/selectItems";
import { itemsActions } from "../model/slice/itemsSlice";
import { generateRandomColor } from "../../../helpers/helpers";
import { animated, useTransition } from "@react-spring/web";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const transitions = useTransition(items, {
    keys: (item) => item.id,
    from: {
      width: "0%",
      opacity: 0,
      transform: "translateX(-500%)",
    },
    enter: (item) => async (next) => {
      await next({
        width: "18%",
        transform: "translateX(0%)",
        opacity: 0.7,
      });
      await next({
        opacity: 1,
      });
    },
    leave: { transform: "translateX(500%)", opacity: 0 },
  });

  const handleAdd = () => {
    const currentItem = {
      id: `${Date.now()}`,
      bgColor: generateRandomColor(),
    };

    dispatch(itemsActions.addItem(currentItem));
  };

  const handleDelete = () => {
    dispatch(itemsActions.deleteItem());
  };

  return (
    <div className="App">
      <section>
        <button className="btn btnAdd" onClick={handleAdd}>
          ADD
        </button>
        <button className="btn btnDelete" onClick={handleDelete}>
          DELETE
        </button>
      </section>
      <section className="itemList">
        {transitions((style, item) => (
          <animated.div
            className="item"
            key={item.id}
            style={{ background: `rgb(${item.bgColor})`, ...style }}
          >
            {}
          </animated.div>
        ))}
      </section>
    </div>
  );
}

export default App;
