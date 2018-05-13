let headers = [
    "Book", "Author", "Language", "Published", "Sales"
];

let data = [
    ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954–1955", "150 million"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
    ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754–1791", "100 million"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"],
];

let Excel = React.createClass({
    displayName: 'Excel',
    propTypes: {
        headers: React.PropTypes.arrayOf(
            React.PropTypes.string
        ),
        initialData: React.PropTypes.arrayOf(
            React.PropTypes.arrayOf(
                React.PropTypes.string
            )
        ),
    },
    getInitialState() {
        return {
            data: this.props.initialData,
            sortby: null,
            descending: false,
            edit: null, // [row index, cell index]
            search: false
        };
    },
    _sort: function(e) {
        let column = e.target.cellIndex;
        let data = Array.from(this.state.data); // copy this.state.data
        let descending = (this.state.sortby === column) && !this.state.descending;

        data.sort((a, b) => {
            return descending
                ? (a[column] < b[column] ? 1 : -1)
                : (a[column] > b[column] ? 1 : -1);
        });

        this.setState({
            data: data,
            sortby: column,
            descending: descending
        });
    },
    _showEditor: function(e) {
        this.setState({edit: {
            row: parseInt(e.target.dataset.row, 10),
            cell: e.target.cellIndex,
        }});
    },
    _save: function(e) {
        e.preventDefault();
        let input = e.target.firstChild;
        let data = Array.from(this.state.data); // copy this.state.data
        data[this.state.edit.row][this.state.edit.cell] = input.value;
        this.setState({
            edit: null,
            data: data
        });
    },
    render: function() {
        return (
            React.DOM.table(null,
                React.DOM.thead({onClick: this._sort},
                    React.DOM.tr(null,
                        this.props.headers.map((title, idx) => {
                            if (this.state.sortby === idx) {
                                title += this.state.descending ? ' \u2191' : ' \u2193'
                            }

                            return React.DOM.th({key: idx}, title);
                        })
                    )
                ),
                React.DOM.tbody({onDoubleClick: this._showEditor},
                    this.state.data.map((row, row_idx) => {
                        return (
                            React.DOM.tr({key: row_idx},
                                row.map((cell, cell_idx) => {
                                    let content = cell;
                                    let edit = this.state.edit;

                                    if (edit && edit.row === row_idx && edit.cell === cell_idx) {
                                        content = React.DOM.form({onSubmit: this._save},
                                            React.DOM.input({
                                                type: 'text',
                                                defaultValue: cell,
                                            })
                                        );
                                    }

                                    return React.DOM.td({
                                        key: cell_idx,
                                        "data-row": row_idx
                                    }, content);
                                }, this)
                            )
                        );
                    })
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Excel, {
        headers: headers,
        initialData: data,
    }),
    document.getElementById("app")
);
