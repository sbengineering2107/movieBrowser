import { render, fireEvent } from "@testing-library/react";
import SortFilterBar from "../components/SortFilterBar";

describe("SortFilterBar", () => {
  test("renders input and select elements", () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <SortFilterBar
        sortBy="episode_id"
        setSortBy={() => {}}
        search=""
        setSearch={() => {}}
      />
    );
    expect(getByPlaceholderText("Type to search...")).toBeInTheDocument();
    expect(getByDisplayValue("Sort by Episode")).toBeInTheDocument();
  });

  test("calls setSearch and setSortBy", () => {
    const setSearch = vi.fn();
    const setSortBy = vi.fn();
    const { getByPlaceholderText, getByDisplayValue } = render(
      <SortFilterBar
        sortBy="episode_id"
        setSortBy={setSortBy}
        search=""
        setSearch={setSearch}
      />
    );
    fireEvent.change(getByPlaceholderText("Type to search..."), {
      target: { value: "hope" },
    });
    fireEvent.change(getByDisplayValue("Sort by Episode"), {
      target: { value: "year" },
    });
    expect(setSearch).toHaveBeenCalled();
    expect(setSortBy).toHaveBeenCalled();
  });
});
