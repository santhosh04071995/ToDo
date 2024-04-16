import { useState } from "react";
import styles from "./MyHero.module.css";
let ids= 0;

export default function MyHero() {
    let [lists, setLists] = useState();
    let [myarry,setMyarry]= useState([]);
    
    
       function myfunc(id) {
        let newarray = myarry.filter(arry => {
            if (arry.id !== id) {
                return arry.id;
            }
            else {
                return null;
            }
        })
        setMyarry(newarray);
    }

    
   
    function addprocess() {
      
          ids++;  
        if (lists.trim() !== '') {
            myarry.push({id:ids,todo:lists});
            setMyarry([...myarry]);
            lists="";
            setLists(lists)
            console.log(myarry);
            
                }
        else {
            alert('its empty');
        }
    }
    let count = myarry.length;
    let  editable = true
    return (
        
        <div className="container">
             <p className={styles.info}>ToDo App with Editable, Deletable and countable list</p>   
            <p  className={` ${styles.mytxt} h3 bg-warning text-uppercase fw-bolder fs-1 text-center p-4`} >todo list</p>
 

            <div className="input-group mb-3">
                <input type="text" name="info" id="info" value={lists} onChange={(e)=> setLists(e.target.value)}  className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button type="button" className="text-light bg-warning border ml-4" onClick={addprocess}>Add</button>
            </div>
            <div className={styles.myspace}>
               
                {myarry.map((arry) => (
                    <ul className="list-group list-group-flush">

                        <li className="  mycls list-group-item d-flex justify-content-between" key={arry.id}> <p contentEditable={editable}>{arry.todo}</p>
                            <p  onClick={() => myfunc(arry.id)}>x</p>
                            {/* <i class="fa fa-close"></i> */}
                        </li>
                        <hr />
                    </ul>
                ))}
            </div>

            <div className="font-size-lg bg-warning text-uppercase fw-bolder fs-1 text-center p-2 ">
                <p>total todos: {count} </p>
                
            </div>

            </div>
            )
        }