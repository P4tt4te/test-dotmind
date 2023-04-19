import style from "./UserCard.module.css";
import FilledHeart from "../../assets/heart-fill.svg";
import EmptyHeart from "../../assets/heart.svg";

export type UserDataType = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

interface UserCardProps {
  UserData: UserDataType;
  IsFavorite: boolean;
}

export const UserCard = ({ UserData, IsFavorite }: UserCardProps) => {
  const createFullName = (firstName: string, lastName: string) =>
    firstName + " " + lastName;

  return (
    <div className={style.container}>
      <div className={style.info}>
        <img src={UserData.avatar} alt="Avatar" />
        <div>
          <p>{createFullName(UserData.first_name, UserData.last_name)}</p>
          <p>{UserData.email}</p>
        </div>
      </div>
      <img
        className={style.heart}
        src={IsFavorite ? FilledHeart : EmptyHeart}
        alt="favorite"
      />
    </div>
  );
};
