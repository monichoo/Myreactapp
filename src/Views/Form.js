import React from 'react'
import SignUpForm from '../Components/SignUpForm'

function Form(){
    return(
        <div className="w-full w-full max-w-lg">
            <h1 className="font-bold text-2xl w-full mb-4"> Sign up form</h1>
            <div class="flex mb-4"></div>
            <SignUpForm />
        </div>
    );
}

export default Form
