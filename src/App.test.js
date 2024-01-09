import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import App from "./App"

describe("<App />", () => {
  it("renders the 'Welcome to Movie Arks' text", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const welcomeText = screen.getByText(/to/i)
    expect(welcomeText).toBeInTheDocument()
  })
})