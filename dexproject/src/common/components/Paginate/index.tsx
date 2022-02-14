import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useState, FC } from "react";

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none
  li a {
    width:40px;
    height:40px;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    border-radius: 4px;
    cursor: pointer;
    margin-right:16px;
  }
  
  li.active a {
    background-color: var(--red);
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

interface Props{}

export const Paginate:FC<Props> = () => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = () => {};

  return (
    <MyPaginate
      pageCount={27}
      onPageChange={handlePageClick}
      forcePage={activePage}
      pageRangeDisplayed={1}
    />
  );
};
