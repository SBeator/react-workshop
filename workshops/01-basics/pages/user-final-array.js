const User = (props) => <p>I am {props.name}, I am {props.age} year old</p>;

const UserList = (props) => {
  let users = [
    {
      name: "Xingxin",
      age: "25"
    },
    {
      name: "Stef",
      age: "18"
    },
    {
      name: "Ben",
      age: "31"
    }
  ]

  let usersElement = [];

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    usersElement.push(<User key={user.name} name={user.name} age={user.age} />)
  }

  // We can replace the loop with this line:
  // let usersElement = users.map((user) => (<User key={user.name} name={user.name} age={user.age} />))

  return (
    <div>
      { usersElement }
    </div>
  )
}

export default UserList