import React from "react";  

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     count:0,
        //     count2: 2,
        // };
        //console.log("Child Constructor")
        

        this.state = {
            userInfo: {
              name: "Dummy",
              location: "Defult",
            },
        };
    }

     async componentDidMount() {
        //console.log("Child Component Did Mount")
        // APi call 

        const data = await fetch("https://api.github.com/users/sushantgodase10");
        const json = await  data.json();
 
        this.setState({
         userInfo: json,
        });
 
        console.log(json);
    }

    render() {
        const {name, location,avatar_url} = this.state.userInfo;
        //console.log("Child Render")

        return (
            <div className="user-card">
                {/* <h1>Count: {count}</h1>
                <button
                onClick={() => {
                    this.setState({
                        count: this.state.count +1,
                    });
                }}
                >Count Increase</button> */}
              <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Loaction: {location}</h3>
                <h4>Contact: @Sushant</h4>
            </div>
        )
    }
} 


export default UserClass;
