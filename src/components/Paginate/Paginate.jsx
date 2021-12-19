import React from "react";
import { Pagination } from "react-bootstrap";

const Paginate = ({activePage, setActivePage, pages}) => {
  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item 
      key={number} 
      active={number == activePage}
      onClick={() => setActivePage(number)}>
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination size="sm">{items}</Pagination>;
};

export default Paginate;