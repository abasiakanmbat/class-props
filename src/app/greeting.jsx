'use client'
export default function Greeting({name, age, email, buttonBg}) {
  return (
    <div className=" bg-green-500  p-5 rounded-lg w-[300px] ">
      <h1 className="font-bold text-2xl ">CLASS CARD</h1>
     Name: {name}  <br />
     Age: {age}  <br />
     Email: {email}  <br />

<Buttons bg={buttonBg}/>

    </div>
  )
}


export  function Buttons({onClick, bg}) {
  return (
    <button onClick={onClick} className={`rounded-lg p-2 cursor-pointer border hover:border-transparent  hover:bg-red-500 transition-all duration-300`} 
    style={{backgroundColor: bg}}
    >
      Click Me
    </button>
  )
}
