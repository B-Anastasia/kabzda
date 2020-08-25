import React, { useMemo, useState } from "react";
import { INewMessageCount, IUsersType } from "./ReactMemo.stories";

export default {
  title: "Use Memo in action",
};

export const WithoutUseMemoInCountingFactorial = () => {
  //n! - counting of factorial

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  //variables for results
  let resultA = 1;
  let resultB = 1;

  for (let i = 1; i <= a; i++) {
    console.log(`resultA ${resultA} * ${i}`);
    resultA *= i;
  }
  for (let i = 1; i <= b; i++) {
    console.log(`resultB ${resultB} * ${i}`);
    resultB *= i;
  }

  return (
    <>
      <input
        value={a}
        onChange={(e) => setA(+e.currentTarget.value)}
        type="text"
      />
      <input
        value={b}
        onChange={(e) => setB(+e.currentTarget.value)}
        type="text"
      />
      <hr />
      <div>Result a: {resultA}</div>
      <div>Result b: {resultB}</div>
    </>
  );
};

export const UseMemoInCountingFactorial = () => {
  //n! - counting of factorial

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  //variables for results

  const resultA = useMemo(() => {
    let resultA = 1;
    for (let i = 1; i <= a; i++) {
      console.log(`resultA ${resultA} * ${i}`);
      resultA *= i;
    }
    return resultA;
  }, [a]);

  const resultB = useMemo(() => {
    let resultB = 1;
    for (let i = 1; i <= b; i++) {
      console.log(`resultB ${resultB} * ${i}`);
      resultB *= i;
    }
    return resultB;
  }, [b]);

  return (
    <>
      <input
        value={a}
        onChange={(e) => setA(+e.currentTarget.value)}
        type="text"
      />
      <input
        value={b}
        onChange={(e) => setB(+e.currentTarget.value)}
        type="text"
      />
      <hr />
      <div>Result a: {resultA}</div>
      <div>Result b: {resultB}</div>
    </>
  );
};

const Users = React.memo((props: IUsersType) => {
  console.log("Users");
  const arr = props.users.map((u, i) => {
    return <div key={i}>{u}</div>;
  });
  return <div>{arr}</div>;
});

export const NewMessageCount = React.memo((props: INewMessageCount) => {
  console.log("NewMessageCount");
  return <div>{props.count}</div>;
});

export const HelpReactMemoByUseMemo = () => {
  console.log("HelpReactMemoByUseMemo");
  const [users, setUsers] = useState(["Dasha", "Masha", "Sasha", "Viktor"]);
  const [count, setCount] = useState(0);

  const filteredUsers = useMemo(() => {
    return users.filter((u) => u.toLowerCase().indexOf("a") > -1);
  }, [users]);

  const addUser = () => {
    setUsers([...users, "Sveta"]);
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <NewMessageCount count={count} />
      <button onClick={addUser}>add user</button>
      <Users users={filteredUsers} />
    </>
  );
};
