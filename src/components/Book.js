import React from 'react';
import {connect} from 'react-redux';

const Book = (book) => {
    <tr className="book">
        <td className="book-id">book.id</td>
        <td className="book-title">book.title</td>
        <td class="book-category">book.category</td>
    </tr>
}

export default connect()(Book)