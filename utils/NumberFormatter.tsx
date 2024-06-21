"use client";
import { NumericFormat } from "react-number-format";

interface NumberFormatterProps {
  number: string | number;
  type: "text" | "input";
  thousandSeparator: boolean;
}

const NumberFormatter = ({
  number,
  type,
  thousandSeparator,
}: NumberFormatterProps) => {
  return (
    <div>
      <NumericFormat
        value={number}
        displayType={type}
        thousandSeparator={thousandSeparator}
      />
    </div>
  );
};

export default NumberFormatter;
