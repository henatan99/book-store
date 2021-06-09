import { connect } from "react-redux"

const BookList = (books) => {
    return (
        <div>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
            </tr>
            {books && books.length 
                ? books.map((book, index) => {
                return <Book key ={`book-${book.id}`} book={book} />
            }) 
            : "No booklist to show!"}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {books}
}

export default connect(mapStateToProps)(BookList)