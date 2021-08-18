import { render, within } from "@testing-library/react";

import Characters from "screens/Characters";

import { ICharacters } from "services/apis/marvel";

const mock = [
  {
    name: "Loki",
    thumbnail: {
      path: "http://test.12346",
      extension: "jpg",
    },
    id: 12456,
  },
  {
    name: "Thor",
    thumbnail: {
      path: "http://test.12346",
      extension: "jpg",
    },
    id: 1456,
  },
];

describe("Testing screen <Characters />", () => {
  it("Render correctly", () => {
    const { getByText, getByTestId } = render(
      <Characters characters={mock as ICharacters[]} />
    );

    const contentCards = getByTestId("content-cards");
    const card = within(contentCards).getAllByTestId("card").length;

    expect(getByText("Personagens:")).toBeInTheDocument();
    expect(card).toBe(2);
  });
});
