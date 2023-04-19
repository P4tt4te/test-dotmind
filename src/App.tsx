import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./api/getUsers";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchList } from "./components/SearchList/SearchList";
import { UserDataType } from "./components/UserCard/UserCard";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState(0);

  const [favoriteUsers, setFavoriteUsers] = useState<number[]>([]);
  const toggleFavoriteStatus = (UserId: number) => {
    const IdIndex = favoriteUsers.indexOf(UserId);
    if (IdIndex !== -1) {
      const newFavoriteUsers = favoriteUsers;
      newFavoriteUsers.splice(IdIndex, 1);
      setFavoriteUsers([...newFavoriteUsers]);
    } else {
      setFavoriteUsers([...favoriteUsers, UserId]);
    }
  };

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
      <div className="ContactList">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <SearchList
          UsersList={users?.filter(
            (user) =>
              user.first_name.includes(searchValue) ||
              user.last_name.includes(searchValue) ||
              user.email.includes(searchValue)
          )}
          favoriteUsers={favoriteUsers}
          toggleFavoriteStatus={toggleFavoriteStatus}
        />
      </div>
      <div className="ContactList"></div>
    </div>
  );
}

export default App;
