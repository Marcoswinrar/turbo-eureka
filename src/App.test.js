import { render, screen } from "@testing-library/react"
import App from './App'

describe("Render do <App/>", () => {
  
  it("Deve renderizar o App sem problemas", () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot()
    expect(screen.queryByText(/React API/)).toBeInTheDocument()
  })
})