import useLocalStorage from "./custom-hooks/useLocalstorage";

export const Component1 = () => {
  const [name, setName] = useLocalStorage("name", "John");

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => setName("Alice")}>Change Name</button>
    </div>
  );
};

export default Component1;
