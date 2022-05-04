import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Counter from "."

describe("Componente <Counter/>", () => {
  
  beforeAll(() => {
    jest.useFakeTimers()
    jest.spyOn(global, 'setInterval')
  })
  
  it("Deve renderizar componente de Counter sem problemas", () => {
    const { container } = render(<Counter />)

    expect(container).toMatchSnapshot()
    expect(screen.queryByText(/Hooks - useEffect/)).toBeInTheDocument()    
  })
  
  it("Deve iniciar o timer ao carregar o Counter",() => {
    render(<Counter/>)    
    expect(setInterval).toHaveBeenCalledTimes(1)
  })

  it("Deve incrementar o contador ao clicar em Adicionar", () => {
    render(<Counter />)
    const buttonAdd = screen.queryByText(/Adicionar/)

    act(() => {
      fireEvent.click(buttonAdd)
    })

    expect(screen.queryByText(/1/)).toBeInTheDocument()
  })
})
