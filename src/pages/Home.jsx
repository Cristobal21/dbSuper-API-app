import { useState } from "react"
import { Container, Row } from "react-bootstrap"
import { CharacterSearch } from "../components/CharacterSearch"
import { Search } from "../components/Search"

export const Home = () => {

  const [character, setCharacter] = useState(['Gohan'])

  const onAddCharacter = (newCharacter) => {
    setCharacter([newCharacter])
  }

  return (
    <Container>
      <Row >
        <Search
          onNewCharacter={onAddCharacter}
        />
      </Row>
      <Row >
        {
          character.map(data => (
            <CharacterSearch key={data}
              name={data}
            />
          ))
        }
      </Row>
    </Container>
  )
}
