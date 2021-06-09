const BookList = (books) => {
    return (
        <div>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
            </tr>
            {books.map((row, key) => {
                <tr>
                   <td>row.id</td>
                   <td>row.title</td>
                   <td>row.category</td>
                </tr>
            })}
        </div>
    )
}

export default BookList