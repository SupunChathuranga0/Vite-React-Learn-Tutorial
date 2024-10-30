import './App.css'
import BodyContent from './Components/BodyContent/BodyContent';

import HeaderContent from './Components/HeaderContent/HeaderContent';

function App() {

  return (
    <>
    <div className="wrapper">
      <HeaderContent/>
      <BodyContent>
        <button>Click me</button>
      </BodyContent>
      <BodyContent >
        <div id='div2'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam molestias sequi distinctio quae itaque accusamus, voluptatibus fugiat, ea quidem libero alias nulla vitae, nihil aspernatur esse voluptas sunt? Nostrum.</p>
        <br/>
        <a href="http://www.google.com" >Google</a>
        </div>

      </BodyContent>


    </div>
      </>
  )
}

export default App;
