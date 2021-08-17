import { render, within } from "@testing-library/react";

import Home from "../Home";

describe("Testing screen <Home />", () => {
  it("Render correctly", () => {
    const { getByText, getByTestId } = render(<Home />);

    const contentCards = getByTestId("content-cards");
    const card = within(contentCards).getAllByTestId("card").length;

    expect(getByText("Explore:")).toBeInTheDocument();
    expect(card).toBe(3);
  });
});
