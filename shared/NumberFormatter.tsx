"use client";
import { NumericFormat } from "react-number-format";
import { NumberFormatterProps } from "@/types";



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
