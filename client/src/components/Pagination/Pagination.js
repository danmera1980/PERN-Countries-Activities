import React from 'react';
import './Pagination.scss';

export const Pagination = ({ countriesPerPage, totalCountries, currentPage, firstPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil((totalCountries-firstPage) / countriesPerPage); i++) {
        pageNumbers.push(i);      
    }

    return (
        <nav className='container'>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        <li key={number} className={currentPage===number?`page-item active`:`page-item`} >
                            <a onClick={() => paginate(number)} className='page-link'> </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
