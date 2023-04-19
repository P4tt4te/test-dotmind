import style from "./SearchBar.module.css";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  numberOfUsers: number;
}

export const SearchBar = ({
  searchValue,
  setSearchValue,
  numberOfUsers,
}: SearchBarProps) => {
  return (
    <div className={style.container}>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <p>Total : {numberOfUsers}</p>
    </div>
  );
};
