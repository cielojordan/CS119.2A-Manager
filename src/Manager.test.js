import React from "react";
import { render } from "@testing-library/react";
import Manager from "./Manager";

test("renders learn react link", () => {
  const { getByText } = render(<Manager />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
