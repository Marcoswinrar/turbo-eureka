import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import ListExpand from "."

describe("Componente <ListExpand/>", () => {
  it("Deve renderizar component de Lista Expansivel sem problemas", () => {
    const { container } = render(<ListExpand />)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).not.toHaveClass("open")
  })

  it("Deve expandir ao clicar encima do header", () => {
    render(<ListExpand />)
    const header = screen.queryByText(/Hooks - useEffect/)

    act(() => {
      fireEvent.click(header)
    })

    expect(screen.queryByText(/Estudo sobre hooks - useEffect/))
  })
})