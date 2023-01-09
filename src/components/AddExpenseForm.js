import React,{useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
    const {dispatch} = useContext(AppContext);

    const [name,setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        //alert('name'+ name + ' cost' + cost);

        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
        setName('');
        setCost('');
    };

  return (
   <form onSubmit={onSubmit}>
    <div className='row'>
        <div className='col-sm col-lg-4'>
            <label for='name'>Name</label>
            <input
                 required='required'
                 type='text'
                 className='form-control'
                 id='name'
                value={name}
                onChange={(event)=>setName(event.target.value)}
                >
            </input>
        </div>
        <div className='col-sm col-lg-4'>
            <label for='cost'>Cost</label>
            <input 
                required='required'
                type='number'
                className='form-control'
                id='cost'
                value={cost}
                onChange={(event)=>setCost(event.target.value)}
                >
            </input>
        </div>
        </div>
        <div class='row mt-3'>
        <div className='col-sm'>
            <button type='submit' className='btn btn-primary'>
                Save
            </button>
        </div>
    </div>
   </form>
  );
};

export default AddExpenseForm