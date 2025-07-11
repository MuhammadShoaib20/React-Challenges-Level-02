import React, { useState } from "react";

const SimpleTabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return <p>This is content for Tab 1.</p>;
      case "tab2":
        return <p>This is content for Tab 2.</p>;
      case "tab3":
        return <p>This is content for Tab 3.</p>;
      default:
        return null;
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Simple Tab Switcher</h1>

      {/* Tab Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("tab1")}>Tab 1</button>
        <button onClick={() => setActiveTab("tab2")}>Tab 2</button>
        <button onClick={() => setActiveTab("tab3")}>Tab 3</button>
      </div>

      {/* Content Area */}
      <div
        style={{
          padding: "15px",
          border: "1px solid gray",
          width: "300px",
          margin: "auto",
          borderRadius: "6px",
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default SimpleTabSwitcher;
