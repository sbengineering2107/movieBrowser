import React from "react";

const SortFilterBar = ({ sortBy, setSortBy, search, setSearch }) => (
  <div className="toolbar">
    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
      <option value="episode_id">Sort by Episode</option>
      <option value="year">Sort by Year</option>
    </select>
    <input
      type="text"
      placeholder="Type to search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
);

export default SortFilterBar;
