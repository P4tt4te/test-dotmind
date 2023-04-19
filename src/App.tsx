import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./api/getUsers";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchList } from "./components/SearchList/SearchList";
import { UserDataType } from "./components/UserCard/UserCard";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserDataType[] | null>(null);

  useEffect(() => {
    getUsers(false).then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>My contacts</h1>
      <SearchBar />
      <SearchList UsersList={users} />
    </div>
  );
}

export default App;
