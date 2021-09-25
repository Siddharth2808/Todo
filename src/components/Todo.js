import { useState} from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props)
{const [modalIsOpen, setModalIsOpen] = useState(false);
    
    function cancelHandler()
    {
        setModalIsOpen(false);
    }
    function deleteHandler()
    {
        setModalIsOpen(true);
    }
    return(
    <div className='card'>
        <h2>{props.title}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        { modalIsOpen && <Modal cancelHandler={cancelHandler} confirmHandler={cancelHandler}/>}
        {modalIsOpen && <Backdrop onCancel={cancelHandler}/>}
    </div>
    )
}

export default Todo;