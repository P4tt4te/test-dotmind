interface SearchBarProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
  return (
    <input
      type="text"
      id="name"
      name="name"
      defaultValue={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};
