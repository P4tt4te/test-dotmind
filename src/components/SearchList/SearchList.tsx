import { UserCard, UserDataType } from "../UserCard/UserCard";

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
      {UsersList.map((user) => (
        <UserCard
          key={user.id}
          UserData={user}
          IsFavorite={favoriteUsers.includes(user.id)}
          onClick={() => toggleFavoriteStatus(user.id)}
        />
      ))}
    </div>
  );
};
