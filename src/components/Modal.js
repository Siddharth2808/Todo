function Modal(props)
{
    return(
        <div className='modal'>
            <p>Are You Sure</p>
            <button className='btn btn--alt' onClick={props.cancelHandler}>Cancel</button>
            <button className='btn' onClick={props.confirmHandler}>Confirm</button>
        </div>
    )

}
export default Modal;