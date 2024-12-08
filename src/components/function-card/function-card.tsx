import { calculateResult, extractVariable } from "@/utils/helper";
import { useEffect, useState } from "react";

interface FunctionCardProps {
  id: string;
  label: string;
  xValue: number;
  updateResult: (id: string, result: number) => void;
  equationNo: string;
  disabled: boolean;
}

const FunctionCard: React.FC<FunctionCardProps> = ({
  id,
  label,
  xValue,
  updateResult,
  equationNo,
  disabled,
}) => {
  const [equation, setEquation] = useState<string>("");

  useEffect(() => {
    if (xValue || equation) {
      handleEquationBlur();
    }
  }, [equation, xValue]);

  const handleEquationBlur = () => {
    if (equation && xValue) {
      const variable = extractVariable(equation);
      const result = calculateResult(equation, xValue, variable);
      if (!isNaN(result)) {
        updateResult(id, result);
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 w-fit bg-white shadow rounded-[8px] p-4 ">
      <h4 className="text-[#A5A5A5]">{label}</h4>
      <div className="flex flex-col gap-2 text-black">
        <label className="text-xs">Equation:</label>
        <input
          type="text"
          placeholder="Enter Equation"
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
          onBlur={handleEquationBlur}
          className="border rounded-[8px] outline-none text-xs h-[33px] w-[195px] ps-2"
        />
        <label className="text-xs">Next Function</label>
        <input
          type="text"
          placeholder="Next Function"
          value={equationNo}
          disabled={disabled}
          readOnly
          className="border text-[#A5A5A5] rounded-[8px] outline-none text-xs h-[33px] w-[195px] bg-[#F5F5F5] ps-2"
        />
      </div>
    </div>
  );
};

export default FunctionCard;
