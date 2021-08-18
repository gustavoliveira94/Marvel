import { render, within } from "@testing-library/react";

import Comics from "screens/Comics";

import { IComics } from "services/apis/marvel";

const mock = [
  {
    title: "Loki",
    thumbnail: {
      path: "http://test.12346",
      extension: "jpg",
    },
    id: 12456,
  },
  {
    title: "Thor",
    thumbnail: {
      path: "http://test.12346",
      extension: "jpg",
    },
    id: 1456,
  },
];

describe("Testing screen <Comics />", () => {
  it("Render correctly", () => {
    const { getByText, getByTestId } = render(
      <Comics comics={mock as IComics[]} />
    );

    const contentCards = getByTestId("content-cards");
    const card = within(contentCards).getAllByTestId("card").length;

    expect(getByText("Histórias em quadrinhos:")).toBeInTheDocument();
    expect(card).toBe(2);
  });
});
