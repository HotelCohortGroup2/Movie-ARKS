import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
//import userEvent from "@testing-library/user-event"
import Navbar from "../components/Navbar"


describe("<Navbar />", () => {
    it("renders without crashing", () => {
        render(
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        )
        const headerElement = screen.getByText(/log/i)
        expect(headerElement).toBeInTheDocument()
      })

})