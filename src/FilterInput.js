import React from "react";

export default function FilterInput({ onChange }) {
    return (
        <div className="flex-column">
            <div>Filter</div>
            <input type="text" onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}
