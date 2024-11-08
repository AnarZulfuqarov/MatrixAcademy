import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Blogs = () => {
  const [datas, setData] = useState([]);
  const [loading,setLoading]=useState()
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res?.data))
      .catch((err) => console.log(err)).finally(()=>{
        setLoading(false)
      });
  }, []);

  return (
    <div className="container mt-5 pt-5">
      <h1>Blog Posts</h1>
      {loading ? (
        <Spinner/>
      ) : (
<>
      <div>
        {datas.map(data => (
          <div key={data.id} className="card my-3">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.body}</p>
            </div>
          </div>
        ))}
      </div></>
      )}
      
    </div>
  );
};

export default Blogs;
