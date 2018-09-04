const User = (props) => <p>...</p>;

const UserList = (props) => (
  <div>
    <User /> // Xingxin, 25
    <User /> // Zhaoyu, 18
    <User /> // Shihao, 30
  </div>
)

// Make sure the output will be like this:
// I am Xingxin, I am 25 year old
// I am Zhaoyu, I am 18 year old
// I am Shihao, I am 30 year old

export default UserList