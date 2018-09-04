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

  const usersElement = users.map((user) => (<User key={user.name} name={user.name} age={user.age} />))

  // const usersElement = [
  //   <User name="Xingxin" age="25" key="Xingxin" />,
  //   <User name="Zhaoyu" age="18" key="Zhaoyu" />,
  //   <User name="Shihao" age="30" key="Shihao" />
  // ]

  return (
    <div>
      { usersElement }
    </div>
  )
}

export default UserList