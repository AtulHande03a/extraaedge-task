import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Loader from "./components/Loader";

const url = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUserDetails = async (url) => {
    setIsLoading(true);
    setIsLoading(false);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUserDetails(url);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex wrap m-1">
      <Cards users={users} />
    </div>
  );
}

export default App;
