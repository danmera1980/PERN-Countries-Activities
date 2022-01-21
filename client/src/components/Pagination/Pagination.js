/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Pagination.scss';

export const Pagination = ({ countriesPerPage, totalCountries, currentPage, firstPage, paginate }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil((totalCountries-firstPage) / countriesPerPage)+1

    for (let i = 0; i <= totalPages; i++) {
        pageNumbers.push(i);      
    }

    return (
        <nav className='container' data-pagination>
            <ul className='pagination'>
                {currentPage>1?<li><a onClick={() => paginate(currentPage-1)} className='page-link'>Previous</a></li>:null}
                {
                    pageNumbers.map(number => (
                        number!==0?
                        <li key={number} className={currentPage===number?`page-item active`:`page-item`} >
                            <a onClick={() => paginate(number)} className='page-link'> {number} </a>
                        </li>:null
                    ))
                }
                {currentPage< totalPages?<li><a onClick={() => paginate(currentPage+1)} className='page-link'>Next</a></li>:null}
            </ul>
        </nav>
    )
}
