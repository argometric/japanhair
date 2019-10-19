import React from "react";
import BookingPopup from "./BookingPopup";

export default function TableSlot(props) {
  return props ? (
    <td>
      <BookingPopup value={props.value} service={props.service} />
    </td>
  ) : (
    <td disabled>
      <BookingPopup />
    </td>
  );
}
