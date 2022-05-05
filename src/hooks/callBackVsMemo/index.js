import axios from 'axios'
import { useCallback, useEffect, useMemo, useState } from 'react'

const ListaUsuarios = ({ usuarios, query }) => {
  
  // Só é executado quando, users ou query mudar.
  const filter = (users, query) => {
    console.log("------- FILTER")
    return users.filter((user) => user.name.toLowerCase().includes(query))
  }

  const filtrados = useMemo(() => filter(usuarios, query), [usuarios, query])
  return filtrados.map((user) => <div key={user.id}>{user.name}</div>)
}

const Lista = () => {
  const [usuarios, setUsuarios] = useState([])
  const [query, setQuery] = useState('')
  const [count, setCount] = useState(0)

  //Guarda a referencia(memoize) do getUsuarios, para não renderizar
  const getUsuarios = useCallback(async () => {
    console.log('----- getUsuarios')
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsuarios(data)
  })


  const paginar = () => getUsuarios()

  useEffect(() => {
    getUsuarios()
  }, [])

  return (
    <>
      <div>useCallback vs UseMemo (Contador : {count})</div>
      <input type='text' onChange={(ev) => setQuery(ev.target.value)} />
      <button onClick={() => setCount(prev => prev + 1)}>Incrementar</button>
      <ListaUsuarios usuarios={usuarios} query={query} />
      <button onClick={paginar}>Paginação fake</button>
    </>
  )

}

export default Lista



