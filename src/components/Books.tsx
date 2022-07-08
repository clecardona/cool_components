interface IBook {
  id: string
  title: string
  author: string
}

export default function Books({
  books,
}: {
  books: IBook[] | never[]
}): JSX.Element {
  const ListOfBooks = books.map((item, idx) => (
    <li key={idx}>
      {item.id && <p>＃ {item.id}</p>}
      {item.title && <h3>📖 {item.title}</h3>}
      {item.author && <p> ✍️ {item.author}</p>}
    </li>
  ))

  return <ul>{ListOfBooks}</ul>
}
