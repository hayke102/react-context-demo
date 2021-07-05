import React from "react";
import Badge from "./Badge";

export default function NavBar() {
    return (
        <div
            className="w-full flex-hcenter p-0.5 text-white"
            style={{ backgroundColor: "#282828" }}
        >
            <h1>
                Todos
                {/* <Badge /> */}
            </h1>
        </div>
    );
}
