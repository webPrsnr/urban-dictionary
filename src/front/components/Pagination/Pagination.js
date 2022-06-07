import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="&raquo;"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="&laquo;"
      renderOnZeroPageCount={null}
      className={styles.page_item}
      previousClassName={styles.page_link}
      nextClassName={styles.page_link}
      pageClassName={styles.page_link}
      activeClassName={styles.page_active}
      pageLinkClassName={styles.page_elem}
      //   pageLinkClassName={styles.page_link}
    />
  );
};

export default Pagination;
