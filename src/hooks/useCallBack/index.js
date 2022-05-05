import { useCallback, useState } from "react"

const Callback = () => {
    
  const [usuario, setUsuario] = useState({nome: 'Marcos', categoria: 'Dev'})
  const [categoria, setCategoria] = useState('')


  // Callback guarda como referencia o valor dos itens alterados, cuidar com o 2 param
  const atualizaUsuario = useCallback(() => {
    setUsuario({nome: 'Eduardo', categoria: categoria})
  }, [categoria])


  console.log("NOME USUÁRIO:", usuario.nome)
  console.log("CATEGORIA:", usuario.categoria)


  // 1 Log: Nome: Marcos, Categoria: Dev
  // 2 Click categoria - 2 Log: Nome: Eduardo, Categoria: " "
  return (
    <div>
      <button onClick={atualizaUsuario}>Atualizar nome do usuário</button>
      <button onClick={() => setCategoria("QA")}>Atualizar categoria</button>
    </div>
  )
}

export default Callback