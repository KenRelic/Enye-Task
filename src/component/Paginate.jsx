import ReactPaginate from 'react-paginate';
import './Paginate.css';

function Paginate(props) {
  return (
          <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={props.pageCount}
              marginPagesDisplayed={3}
              pageRangeDisplayed={1}
              onPageChange={props.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}/>
  )
}

export default Paginate;