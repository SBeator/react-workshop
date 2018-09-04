const User = (props) => <p>I am {props.name}, I am {props.age} year old</p>;

const UserList = (props) => (
  <div>
    <User name="Xingxin" age="25" />
    <User name="Zhaoyu" age="18" />
    <User name="Shihao" age="30" />
  </div>
)

export default UserList