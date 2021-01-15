import './Card.css'


// let style = {borderBottomColor:'orange',boxShadow:''}

// function handleMouseOver(){
//   return style = {borderBottomColor:'orange',boxShadow:'0 0 10px #aaaaaaaf'};
// }

// function handleMouseLeave(){
//   return style = {borderBottomColor:'orange',boxShadow:''};
// }


function Card(props){
  let {FirstName,LastName,Gender,Email, UserName,PhoneNumber,URL,LastLogin,MacAddress,DomainName,CreditCardNumber,CreditCardType,PaymentMethod,Latitude,Longitude} = props.data;
  // console.log(data)
 let style = {borderBottomColor:'orange',boxShadow:''}
  switch(PaymentMethod){
    case 'money order': style.borderBottomColor = 'rebeccapurple';
    break;
    case 'paypal': style.borderBottomColor = 'blue';
    break;
    case 'check': style.borderBottomColor = 'green';
    break;
    default:style.borderBottomColor = 'orange';
      break;
  }

  return(
    <div className="card" 
    style={style} 
  >
      <p className='name'>{FirstName +' '+ LastName}</p>
      <p className='gender'><span className="heading">Gender</span>  : {Gender}</p>
      <p className='username'><span className="heading">Username</span> : {UserName}</p>
      <p className='emal'><span className="heading">Email</span>  : {Email}</p>
      <p className='phone'><span className="heading">Phone Number</span>  : {PhoneNumber}</p>
      <p className='url'><span className="heading">URL</span>  : {URL}</p>
      <p className='domainName'><span className="heading">Domain Name</span>  : {DomainName}</p>
      <hr/>
      <p className='lastLogin'><span className="heading">Last Login</span>  : {LastLogin}</p>
      <p className='macAddress'><span className="heading">Mac Address</span>  : {MacAddress}</p>
      <p className='long'><span className="heading">Longitude</span>  : {Longitude}</p>
      <p className='lat'><span className="heading">Latitude</span>  : {Latitude}</p>
      <hr/>
      <p className='creditCardNum'><span className="heading">Credit Card Number</span>  : {CreditCardNumber}</p>
      <p className='creditCardType'><span className="heading">Credit Card Type</span>  : {CreditCardType}</p>
      <p className='paymentMethod'><span className="heading">Payment Method</span>  : {PaymentMethod}</p>
    </div>
  )
}

export default Card