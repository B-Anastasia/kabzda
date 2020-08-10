import React, { useState } from "react";

export default {
  title: "React memo demo",
};

type INewMessageCount = {
  count: number;
};

type IUsersType = {
  users: Array<string>;
};

const NewMessageCount = (props: INewMessageCount) => {
  console.log("NewMessageCount");
  return <div>{props.count}</div>;
};

const Users = (props: IUsersType) => {
  console.log("Users");
  const arr = props.users.map((u, i) => {
    return <div key={i}>{u}</div>;
  });
  return <div>{arr}</div>;
};

export const ExampleWithoutMemo = () => {
  console.log("ExampleWithoutMemo");
  const [users, setUsers] = useState(["Dasha", "Masha", "Sasha"]);
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <NewMessageCount count={count} />
      <Users users={users} />
    </>
  );
};

const UsersMemo = React.memo(Users);
const CountMemo = React.memo(NewMessageCount);

export const ExampleMemoUsers = () => {
  console.log("ExampleWithoutMemo");
  const [users, setUsers] = useState(["Dasha", "Masha", "Sasha"]);
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <NewMessageCount count={count} />
      <UsersMemo users={users} />
    </>
  );
};
export const ExampleMemoCountUsers = () => {
  console.log("ExampleWithoutMemo");
  const [users, setUsers] = useState(["Dasha", "Masha", "Sasha"]);
  const [count, setCount] = useState(0);
  const addUser = () => {
    setUsers([...users, "Sveta"]);
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      <CountMemo count={count} />
      <UsersMemo users={users} />
    </>
  );
};
