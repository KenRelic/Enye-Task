
import './Filter.css';

function FilterSearch(props){
    return(
    <div className="filter-wrapper">
      <label htmlFor="">Filter</label>
      <input type="search" name="name" placeholder="Search by Name"
       onChange={(e)=>handleOnChange(e,props)} value={props.nameValue} />
      <select name="gender" id="gender-filter"
      onChange={(e)=>handleOnChange(e,props)}>
        <option value="All gender" defaultValue>All Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Prefer to skip">Prefer to skip</option>
      </select>
      <select name="payment-method" id="payment-method"
      onChange={(e)=>handleOnChange(e,props)}>
        <option value="All payment method" defaultValue>All payment method</option>
        <option value="money order">Money Order</option>
        <option value="paypal">Paypal</option>
        <option value="check">Check</option>
        <option value="cc">CC</option>
      </select>
    </div>
  )
}

function handleOnChange(e, props) {

  //search the profile data set and filter out only the one meeting the criteria
  //the pass into the filtered data set
  let value = e.target.value
  if(e.target.name === 'gender'){
    props.handleStateChange[0](value);
  }else if(e.target.name === 'payment-method'){
    props.handleStateChange[1](value);
  }else{
    props.handleStateChange[2](value);
  }
}

export default FilterSearch;