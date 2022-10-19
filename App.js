// import React, { Component } from "react";
// import { Text, View } from "react-native";

// export default class App extends Component{

//   state ={
//     myState: "Initial State"
//   }
//   updateState=() => this.setState({myState: 'The state is updated'})  

//   render()

//   {
//     let Dat = new Date();
// console.log(Dat);
//     return(
//       <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//         <Text onPress={this.updateState}>{this.state.myState}</Text>
//       </View>
//     );
//   }
// }

// import React, { Component } from "react";
// import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";


// export default class App extends Component {



//   constructor(props) {
//     super(props);

//     this.state = {
//       password: "",
//       isPasswordVisible: true,
//       toggleText: 'Show'
//     };
//   };

//   handleToggle = () => {
//     const { isPasswordVisible } = this.state;
//     if (isPasswordVisible) {
//       this.setState({ isPasswordVisible: false });
//       this.setState({ toggleText: "Hide" })
//     } else {
//       this.setState({ isPasswordVisible: true });
//       this.setState({ toggleText: 'Show' })
//     }

//   };

//   render() {
//     let d = new Date();  
//     let a=d.toString(); 
//      console.log(a);
//     return (
//       <View style={styles.container}>
//         <TextInput style={styles.textInputConatiner}
//           secureTextEntry={this.state.isPasswordVisible} />
//         <TouchableOpacity onPress={this.handleToggle}>
//           <Text style={{ fontSize: 20 }}>{this.state.toggleText}</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },

//   textInputConatiner: {
//     width: "90%",
//     height: 50,
//     backgroundColor: 'lightblue',
//     color: 'white',
//     fontSize: 20,
//   }
// });

// import React, { Component } from "react";
// import {
//   Text,
//   View,
//   Platform,
//   StyleSheet,
//   Image,
// } from "react-native";

// class Child extends Component{

//   render(){
//     // console.log(this.props.print('nikhil'))
//     return(
//       <View> 
//         <Text>{this.props.name}</Text>
//       </View>
//     )
//   }

// }

// export default class Parents extends Component{

//   render(){
//     // function printName(text){
//     //   const n=text+"nj"
//     //   console.log(n)
//     // }
//     return(
//       <View style={styles.container}>
//         <Child name={'hello'} />
//         <Child name={'hello'} />
//         <Child name={'hello'} />
//       </View>
//     )
//   }
// }


// const styles = StyleSheet.create({  
//   container: {  
//     flex: 1,  
//     justifyContent: 'center',  
//     alignItems: 'center',  
//      backgroundColor:"#fff"
//   },  
//   welcome: {  
//     fontSize: 30,  
//     textAlign: 'center',  
//     margin: 20,  
//   }  
// });  

// import React , {Component} from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// export default class Student extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       name: "Nikhil",
//       age: 25
//     };
//   };

//   handleClick = () =>{
//     // console.log("Button Clicked", this);
//     this.setState({name:"shubham",age:30})
//   };

//   render(){
//     return(
//       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//         <Text>{this.state.name} + {this.state.age}</Text>
//         <TouchableOpacity 
//         onPress={this.handleClick}
//         style={{backgroundColor:'red', padding:10, borderRadius:10, marginTop:10 }}>
//           <Text>Click Me</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// export default class App extends React.Component {
//   state = {
//     value: 0,
//     total_count: 0,
//   };

//   incrementValue = () => {
//     this.setState({
//       value: this.state.value + 1,
//       total_count: this.state.total_count + 1
//     })
//     console.log("Values: " + (this.state.value + 1));
//   };

//   decrementValue = () => {
//     this.setState({
//       value: this.state.value - 1,
//       total_count: this.state.total_count + 1,
//     })
//     console.log("values: " + (this.state.value - 1));
//   };



//   render() {
//     return (

//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , }}>
//         <View style={{backgroundColor:'lightblue', padding:30, borderRadius:20,justifyContent: 'center', alignItems: 'center' ,}}>
//         <Text style={{ fontSize: 60, }}>{this.state.value}</Text>
//         <Text style={{ fontSize: 20 }}>Total Taps: {this.state.total_count}</Text>
//         <View style={{ flexDirection: 'row', paddingTop: 20 }}>
//           <TouchableOpacity
//             style={{
//               padding: 20,
//               backgroundColor: 'red',
//               borderRadius: 8
//             }}
//             onPress={this.decrementValue}
//           >
//             <Text>DECREASE</Text>
//           </TouchableOpacity>


//           <TouchableOpacity style={{
//             padding: 20,
//             backgroundColor: 'lightgreen',
//             borderRadius: 8,
//             marginLeft: 40
//           }}
//             onPress={this.incrementValue}
//           >
//             <Text>INCREASE</Text>
//           </TouchableOpacity>


//         </View>
//         </View>
//       </View>

//     )
//   }
// }


// import React from 'react';
// import { View, TouchableOpacity, StyleSheet } from 'react-native';

// export default class ColoBox extends React.Component {
//   constructor(props){
//         super(props);
//         this.state = {
//          value1: '0'
//         };
//       };

//       changeValue = () =>{

//        this.setState({
//         value1:'1'
//       })
//       };
//       changeValue1 = () =>{

