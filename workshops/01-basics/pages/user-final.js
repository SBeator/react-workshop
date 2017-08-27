const User = (props) => <p>I am {props.name}, I am {props.age} year old</p>;

const UserList = (props) => (
  <div>
    <User name="Xingxin" age="25" />
    <User name="Stef" age="18" />
    <User name="Ben" age="30" />
  </div>
)

export default UserList