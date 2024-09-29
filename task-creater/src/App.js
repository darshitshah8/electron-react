import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [tableData, setTableData] = useState([]);

  const addTextToTable = () => {
    if (inputText.trim()) {
      setTableData([...tableData, inputText]);
      setInputText("");
    }
  };

  const syncTextToElectron = (text) => {
    if (window.electron) {
      window.electron.send("sync-text", text);
    } else {
      console.log(`Syncing: ${text}`); // For testing in browser
    }
  };

  return (
    <div className="App">
      <h1>Text Sync App</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text"
        />
        <button onClick={addTextToTable}>Add</button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Text</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((text, index) => (
            <tr key={index}>
              <td>{text}</td>
              <td>
                <button onClick={() => syncTextToElectron(text)}>Sync</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
