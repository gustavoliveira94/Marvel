import { render } from "@testing-library/react";

import Card from "../Card";

describe("Testing Component <CardHome />", () => {
  it("Check render props", () => {
    const { getByText, getByTestId, getByRole } = render(
      <Card
        name="Loki"
        url="http://loki.com"
        image="https://i.annihil.us/u/prod/marvel/i/mg/f/20/60e5e1d1b5fde/portrait_uncanny.jpg"
      />
    );

    expect(getByText("Loki")).toBeInTheDocument();
    expect(getByTestId("card-link").href).toEqual("http://loki.com/");
    expect(getByRole("img").src).toEqual(
      "https://i.annihil.us/u/prod/marvel/i/mg/f/20/60e5e1d1b5fde/portrait_uncanny.jpg"
    );
  });
});
