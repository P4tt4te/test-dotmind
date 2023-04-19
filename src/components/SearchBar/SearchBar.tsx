import { useState } from "react";

export const SearchBar = () => {
    const [value, setValue] = useState("");

    return <input type="text" id="name" name="name" value={value} onChange={(e) => setValue(e.target.value)} />
}