import { render, within } from "@testing-library/react";

import Series from "screens/Series";

import { ISeries } from "services/apis/marvel";

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

describe("Testing screen <Series />", () => {
  it("Render correctly", () => {
    const { getByText, getByTestId } = render(
      <Series series={mock as ISeries[]} />
    );

    const contentCards = getByTestId("content-cards");
    const card = within(contentCards).getAllByTestId("card").length;

    expect(getByText("Séries:")).toBeInTheDocument();
    expect(card).toBe(2);
  });
});
