import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from "./components/search-bar";
import SmallButton from "./components/small-button";

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.onChangeSearch = this.onChangeSearch.bind(this)
        this.onChangeLocationA = this.onChangeLocationA(this)
        this.onChangeLocationB = this.onChangeLocationB(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            inputText: "",
            defaultText: "...",
            defaultText2: "",
            queryString: "",
            data: {}
        }
    }

    onChangeSearch(e) {
        this.setState({
            queryString: e.target.value,
            defaultText2: e.target.value
        })

        let query = this.state.queryString
        console.log(query)
    }

    onChangeLocationA(e) {}
    onChangeLocationB(e) {}

    handleClick(){
        console.log("searching...")

        // search prep
        let query = {}
        query["city"] = this.state.queryString;
        query = JSON.stringify(query);

        // api call
        let that = this
        axios.get('/db/' + query)
            .then(function(res){
                that.setState({
                    data: res.data
                })
            })
    }

    onSubmit(e) {
        console.log("click")
        e.preventDefault()
        this.handleSearch()
    }

    render() {
        return (
            <div>
                <form>
                    <SearchBar
                        id='search-bar-one'
                        title="Loaction1"
                        defaultText={this.state.defaultText}
                        change={this.onChangeSearch}
                    />
                    <SearchBar
                        id='search-bar-two'
                        title="Destination"
                    />
                    <SmallButton
                        id='search-button-one'
                        title='Search Button'
                        onClick={this.handleClick}
                    />
                </form>
                <div>
                    <ul>
                        {(Object.keys(this.state.data).length > 0) ? Object.keys(this.state.data).map(key => (
                            <li key={key}>
                                <ul>
                                    <li>airport_name: {this.state.data[key].airport_name}</li>
                                    <li>city: {this.state.data[key].city}</li>
                                </ul>
                            </li>
                        )): <li> results ...</li>}
                    </ul>
                </div>
            </div>
        )
    }

}
