import { useState } from 'react'
import Card from './Card'
import Input from './Input'

interface iUser {
  name: string
  age: string | number
  hobby: string
}

const index = () => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [hobby, setHobby] = useState<string>('')

  const [users, setUsers] = useState<iUser[]>([] as iUser[])

  function handleSubmit(event: any) {
    event.preventDefault()

    const user = {
      name,
      age,
      hobby,
    }

    setUsers([...users, user])
    setName('')
    setAge('')
    setHobby('')
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          id="name"
          type="text"
          placeholder="digite seu nome"
          callback={setName}
          name={name}
        />
        <Input
          label="Idade"
          id="age"
          type="number"
          placeholder="digite sea idade"
          callback={setAge}
          name={age}
        />
        <Input
          label="Hobby"
          id="hobby"
          type="text"
          placeholder="digite seu hobby"
          callback={setHobby}
          name={hobby}
        />

        <button type="submit">Enviar</button>
      </form>

      <ul>
        {users.map(({ name, age, hobby }) => (
          <Card name={name} age={age} hobby={hobby} />
        ))}
      </ul>
    </div>
  )
}

export default index
