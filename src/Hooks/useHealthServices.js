import { useEffect, useState } from "react";

const useHealthServices = () => {
  const [healthservice, setHealthService] = useState([]);
  useEffect(() => {
    fetch("./healthService.json")
      .then((res) => res.json())
      .then((data) => setHealthService(data));
  }, []);
  return [healthservice];
};

export default useHealthServices;
