import './SampleText.css'

export function NoResult(){
  return(
    <div className="noResult">
      <h3>No Result Matched</h3>
    </div>
  )
}

export  function FetchingData(){
  return(
    <div className="fetchingData">
      <h3>Fetching Data...</h3>
    </div>
  )
}