//         this.setState({
//          value1:'2'
//        })
//        };
//        changeValue2 = () =>{

//         this.setState({
//          value1:'3'
//        })
//        };
//   render() 
//   {


//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
//         <View style={{ flexDirection: 'row', }}>


//           <TouchableOpacity
//             style={{
//               backgroundColor: (this.state.value1 == "1" && this.state.value1 == '0')|| this.state.value1 == "3" ? "red" : 'black',
//               marginRight: 20,
//               padding: 30
//             }}
//             onPress={this.changeValue}>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={{
//               backgroundColor: (this.state.value1 == "2" && this.state.value1 == "0") || this.state.value1 == "1" || this.state.value1 == "3" || this.state.value1 == "2" ? "red" : 'black',
//               marginRight: 20,
//               padding: 30
//             }}
//             onPress={this.changeValue1}>
//           </TouchableOpacity>

//           <TouchableOpacity style={{
//             backgroundColor: (this.state.value1 == "3" && this.state.value1 == "0") || this.state.value1 == "1" ? "red" : 'black',
//             marginRight: 20,
//             padding: 30
//           }}
//             onPress={this.changeValue2}>
//           </TouchableOpacity>



//         </View>
//       </View>
//       // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

//       //   <View style={{ padding: 10 }}>
//       //     <TouchableOpacity
//       //       onPress={() => {
//       //         this.setState({ active: 2  });

//       //        }}

//       //       style={this.state.active === 1 ? styles.btn : styles.btnAct}>

//       //     </TouchableOpacity>
//       //   </View>

//       //   <View style={{ padding: 10 }}>
//       //     <TouchableOpacity
//       //       onPress={() => {
//       //        this.setState({ active: 1  });

//       //       }}
//       //       style={this.state.active === 2 ? styles.btn : styles.btnAct}>

//       //     </TouchableOpacity>
//       //   </View>

//       //   <View style={{ padding: 10 }}>
//       //     <TouchableOpacity
//       //       onPress={() => { 
//       //         this.setState({ active: 2 });
//       //                  }}
//       //       style={this.state.active === 3 ? styles.btnAct : styles.btn}>

//       //     </TouchableOpacity>
//       //   </View>



//       // </View>
//     )
//   }
// }
// const styles = StyleSheet.create({

//   btn: {
//     backgroundColor: 'red',
//     padding: 30,
//   },
//   btnAct: {
//     backgroundColor: 'black',
//     padding: 30,
//   },

// });

// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, } from "react-native";

// export default App = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [isActive1, setIsActive1] = useState(true);
//   const [isActive2, setIsActive2] = useState(true);

//   const handleClick1 = () => {
//      setIsActive(false);
//     setIsActive1(true);
//     setIsActive2(true);

//   };
//   const handleClick2 = () => {
//      setIsActive(true);
//     setIsActive1(false);
//     setIsActive2(true);
//   };
//   const handleClick3 = () => {
//     setIsActive2(true);
//     setIsActive1(true);
//     setIsActive2(false);
//   };



//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>

//       <TouchableOpacity
//         style={{
//           backgroundColor: isActive ? 'red' : 'black',
//            padding: 30,
//            marginRight:20
//         }}
//         onPress={() => handleClick1()}>
//        </TouchableOpacity>
//       <TouchableOpacity
//         style={{
//           backgroundColor: isActive1 ? 'black' : 'red',
//            padding: 30,
//            marginRight:20
//         }}
//         onPress={() => handleClick2()}>
//        </TouchableOpacity>
//       <TouchableOpacity
//         style={{
//           backgroundColor: isActive2 ? 'black' : 'red',
//            padding: 30
//         }}
//         onPress={() => handleClick3()}>
//        </TouchableOpacity>

//     </View>
//   )
// }

import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

export default App = () => {

  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(true);

  const function1 = () => {
    console.log("1st");
    if (isActive == true) {
      console.log("1st true");
      setIsActive(true);
      setIsActive1(false);
      setIsActive2(false);
    }
    else {
      console.log("1st false");
      setIsActive1(true);
      setIsActive2(true);
    }
  };

  const function2 = () => {
    console.log("2nd");
    if (isActive1 == true) {
      console.log("2st true");
      setIsActive(false);
      setIsActive1(true);
      setIsActive2(false);
    }
    else {
      console.log("2st false");
      setIsActive(true);
      setIsActive2(true);
    }
  };

  const function3 = () => {
    console.log("3rd");
    if (isActive2 == true) {
      console.log("3st true");
      setIsActive(false);
      setIsActive1(false);
      setIsActive2(true);
    }
    else {
      console.log("3st false");
      setIsActive(true);
      setIsActive1(true);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            backgroundColor: isActive == true ? "black" : "red",
            padding: 30,
            marginRight: 20
          }}
          onPress={() => { function1() }}>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: isActive1 == true ? "black" : 'red',
            padding: 30,
            marginRight: 20
          }}
          onPress={() => { function2() }}>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: isActive2 == true ? "black" : 'red',
            padding: 30
          }}
          onPress={() => { function3() }}>

        </TouchableOpacity>
      </View>
    </View>
  )
}