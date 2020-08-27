import React, { useCallback, useMemo, useState } from "react";
import Select from "./Select";
import { ItemsType } from "../Accordion/Accordion";
import { NewMessageCount } from "../stories/UseMemo.stories";

export default {
  title: "Select with Use Memo",
  component: Select,
};

export const SelectUsingUseMemo = () => {
  const [towns] = useState<ItemsType[]>([
    { value: "1", title: "Kiev", population: 10000000, countryId: 10 },
    { value: "2", title: "Kharkov", population: 8000000, countryId: 10 },
    { value: "3", title: "Donetsk", population: 6000000, countryId: 10 },
    { value: "4", title: "Tel-Aviv", population: 500000, countryId: 20 },
    { value: "5", title: "Bat Yam", population: 700000, countryId: 20 },
    { value: "6", title: "Rishon", population: 900000, countryId: 20 },
    { value: "7", title: "Rostov", population: 90000000, countryId: 30 },
    { value: "8", title: "Moscow", population: 10000000, countryId: 30 },
    {
      value: "9",
      title: "Saint Petersburg",
      population: 7000000,
      countryId: 30,
    },
  ]);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [count, setCount] = useState(0);

  const filteredCountry = useMemo(() => {
    console.log("filteredCountry");
    return towns.filter((t) => t.countryId === 10);
  }, [towns]);

  const filteredPopulation = useMemo(() => {
    console.log("filteredPopulation");
    return towns.filter((t) => t.population && t.population > 5000000);
  }, [towns]);

  const filteredTitle = useMemo(() => {
    console.log("filteredTitle");
    return towns.filter((t) => t.title.toLowerCase().indexOf("o") > -1);
  }, [towns]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <NewMessageCount count={count} />
      <Select
        items={filteredCountry}
        onClick={useCallback((value) => setValue1(value), [setValue1])}
        value={value1}
        toggle={toggle1}
        onClickToggle={useCallback((value) => setToggle1(value), [setToggle1])}
      />
      <Select
        items={filteredPopulation}
        onClick={useCallback((value) => setValue2(value), [setValue2])}
        value={value2}
        toggle={toggle2}
        onClickToggle={useCallback((value) => setToggle2(value), [setToggle2])}
      />
      <Select
        items={filteredTitle}
        onClick={useCallback((value) => setValue3(value), [setValue3])}
        value={value3}
        toggle={toggle3}
        onClickToggle={useCallback((value) => setToggle3(value), [setToggle3])}
      />
    </>
  );
};
