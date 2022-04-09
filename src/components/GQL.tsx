import { useEffect, useState } from "react";
import Books from "./Books";
const axios = require("axios");

const GQL = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [id, setId] = useState(false);
  const [author, setAuthor] = useState(true);
  const API_URL = "https://clecardona-ql.herokuapp.com/graphql";

  async function fetchData() {
    const response = await axios({
      url: API_URL,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        query: `
          query Books {
            books {
                ${id ? "id" : ""}
                title
                ${author ? "author" : ""}
              }
            }
          `,
      },
    });
    setData(response.data.data);
    setLoaded(true);
  }

  useEffect(() => {
    fetchData();
  }, [id, author]);

  return (
    <>
      <div className="selectors">
        <label>
          <input type="checkbox" checked={id} onChange={() => setId(!id)} />
          Show id
        </label>
        <label>
          <input
            type="checkbox"
            checked={author}
            onChange={() => setAuthor(!author)}
          />
          Show author(s)
        </label>
      </div>

      <section className="list">
        {!loaded && <p>Loading...</p>}
        {/* @ts-ignore */}
        {loaded && <Books books={data.books} />}
      </section>
    </>
  );
};

export default GQL;
