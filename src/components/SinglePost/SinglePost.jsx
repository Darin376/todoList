import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postUpdate, postDelite } from "../../Redux/actions";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import './SinglePostStyle.css';


export const SinglePost = ({ item }) => {
  const dispatch = useDispatch();
  const { id, post } = item;
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (post) {
      setInputText(post)
    }
  }, [post])

  const comentChange = (e) => {
    setInputText(e.target.value)
  }


  const handleupdate = (e) => {
    e.preventDefault();
    dispatch(postUpdate(inputText, id))

    alert(`Post changed to:   ${inputText}`)
  }
  const handleDelite = (e) => {
    e.preventDefault();

    dispatch(postDelite(id))

  }
  return <div className='singlePostWrapper'>
    <form onSubmit={handleupdate}>
      <textarea type='text' value={inputText} onChange={comentChange} className="singlePostInput"></textarea>
      <div className='singlePostButton' >
        <button>Change Post</button>
        <DeleteSweepIcon onClick={handleDelite} style={{ fontSize: '26', cursor: 'pointer' }} />
      </div>
      <hr />
    </form>
  </div>
}