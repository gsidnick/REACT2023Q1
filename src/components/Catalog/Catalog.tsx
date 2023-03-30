import './Catalog.css';
import React, { useCallback, useEffect, useState } from 'react';
import Input from '../UI/Input/Input';
import List from '../List/List';
import data from '../../../data.json';
import IProduct from '../../interfaces/IProduct';
import { getLocalQuery, setLocalQuery } from '../../utils/localStorage';

function Catalog() {
  const [query, setQuery] = useState<string>('');
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  function searchChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    applyFilter(event.target.value);
  }

  const applyFilter = useCallback(
    (value: string) => {
      if (value === '') {
        setProducts(data);
        return;
      }
      const filteredProducts = data.filter((product) => {
        const name = product.name.toLowerCase();
        const description = product.description.toLowerCase();
        const price = product.price;
        const q = value.toLowerCase();
        return name.includes(q) || price.toString().includes(q) || description.includes(q);
      });
      setProducts(filteredProducts);
    },
    [products]
  );

  useEffect(() => {
    const queryString = getLocalQuery();
    setQuery(queryString);
    applyFilter(queryString);
  }, []);

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  return (
    <div className="catalog">
      <div className="catalog__search">
        <Input type="text" placeholder="Search" value={query} onChange={searchChangeHandler} />
      </div>
      <div className="catalog__products">
        <List value={products} />
      </div>
    </div>
  );
}

export default Catalog;
