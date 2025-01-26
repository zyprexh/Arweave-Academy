import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Simple eval for calculations
    } catch {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f9fc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "320px",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "24px",
            color: "#333",
          }}
        >
          Zyprexh Arweave Calculator
        </h1>

        <div
          style={{
            backgroundColor: "#f0f2f5",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "right",
            fontSize: "18px",
            color: "#555",
            marginBottom: "10px",
          }}
        >
          <p>{input || "0"}</p>
          <p style={{ fontWeight: "bold", fontSize: "24px" }}>
            {result !== null ? result : ""}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map(
            (value) => (
              <button
                key={value}
                onClick={() => (value === "=" ? calculate() : handleClick(value))}
                style={{
                  padding: "15px",
                  fontSize: "16px",
                  backgroundColor: value === "=" ? "#4caf50" : "#ffffff",
                  color: value === "=" ? "#fff" : "#333",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    value === "=" ? "#45a049" : "#f7f7f7")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor =
                    value === "=" ? "#4caf50" : "#ffffff")
                }
              >
                {value}
              </button>
            )
          )}
          <button
            onClick={clear}
            style={{
              gridColumn: "span 4",
              padding: "15px",
              fontSize: "16px",
              backgroundColor: "#ff4d4d",
              color: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e43c3c")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4d4d")}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
