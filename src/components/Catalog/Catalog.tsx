import './Catalog.css';
import React from 'react';
import Input from '../UI/Input/Input';
import List from '../List/List';
import data from '../../../data.json';
import IProduct from '../../interfaces/IProduct';
import { getQuery, setQuery } from '../../utils/localStorage';

class Catalog extends React.Component<object, { query: string; products: IProduct[] }> {
  private products: IProduct[];
  constructor(props: object) {
    super(props);
    this.products = data;
    this.state = { query: '', products: [] as IProduct[] };
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }
  componentDidMount() {
    let query = getQuery();
    if (query === null) query = '';
    this.setState({ query });
    this.applyFilter(query);
  }

  componentWillUnmount() {
    setQuery(this.state.query);
  }

  searchChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ query: event.target.value });
    this.applyFilter(event.target.value);
  }

  applyFilter(query: string) {
    if (query === '') {
      this.setState({ products: this.products });
      return;
    }
    const filteredProducts = this.products.filter((product) => {
      const name = product.name.toLowerCase();
      const description = product.description.toLowerCase();
      const price = product.price;
      const q = query.toLowerCase();
      return name.includes(q) || price.toString().includes(q) || description.includes(q);
    });
    this.setState({ products: filteredProducts });
  }
  render() {
    return (
      <div className="catalog">
        <div className="catalog__search">
          <Input
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={this.searchChangeHandler}
          />
        </div>
        <div className="catalog__products">
          <List value={this.state.products} />
        </div>
      </div>
    );
  }
}

export default Catalog;
