"use client";

import React, { useContext } from "react";
import { type AddOn } from "../../data";
import { AddOnContext } from "../../contexts";

type AddOnSelectorProps = {
  addOns: AddOn[];
};

const AddOnSelector: React.FC<AddOnSelectorProps> = ({ addOns }) => {
  const [id, setId] = useContext(AddOnContext);

  return (
    <div className="flex flex-col">
      <label htmlFor="color">Add-ons:</label>

      <select
        id="color"
        value={id ?? "none"}
        onChange={(e) => setId(e.target.value)}
        className="select-down-chevron mb-12 mt-4 rounded-sm border border-neutral-500 bg-pebble-200 p-[.875rem] text-sm/none outline-none"
      >
        <option value="none">ohne zusätzliche Foodschalen</option>
        {addOns.map((addOn) => (
          <option key={addOn.id} value={addOn.id}>
            + {addOn.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddOnSelector;
