import { useState } from 'react'
import Counter from '../../hooks/useEffect'
import { tabs } from './tabs.mock'
import * as S from './styled'

const ListExpand = () => {

  const [expand, setExpand] = useState(() => tabs.map((tab) => ({
    index: tab.index,
    open: false
  })))

  const onEvent = key => {
    const tabMapper = [...expand].map((tab) => ({
      index: tab.index,
      open: key === tab.index ? !expand[key].open : false
    }))

    setExpand(tabMapper)
  }

  return (
    <S.Wrapper>
      {tabs.map((tab, index) => (
        <S.Container
          key={index}
          className={expand[index].open && 'open'}>
          <S.Header onClick={() => onEvent(index)}>
            <S.Title>{tab.title}</S.Title>
          </S.Header>
          {expand[index].open &&
            <S.Content>
              <Counter />
            </S.Content>
          }
        </S.Container>
      ))}
    </S.Wrapper>
  )

}

export default ListExpand