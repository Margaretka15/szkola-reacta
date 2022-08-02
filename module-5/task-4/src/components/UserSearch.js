import React, {useState} from "react";


function UserSearch({setQuery}) {

  let [value, setValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setQuery(value);
    }
  }

  const handleOnClick = () => {
    setValue('');
    setQuery('');
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
      <button onClick={handleOnClick}>Reset</button>
    </div>
  )
}

export default UserSearch;