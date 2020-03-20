import React ,{ Component } from "react";


class App extends Component{
  constructor() {
    super();
    this.state=
    {
      color: "red",
      doctors:
      [
        {
          "name":"Dr. Rohit",
          "rating" : 46
        }
        ,
        {
          "name":"Dr. shobhit",
          "rating" : 66
        }
        ,
        {
          "name":"Dr. Sunad",
          "rating" : 76
        }
      ]
    };
  }
  render () {
    return(
        <div>
            <ol>
                {
                    this.state.doctors.map((item, key) => {
                      if(item.rating<=50){
                        return <li key={key}>{item.name} <font color="red">{item.rating}</font></li>
                      }
                      if(item.rating>50 && item.rating<=72){
                        return <li key={key}>{item.name} <font color="yellow">{item.rating}</font></li>
                      }
                      if(item.rating>72 && item.rating<=100){
                        return <li key={key}>{item.name} <font color="green">{item.rating}</font></li>
                      }
                    })
                }
            </ol>
        </div>
    )
}

}

export default App;
