import React from 'react';
import './Pagination.css'

const Pagination:React.FC = () => {

  /*
this javascript is only to change the "actpage" attribut on the .cdp div
*/

  // window.onload = function(){
  //   var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
  //   $('.cdp_i').on('click', function(){
  //     var go = $(this).attr('href').replace('#!', '');
  //     if (go === '+1') {
  //       paginationPage++;
  //     } else if (go === '-1') {
  //       paginationPage--;
  //     }else{
  //       paginationPage = parseInt(go, 10);
  //     }
  //     $('.cdp').attr('actpage', paginationPage);
  //   });
  // };
  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#" >Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active">
            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;