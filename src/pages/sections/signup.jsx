import Form from "../../components/forms.jsx"

function Signup() {

    const handleSignUp = (formData) => {    
        console.log("Form Data:", formData);

        // back end code to handle sign up
    };


    return (

        <Form 
            isSignUp={true}
            title="Sign Up"
            buttonText="Create Account"
            onSubmit={handleSignUp}
            footerLinkText="Already have an account? "
            footerLinkHref="/login"
        />
    )
}

export default Signup 