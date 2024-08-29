import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setError, clearError, selectError } from '../../redux/slices/errorSlice';
import 'react-toastify/dist/ReactToastify.css';

const Error = () => {
	const errorMessage = useSelector(selectError)
	const dispatch = useDispatch()

	useEffect(() => {
		if(errorMessage) {
			toast.info(errorMessage)
			dispatch(clearError())
		}
	}, [errorMessage, dispatch]) 

   return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
