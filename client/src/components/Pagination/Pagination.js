/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Pagination.scss';

export const Pagination = ({ countriesPerPage, totalCountries, currentPage, firstPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil((totalCountries-firstPage) / countriesPerPage)+1; i++) {
        pageNumbers.push(i);      
    }

    return (
        <nav className='container' data-pagination>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        number!==0?
                        <li key={number} className={currentPage===number?`page-item active`:`page-item`} >
                            <a onClick={() => paginate(number)} className='page-link'> </a>
                        </li>:null
                    ))
                }
            </ul>
        </nav>
    )
}
