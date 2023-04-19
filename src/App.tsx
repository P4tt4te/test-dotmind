import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./api/getUsers";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchList } from "./components/SearchList/SearchList";
import { UserDataType } from "./components/UserCard/UserCard";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [showMoreUsers, setShowMoreUsers] = useState(false);

  const [favoriteUsers, setFavoriteUsers] = useState<number[]>([]);
  const [users, setUsers] = useState<UserDataType[] | null>(null);

  //helpers
  const showMoreUsersRequest = () => {
    users &&
      getUsers(true).then((res) => {
        setUsers([...users, ...res.data]);
        setShowMoreUsers(true);
      });
  };
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
  const usersListFilter = (users: UserDataType[] | null) => {
    return users
      ? users?.filter(
          (user) =>
            user.first_name.includes(searchValue) ||
            user.last_name.includes(searchValue) ||
            user.email.includes(searchValue)
        )
      : [];
  };

  useEffect(() => {
    getUsers(false).then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>My contacts</h1>
      <div>
        <div className="List">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            numberOfUsers={usersListFilter(users).length}
          />
          <SearchList
            UsersList={usersListFilter(users)}
            favoriteUsers={favoriteUsers}
            toggleFavoriteStatus={toggleFavoriteStatus}
          />
          {!showMoreUsers && (
            <button onClick={showMoreUsersRequest}>Show more</button>
          )}
        </div>
        <div className="List">
          {favoriteUsers.length > 0 && (
            <>
              <h2>Favorites</h2>
              <SearchList
                UsersList={users?.filter((user) =>
                  favoriteUsers.includes(user.id)
                )}
                favoriteUsers={favoriteUsers}
                toggleFavoriteStatus={toggleFavoriteStatus}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
