//Register.jsx
import { useState, useRef } from "react";

// 입력 받는것
// 이름, 생년원일. 국적, 자기소개 


const Register = () => {
    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : ""
    })

    const countRef = useRef(0)
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current)
        
        // count++
        // console.log(count)
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = () => {
        if (input.name=== "") {
            //이름을 입력하는 DOM 요소 포커스
            // console.log(inputRef.current)
            inputRef.current.focus()
        }
    }

    return (
        <>
        <div>
            <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
            <p>{input.name}</p>
        </div>
        <div>
            <input name="birth" type="date" onChange={onChange} value={input.birth}/>
            <p>{input.birth}</p>
        </div>
        <div>
            <select name="country" value={input.country} onChange={onChange}>
                <option></option>
                <option>미국</option>
                <option value="kr">한국</option>
                <option>영국</option>
            </select>
            <p>{input.country}</p>
        </div>
        <div>
            <textarea name="bio" value={input.bio} onChange={onChange}/>
        </div>
        <button onClick={onSubmit}>제출</button>
        </>
    )
}

export default Register