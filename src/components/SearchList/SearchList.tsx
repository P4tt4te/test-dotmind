import { UserCard, UserDataType } from "../UserCard/UserCard";
import style from "./SearchList.module.css";

interface SearchListType {
  UsersList?: UserDataType[] | null;
  favoriteUsers: number[];
  toggleFavoriteStatus: (UserId: number) => void;
}

export const SearchList = ({
  UsersList,
  favoriteUsers,
  toggleFavoriteStatus,
}: SearchListType) => {
  if (UsersList === null || UsersList === undefined) {
    return <div>En attente ...</div>;
  }

  return (
    <div>
      {UsersList.length > 0 ? (
        UsersList.map((user) => (
          <UserCard
            key={user.id}
            UserData={user}
            IsFavorite={favoriteUsers.includes(user.id)}
            onClick={() => toggleFavoriteStatus(user.id)}
          />
        ))
      ) : (
        <div className={style.anyResult}>
          <p>Aucun Résulat...</p>
        </div>
      )}
    </div>
  );
};
