
function App() {

  const firstname = "Supun";
  const middlename = "Chathuranga";
  const lastname = "Jayasooriya";
  const age = "16";
  const country = "Australia";

  const getFullName = (f,m,l) =>{
    return `${f} ${m} ${l}`;
  }

  const arr = ["apple", "Tamarind", "Brinjal"];
  const lang = 
  <ul>
  <li>HTML</li>
  <li>Java</li>
  <li>Python</li>
  <li>React</li>
  </ul>;

  const pobj = {
    fname : "Jay",
    age : "18 "

  };


  return (
    <>
    <div className="const">
    <h1 className="heading">Employee Details</h1>
    <p>Full Name:{firstname} {middlename} {lastname}</p>
    <p>Full Name function:{getFullName("nick", "steave","john")} {
      
    }</p>
    <p>Age : {pobj.age}</p>
    <p>Country: {country}</p>
    <p>{firstname} like to eat {arr[0]}</p>
    <p>{middlename} like to eat {arr[2]}</p>

    <p>Frontend Languages</p>
    {lang}
    <p>{pobj.fname} is {pobj.age} Years old</p>



    </div>



      </>
  )
}

export default App;
