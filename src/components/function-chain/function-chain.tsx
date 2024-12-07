import React, { useState } from "react";
import FunctionCard from "../function-card/function-card";

const FunctionChain = () => {
  const [variableX, setVariableX] = useState<number | string>(0);
  const [calculatedResults, setCalculatedResults] = useState<{
    [key: string]: number;
  }>({
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
  });

  const handleXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVariableX(Number(e.target.value));
  };

  const updateResults = (id: string, result: number) => {
    setCalculatedResults((prev) => ({ ...prev, [id]: result }));
  };

  return (
    <div className="flex items-end p-2 gap-2">
      <div className="flex w-[70%] gap-2 flex-wrap justify-center">
        <div className="flex gap-2 ">
          <div className="flex gap-1 flex-col justify-end ">
            <p className="bg-[#E29A2D] text-white text-[10px] rounded-md text-center">
              Initial value of x
            </p>
            <input
              type="number"
              placeholder="Input x"
              value={variableX}
              onChange={handleXChange}
              className="border rounded-[8px] outline-none text-xs h-[33px] w-[95px] border-[#E29A2D] ps-2"
            />
          </div>
          <FunctionCard
            id="1"
            label="Function 1"
            equationNo={"Function: 2"}
            disabled
            xValue={Number(variableX)}
            updateResult={updateResults}
          />
        </div>
        <FunctionCard
          id="2"
          label="Function 2"
          equationNo={"Function: 4"}
          xValue={calculatedResults["1"]}
          updateResult={updateResults}
          disabled={true}
        />
        <div className="flex  gap-2">
          <FunctionCard
            id="3"
            label="Function 3"
            equationNo={"-"}
            xValue={calculatedResults["5"]}
            updateResult={updateResults}
            disabled={true}
          />
          <div className="flex gap-1 flex-col justify-end ">
            <p className="bg-[#4CAF79] text-white text-[10px] rounded-md text-center">
              Final Output y
            </p>
            <input
              type="number"
              placeholder="Input x"
              value={calculatedResults["3"]}
              className="border rounded-[8px] outline-none text-xs h-[33px] w-[95px] border-[#4CAF79] ps-2"
              readOnly
            />
          </div>
        </div>
        <FunctionCard
          id="4"
          label="Function 4"
          equationNo={"Function: 5"}
          xValue={calculatedResults["2"]}
          updateResult={updateResults}
          disabled={true}
        />
        <FunctionCard
          id="5"
          label="Function 5"
          equationNo={"Function: 3"}
          xValue={calculatedResults["4"]}
          updateResult={updateResults}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default FunctionChain;
