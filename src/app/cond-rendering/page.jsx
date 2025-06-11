import React from 'react'
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];


export  function ConsumeObj() {
  const filteredPeople = people.filter(people=>people.profession=='chemist')
  return (
    <div>
      <h1>Mapping items</h1>
      <div className='grid w-fit mx-auto grid-cols-1 md:grid-cols-3   gap-3'>

      {people.map((personData)=>
    <section key={personData.id} className='border w-[350px] p-4'>
        key: {personData.id}
        <h2 className='text-blue-500'>{personData.name}</h2>
        <p>{personData.profession}</p>
      </section>
      )}

  
      </div>
      <h1>Filtered items</h1>
      <div className='grid w-fit mx-auto grid-cols-1 md:grid-cols-3   gap-3'>

      {filteredPeople.map((personData)=>
    <section key={personData.id} className='border w-[350px] p-4'>
        key: {personData.id}
        <h2 className='text-blue-500'>{personData.name}</h2>
        <p>{personData.profession}</p>
      </section>
      )}

  
      </div>
      {/* <section className='border w-fit p-4'>
        key: id
        <h2 className='text-blue-500'>Subrahmanyan Chandrasekhar</h2>
        <p>astrophysicist</p>
      </section> */}

    </div>
  )
}







export default function page() {
  return (
    <div className='p-5'>
      <ConsumeObj/>
{/*       
      <h1 className='text-blue-500'>A Packing List</h1>

      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item
        name={'Testimony bag '}
        isPacked={false}
        />

        <Item
        name={'Geepee laptop'}
        isPacked={true}
        />


        
      
      </ul> */}
  
    </div>
  )
}

export function Item({ name, isPacked }) {
  // if(isPacked)  return <li>{name} ✅</li>;

  // return <li>{name}</li>

  // return <li>{name} {(isPacked)?'✅':''} </li>

  return <li>{name} {isPacked && '✅'} </li>
}

