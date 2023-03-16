import './Catalog.css';
import React from 'react';
import Input from '../UI/Input/Input';
import List from '../List/List';

class Catalog extends React.Component<object, { query: string }> {
  constructor(props: object) {
    super(props);
    this.state = { query: '' };
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }
  componentDidMount() {
    const query = localStorage.getItem('query');
    if (query !== null) this.setState({ query });
  }

  componentWillUnmount() {
    if (this.state.query !== '') {
      localStorage.setItem('query', this.state.query);
    } else {
      localStorage.removeItem('query');
    }
  }

  searchChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ query: event.target.value });
  }
  render() {
    return (
      <div className="catalog">
        <div className="catalog__search">
          <Input value={this.state.query} onChange={this.searchChangeHandler} />
        </div>
        <div className="catalog__products">
          <List />
        </div>
      </div>
    );
  }
}

export default Catalog;
