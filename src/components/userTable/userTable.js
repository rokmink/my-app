import React, {useState,setState} from 'react';
import './userTable.css'
function UserTable() {


    const [chosenTime, setChosenTime] = useState(null);
    const [requirements, setRequirements] = useState(null);

    fetch('http://localhost:8080/orders/' + new URLSearchParams({
            id: window.id
    }))
    

    return(

        <div className='flex-conatainer'>
            <div className='flex-items-container'>
             <h1>Order menu</h1>
                <div className='form-container'>
            
                    <form>
                        <label>Id  <input readOnly={true} value="text" name="name" /></label>
                        <label>Data  <input readOnly={true} value="text" /></label>
                        <label>Order name  <input readOnly={true} value="text" /></label>
                        <label>Order state  <input readOnly={true} value="text" /></label>
                            <div className='button-container'>
                            <button>Edit</button>
                            <button>Preview</button>
                            </div>
                    </form>
                    

                    
              

                </div>
            </div>
        </div>

      
    )
}
export default UserTable;