import {EmailShareButton, EmailIcon, FacebookIcon, FacebookShareButton} from "react-share";


function App() {

  return (
    <div className="App">
     <h1>hello</h1>
     <EmailShareButton subject="Test email" body="my name is <i>https://www.gmail.com</i>"  separator=" ">
     
     <EmailIcon size={32} round={true} />
     </EmailShareButton>



     {/* <FacebookShareButton url={shareUrl}>
     <FacebookIcon size={40}/>
    </FacebookShareButton> */}
    </div>
  );
}

export default App;
