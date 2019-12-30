import React from 'react';
import Input from './Input';
import Button from './Button';


export default function InputForm({ url, setUrl, onClick }) {
    
    return <form className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
        <fieldset id="sign_up" className="ba b--transparent">
            <legend className="f4 fw6 ph0 mh0 pt4">Sign In</legend>
            <Input url={url} setUrl={setUrl}/>
            <Button onClick={onClick}/>
        </fieldset>
        </form>
}