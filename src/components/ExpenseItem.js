import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = new Date(2021, 4, 28);
  const expenseTitle = 'Car Insuarnce'
  const expenseAmount = 294.67

  return (
    <div className="expense-item">
        <div>
            <div>{props.item.date.toLocaleString('en-US',{month:'long'})}</div>
            <div>{props.item.date.getFullYear()}</div>
            <div>{props.item.date.toLocaleString('en-US',{day:'2-digit'})}</div>
        </div>
      
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
      </div>
      <div className="expense-item__price">{props.item.amount}</div>
    </div>
  );
}

export default ExpenseItem;
