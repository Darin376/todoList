import React from 'react';
import "./TodoListStyle.css";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, postLoad } from "../../Redux/actions";
import uniqid from 'uniqid'
import { pagesObgProducts } from '../../Data/data'
import { PostOutput } from '../PostOutout/PostOutput';
import Spinner from '../../Spinner/spinner';

export const TodoList = () => {

    const [inputText, setInputText] = useState('');
    const [pagesAll, setPagesAll] = useState(1);
    const [postPage, setPostPage] = useState(null);
    const dispatch = useDispatch();

    const textReduser = useSelector((state) => {
        const { ReducerText } = state;
        return ReducerText.post
    });

    useEffect(() => {
        setPostPage(pagesObgProducts(textReduser))
    }, [textReduser.length, pagesAll]);

    const addText = (e) => {
        setInputText(e.target.value)
    };
    const addPosButton = () => {
        let textSearch = inputText.trim()
        if (!textSearch) {
            alert('please write text')
        } else {
            const id = uniqid();
            dispatch(addPost(inputText, id))
        }


    };

    if (!postPage?.productsNew.length) return <Spinner />

    if (!postPage.productsNew[pagesAll - 1]) {
        setPagesAll(pagesAll - 1)
    }

    return <div className='todoListWrapper' >
        <div>
            <div className='todoListSearchWrapper' >
                <input className="headerInput"
                    placeholder="new post"
                    type='text'
                    value={inputText}
                    onChange={addText}
                />
                <button onClick={addPosButton}>Add Postt</button>
            </div>
            <div >
                <ul className='todoListContentPost'>
                    <PostOutput postPage={postPage} pagesAll={pagesAll} />
                </ul>
                <div className='todoListContent'>
                    {postPage.quantityPages.map((item, index) => (
                        <span key={index} className={pagesAll === item ? "CategoriesPagesActiv" : "CategoriesPages"} onClick={() => { setPagesAll(item) }}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
}