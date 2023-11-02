import { useState } from "react";
import GridHeader from "./GridHeader";

const Grid = () => {
  const [numColumns, setNumColumns] = useState(2);
  const [boxes, setBoxes] = useState([]);
const [newIndex, setNewIndex] = useState(1);
  const addBox = () => {
      setNewIndex((prev)=>prev+1)
    const newBox = { id: newIndex, index: newIndex };
    setBoxes([...boxes, newBox]);
  };

  const removeBox = (id) => {
    const updatedBoxes = boxes.filter((box) => box.id !== id);
    setBoxes(updatedBoxes);
  };

  const handleColumnChange = (e) => {
    const columns = parseInt(e.target.value, 10);
    setNumColumns(columns);
  };

    const resetGrid = () => {
    setNewIndex(1)
    setNumColumns(2);
    setBoxes([]);
  };

  return (
    <div className="w-full container">
      <div className="fixed top-0 left-0 w-full">
        <GridHeader
          numColumns={numColumns}
          resetGrid={resetGrid}
          addBox={addBox}
          handleColumnChange={handleColumnChange}
        />
      </div>
      <div className={"auto-cols-max grid gap-2 grid-cols-" + numColumns}>
        {boxes.map((box) => (
          <div className="w-40 bg-white flex justify-between p-4" key={box.id}>
            <span className="text-black">{box.index}</span>
            <span
              className="text-gray-600 cursor-pointer"
              onClick={() => removeBox(box.id)}
            >
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
