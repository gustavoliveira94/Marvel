import { render } from "@testing-library/react";

import Header from "../Header";

describe("Testing component <Header />", () => {
  it("render correctly", () => {
    const { getByRole } = render(<Header />);

    expect(getByRole("img")).toBeInTheDocument();
  });
});
