import Todoitem from "./Todoitem";
const TodoItems=({todoItems})=>{
    return (<div className="items-container">
        {todoItems.map(item=><Todoitem tododate={item.dueDate} todoName={item.name}></Todoitem>)}
            
            
          </div>);
}
export default TodoItems;