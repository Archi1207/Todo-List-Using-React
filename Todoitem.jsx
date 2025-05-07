function Todoitem({todoName ,tododate}) {
  
  return (
    <div className="container ">
      <div className="row ag-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2 ">
          <button type="button" className="btn btn-danger ag-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
