import React from "react";
import {connect} from "react-redux";

class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", category: ""};
    }

    updateInput = (title, category) => {
        this.setState({title, category});
    }

    handleAddBook = () => {

    }
    

    render() {
        const CATEGORIES = ["Action", "Biography", "History", 
        "Horror", "Kids", "Learning", "Sci-Fi"];
        return (
            <form>
                <input onChange={e => this.updateInput(e.target.value)} 
                value={this.state.title} />
                <select name="category" id="category" 
                    onChange={e => this.updateInput(e.target.value)} 
                    value={this.state.category} >
                    {CATEGORIES.map((category) => {
                        return (
                            <option value={category}>{category}</option>
                        )
                    }
                    )}
                </select>
                <button onClick={this.handleAddBook}>Add Book</button>
            </form>
        )
    }
}