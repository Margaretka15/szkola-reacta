import React, {useState} from "react";


function UserSearch({setQuery}) {

  let [value, setValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setQuery(value);
    }
  }

  const resetSearch = () => {
    setValue('');
    setQuery('');
  }
  const handleSearch = () => {
    setQuery(value);
  }

  return (
    <div className="users-list">
      <div> Wyszukaj </div>
      <input type="text"
             name="search-form"
             id="search-form"
             value={value}
             placeholder="Wyszukaj"
             onChange={(e) => setValue(e.target.value)}
             onKeyDown={handleKeyDown}/>
      <button onClick={handleSearch}>Search</button>
      <button onClick={resetSearch}>Reset</button>
    </div>
  )
}

export default UserSearch;