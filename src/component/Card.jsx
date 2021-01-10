import './Card.css'

function Card(props){
  let {FirstName,LastName,Gender,Email, UserName,PhoneNumber,URL,LastLogin,CreditCardNumber,CreditCardType,Latitude,Longitude} = props.data;
  // console.log(data)
  return(
    
    <div className="card-wrapper">
      <p className='name'>{FirstName +' '+ LastName}</p>
      <p className='gender'><span className="heading">Gender</span>  : {Gender}</p>
      <p className='username'><span className="heading">Username</span> : {UserName}</p>
      <p className='emal'><span className="heading">Email</span>  : {Email}</p>
      <p className='phone'><span className="heading">Phone Number</span>  : {PhoneNumber}</p>
      <p className='url'><span className="heading">URL</span>  : {URL}</p>
      <p className='creditCardNum'><span className="heading">Credit Card Number</span>  : {CreditCardNumber}</p>
      <p className='creditCardType'><span className="heading">Credit Card Type</span>  : {CreditCardType}</p>
      <p className='lastLogin'><span className="heading">Last Login</span>  : {LastLogin}</p>
      <p className='long'><span className="heading">Longitude</span>  : {Longitude}</p>
      <p className='lat'><span className="heading">Latitude</span>  : {Latitude}</p>
    </div>
  )
}

export default Card