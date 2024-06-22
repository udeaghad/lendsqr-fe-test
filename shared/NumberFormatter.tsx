"use client";
import { NumericFormat } from "react-number-format";
import { NumberFormatterProps } from "@/types";

const NumberFormatter = ({
  number,
  type,
  thousandSeparator,
  prefix,
  decimalScale,
  fixedDecimalScale,
}: NumberFormatterProps) => {
  return (
    <div>
      <NumericFormat
        value={number}
        displayType={type}
        thousandSeparator={thousandSeparator}
        prefix={prefix}
        decimalScale={decimalScale}
        fixedDecimalScale={fixedDecimalScale}
      />
    </div>
  );
};

export default NumberFormatter;
