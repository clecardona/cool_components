export default function Books({ books }) {
  //console.log("books", books);
  const ListOfBooks = books.map((item, idx) => (
    <li key={idx}>
      {item.id && <p>＃ {item.id}</p>}
      {item.title && <h3>📖 {item.title}</h3>}
      {item.author && <p> ✍️ {item.author}</p>}
    </li>
  ));

  return <ul>{ListOfBooks}</ul>;
}
