import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar title="Mobile" color="green" links={["vivo",'oneplus','samsung','oppo']}/>
      <Navbar title="Apple" color="orange" links={["iphone","Macbook",'ipad','iwatch']}/>
      <Navbar title='Boat' color="pink" links={['buds','earphone','neckband','watch']} />
    </div>
  )
}

export default App