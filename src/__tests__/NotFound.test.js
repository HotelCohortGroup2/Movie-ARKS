import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Notfound from '../pages/Notfound';

describe("<Notfound />", () => {
  it('renders learn react link', () => {
    render(
      <BrowserRouter>
        <Notfound />
      </BrowserRouter>
    )
    const notFoundElement = screen.getByText(/not/i)
    expect(notFoundElement).toBeInTheDocument()
  });
})