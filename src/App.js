import React from 'react';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          <ul className="nav navbar-nav">
              <li className="nav-item active">
                  <a className="nav-link">CALL API</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link">Trang chủ</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link">Quản lý sản phẩm</a>
              </li>
          </ul>
      </nav>

      <div className="container-fluid">
        <h1 className="display-4 my-4 text-info">List of products</h1>
        <button type="button" className="btn btn-primary mb-1">Thêm sản phẩm</button>
        <table className="table table-striped" id="users" style={{width: '100%'}}>
          <thead>
            <tr id="list-header">
              <th scope="col">ID</th>
              <th scope="col">Mã Sản Phẩm</th>
              <th scope="col">Tên Sản Phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>  
          <tbody>  
            <tr>
              <td>1</td>
              <td>SS</td>
              <td>SS</td>
              <td>123321</td>
              <td>
                <span className="badge badge-info">
                  còn hàng
                </span>
              </td>
              <td>
                <button type="button" className="btn btn-success">Sửa</button>
                <button type="button" className="btn btn-danger">Xóa</button>
              </td>
            </tr>    
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default App;
