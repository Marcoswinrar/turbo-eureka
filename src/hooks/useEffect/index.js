import * as S from './styled'
import { useEffect, useState } from 'react'


export const Counter = () => {
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(0)

  //Executa apenas quando o componente é montado!
  useEffect(() => {
    console.log("COMPONENTE MONTADO")
  }, [])
  
  //Executa todas as vezes que o count sofre alteração!
  useEffect(() => {
    document.title = `${count} clicks!` 
  }, [count])

  //Executa toda vez que o componente sofrer render ou rerender
  useEffect(() => {
    console.log("RENDER/OU RERENDER")
  })

  //Executa quando componente montado. Porém é limpo no destroy 
  //onde executa a função clearInterval()
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  //Render do componente, executado todas as vezes que o componente sofre alteração.
  console.log("RENDER")

  return (
    <S.Wrapper>
      <S.Text><strong>Hooks - useEffect</strong></S.Text>
      <S.Text>{timer} atualizando!</S.Text>
      <S.Text>O Usuário clicou {count} vezes no contador!</S.Text>
      <S.Button onClick={() => setCount(prev => prev + 1)}>Adicionar</S.Button>
    </S.Wrapper>
  )

}

export default Counter
