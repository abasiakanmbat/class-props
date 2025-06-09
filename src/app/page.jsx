import Greeting, { Buttons } from "./greeting";

export default function Home() {
  
// let user = {
//   name: "John Doe",
//   age: 30,
//   email: "john.doe@example.com"
// }

  return (
    <div className="space-y-5">
      hello world <Buttons bg={'green'}/>
      <Greeting 
      name={'Richard'} 
      age={25} 
      email={'richard@example.com'} 
      buttonBg={'blue'}/>

      <Greeting 
      name={'Testimony'} 
      age={24} 
      email={'testimony@example.com'} 
      buttonBg={''}/>

      <Greeting 
      name={'Gabriel'} 
      age={26} 
      email={'gabriel@example.com'} 
      buttonBg={''}/>
    </div>
  );
}




export function SayHello() {
  return (
    <div>
      <h1>My name is Tesimony</h1>
    </div>
  )
}
