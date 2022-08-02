import React, {useEffect, useState} from "react";
import UserList from "./UserList";
import UserSearch from "./UserSearch";

function UsersContainer() {

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");

  const [searchParam] = useState(["name", "lastname"]);

  const getData = () => {
    fetch('./data/users.json')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(responseData => setData(responseData.users))
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => setIsLoading(() => false));

  }
  useEffect(() => {
    getData();
  }, []);

  const searchUser = (data) => {
    return data.filter((item) => {
      return searchParam.some((newItem) => {
        return (item[newItem].toLowerCase()).includes(query.toLowerCase());
      })

    });
  }


  return (
    <>
      {!isLoading && <UserList search={searchUser} data={data}/>}
      <UserSearch setQuery={setQuery}/>

    </>
  )
}

export default UsersContainer;