const Hello = (props) => {
   return  (
       <div>
            <h3>{props.type}</h3>
            <p>{props.children}</p>
       </div>
      
   );   
}

export default Hello;