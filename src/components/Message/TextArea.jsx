
import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

import { io } from "socket.io-client";
import axios from "axios";
import { chatActions } from "../../assets/store/chatSlice";
import {useDispatch} from 'react-redux'  

function TextArea(props) {
  console.log('text',props)

  const dispatch= useDispatch();
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
        const date=new Date()

        console.log(props.messageId)
    
      axios.post('http://localhost:3500/addMessage',{
        message:msg,
        from:props.from,
        to:props.to
      }).then((res)=>{
        console.log(res.data)

        axios.post('http://localhost:3500/updateMessageList',{
          messageId:props.messageId,
          date:date,
          message:msg
        }).then((res)=>{
          console.log(res.data)
          if(res.data.message==='success'){
             props.socket.current.emit('send-msg',{
          to:props.to,
          from:props.from,
          msg:msg,
          room:props.messageId,
          date:date.toISOString()
        })
        
          
           
dispatch(chatActions.changeHandler({date:date.toISOString()}))
          }
        }).catch(e=>console.log(e))
        setMsg("");
        props.setData(prev=>[...prev,{fromSelf:true,message:msg}])
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

          <textarea
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
    background-color: #202c33;
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
          color: #7e8e99;
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
      color:white;
      padding-left: 30px;
      display: grid;
      grid-template-columns: 80% 20%;
      margin: 10px 0;
      width: 100%;
      border-radius: 60rpx;
      /* display: -webkit-box; */
      /* display: -webkit-flex; */
      display: -ms-flexbox;
      /* display: flex; */
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      /* gap: 2rem; */
      background-color: transparent;
      textarea {
        color:white;
        width: 100%;
        height: 100%;
        border-radius:3px;
        background-color: #2b3842;
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
        background-color: transparent;
        border: none;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          padding: 0.3rem 1rem;
          svg {
            font-size: 1rem;
          }
        }
        svg {
          font-size: 2rem;
          color: #7e8e99;
        }
      }
    }
  `;
export default TextArea