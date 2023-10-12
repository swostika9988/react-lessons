import './App.css';
import Card from './components/Card';
import contacts from './data/contacts';



function singleContact (contact){
  return(
    <Card 
    name={contact.name}
    img={contact.imgURL}
    phone={contact.phone}
    email={contact.email}
    />
  
  )
}




function App() {
  // const cardComponents = [];
  // for (let i = 0; i < contacts.length; i++) {
  //   const contact = contacts[i];
  //   cardComponents.push(
  //   <Card
  //       key={i}  // Add a unique key for each Card component
  //       name={contact.name}
  //       phone={contact.phone}
  //       email={contact.email}
  //       img={contact.imgURL}
  //     />
      
  //     );
  //   }
  return (
   
    <div>
      {contacts.map(singleContact)}
     
      {/* {cardComponents} */}
    
{/* 
       <Card
       name={contacts[0].name}
        phone={contacts[0].phone}
         email={contacts[0].email}
         img={contacts[0].imgURL}
         />
      
      <Card 
      name={contacts[1].name} 
      phone={contacts[1].phone}
      email={contacts[1].email}
      img={contacts[1].imgURL}
      />  
      
      <Card 
      name={contacts[2].name} 
      phone={contacts[2].phone}
      email={contacts[2].email}
      img={contacts[2].imgURL}
      /> 
      <Card 
      name={contacts[3].name} 
      phone={contacts[3].phone}
      email={contacts[3].email}
      img={contacts[3].imgURL}
      />     */}
    </div>
  );
}


export default App;
