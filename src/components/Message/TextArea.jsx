
import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";
// import {useDispatch} from 'react-redux'
// import { messageActions } from "../assets/store/messageSlice";
import { io } from "socket.io-client";
import axios from "axios";
// const socket=io('http://localhost:3001')  

function TextArea(props) {
  // const dispatch= useDispatch();
    const [msg, setMsg] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const handleEmojiPickerhideShow = () => {
      setShowEmojiPicker(!showEmojiPicker);
    };
  
    const handleEmojiClick = (event, emojiObject) => {
      let message = msg;
      message += emojiObject.emoji;
      setMsg(message);
    };
  
    const sendChat = (event) => {
      event.preventDefault();
      if (msg.length > 0) {
      //  setMsg(event.target.value)
      // socket.emit('send-message',msg)  
      //  dispatch(messageActions.addMessage({message:msg,from:1}))
      axios.post('http://localhost:4000/addMessage',{
        message:msg,
        from:props.from,
        to:props.to
      }).then(()=>{
        
        setMsg("");
      }).catch(e=>{
        console.log(e)
      })
      }
    };
  
    return (
      <Container>
        <div className="button-container">
          <div className="emoji">
            <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
            {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
          </div>
        </div>
        <form className="input-container" onSubmit={(event) => sendChat(event)}>
          <input
            type="text"
            placeholder="type your message here"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            multiple
          />
          <button type="submit" style={{marginLeft:'100px'}}>
            <IoMdSend />
          </button>
        </form>
      </Container>
    );
  }
  
  const Container = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 10% 90%;
    background-color: rgb(255,254,254);
    padding: 0 2rem;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      padding: 0 1rem;
      gap: 1rem;
    }
    .button-container {
      display: flex;
      align-items: center;
      color: white;
      gap: 1rem;
      .emoji {
        position: relative;
        svg {
          font-size: 1.5rem;
          color: black;
          cursor: pointer;
        }
        .emoji-picker-react {
          position: absolute;
          top: -350px;
          background-color: #080420;
          box-shadow: 0 5px 10px #9a86f3;
          border-color: #9a86f3;
          .emoji-scroll-wrapper::-webkit-scrollbar {
            background-color: #080420;
            width: 5px;
            &-thumb {
              background-color: #9a86f3;
            }
          }
          .emoji-categories {
            button {
              filter: contrast(0);
            }
          }
          .emoji-search {
            background-color: transparent;
            border-color: #9a86f3;
          }
          .emoji-group:before {
            background-color: #080420;
          }
        }
      }
    }
    .input-container {
        padding-left:30px;
      width: 100%;
      border-radius: 2rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      background-color: rgb(239,238,238);
      input {
        width: 90%;
        height: 60%;
        background-color: transparent;
        color: black;
        border: none;
        padding-left: .5rem;
        font-size: 1.2rem;
        &::selection {
          background-color: #9a86f3;
        }
        &:focus {
          outline: none;
        }
      }
      button {
        padding: 0.3rem 1rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(255,254,254);
        border: none;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          padding: 0.3rem 1rem;
          svg {
            font-size: 1rem;
          }
        }
        svg {
          font-size: 2rem;
          color: black;
        }
      }
    }
  `;
export default TextArea