import React from "react";
import { DatePicker } from "antd";

function Datepick() {
  const { RangePicker } = DatePicker;
  return (
    <>
      <RangePicker
        format="DD-MM-YYYY"
        renderExtraFooter={() => "extra footer"}
        className="custom-datepicker"
      />
    </>
  );
}

export default Datepick;
