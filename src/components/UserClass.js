import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Unknown",

        avatar_url: "http://dummy-photo.com",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    // This lifecycle method is called after the component updates
    // You can use it to perform actions based on prop or state changes
  }

  componentWillUnmount() {}

  render() {
    // console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>User Name: {name}</h2>
        <h3>Location: {location}</h3>
        <p>Contact: @sandep</p>
      </div>
    );
  }
}

export default UserClass;

/*
Mounting Lifecycle
  1. Constructor (dummy)
  2. Render (dummy)
          <html Dummy>
  3. Component Did Mount 
          <API Call>
          <this.setState> -> State Variable is updated

------------Update  (dummy) 

          render(API data)
          <HTML (new API data)>
          ComponentDid Update
This is how the whole lifecycle looks like:        

componentWillUnmount how this works:
1. Cleanup (e.g., cancel API calls, remove event listeners)
2. Prepare for component removal from the DOM

*/
