
export const Header = ( { storage } ) => {

  console.log(localStorage)
  console.log(storage)

  return (
    <header>
      <div className="logo"> 
        <h1>Pstudy <a className="a-blue bold">: :</a> <a className="a-green">Pomodoro</a></h1>
      </div> 
      <div className="hStudied">
        <ul>
          <li>
            <a className="a-greener">Hours Studied today:</a> <code> { storage.hoursToday }h </code>
          </li>
          <li>
            <a className="a-red">Total Hours Studied:</a> <code>{ storage.totalHours }h</code>
          </li>
        </ul>
      </div>
    </header>
  )
}

