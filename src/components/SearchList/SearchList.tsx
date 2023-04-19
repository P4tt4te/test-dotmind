import { UserCard, UserDataType } from "../UserCard/UserCard";

interface SearchListType {
  UsersList?: UserDataType[] | null;
}

export const SearchList = ({ UsersList }: SearchListType) => {
  if (UsersList === null || UsersList === undefined) {
    return <div>En attente ...</div>;
  }

  return (
    <div>
      {UsersList.map((user) => (
        <UserCard UserData={user} IsFavorite={false} />
      ))}
    </div>
  );
};
