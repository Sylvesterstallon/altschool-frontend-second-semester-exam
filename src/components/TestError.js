import React from "react";
import { useState } from "react";

export default function TestError() {
    const [errorText, setErrorText] = useState("");

function handleError(e) {
    if (e.target.value.toUpperCase() == "Error") {
        setErrorText("Error");
    }
}
if (errorText == "Error"){
    throw new Error("Test Error Boundary");
}
return (
    <div>
        <input onChange={handleError}
        type="text"
        placeholder="Enter message to test error boundary"/>
    </div>
)
}