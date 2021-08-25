/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
import React, {useState} from 'react';
import './pagination.scss';

interface PaginationProps{
	dataPerPage:number;
	paginate:any;
	totalData:number;
}
const Pagination:React.FC<PaginationProps> = ({dataPerPage, totalData, paginate}) => {
  const dataNumbers = [];

  const [current, setCurrent] = useState(false);
  const [active, setActive] = useState(false);

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    dataNumbers.push(i);
  }

  const setPaginate = (number) => {
    setCurrent(true);
    paginate(number);
  };

  return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
                {
                    dataNumbers.map((number) => (
                        <li key={number}>
                            <a className={`"page-link" ${active ? 'active' : ''}`} onClick={() => { setActive(true); setPaginate(number); }} href="#">
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
  );
};

export default Pagination;
