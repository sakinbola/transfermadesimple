import { useState } from 'react'
import { TextField , Button , Box , Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function Form({isSignUp , title , buttonText , onSubmit , footerLinkText , footerLinkTo}) { 

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    
    // add restrictions for email and password length etc 
    const handleEmailChange = (event) => {
        setEmail(event.target.value)

    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        // stops page reload 

        if (isSignUp && password !== confirmPassword) {
            alert("Passwords dont match")
            return;
    }

    }
    
    // info for databse/api call back end 
    const formData = {
        email,
        password,
        ...(isSignUp ? { confirmPassword } : {}),
        // if true add else dont 

    }

    onSubmit(formData)
    // sends it back to parent component




    return (
        // box component is a defualt div can be handled differently with component 
        <Box 
        sx= {{ 
            mt: 10, // margin top
            display: 'flex',
            flexDirection: 'column',
            alignItems:"center",
            justifyContent: "center",

            // margin auto centers because of maxwidth constraint 
            mx:"auto",
            maxWidth:"500px",
            p:"3",
            boxShadow: 3,
            borderRadius: "10px",
            bgcolor: "white",
        }}
        component="form" // tells mui component acts as form
        onSubmit = {handleSubmit}
        // when on submit is called it calls handleSubmit function 
        >

        // form title ? 
        <Typography component="h1" variant="h5" sx={{mb:3}}>
            {/* title given by function */}
            {title}
        </Typography>

        {/* email */}
        <TextField 
            variant="outlined" // border 
            margin="normal" // adds normal margin 
            required // required field
            fullWidth // takes up full widht 
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
        />

        {/* password */} 
        <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
        />

        {/* confirm password */}
        {isSignUp && (
            <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />
        )}

        {/* submit button */}
        <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}   
            // no need for onchange as its taken care of by box property 
        >
            {buttonText}
        </Button>

        <Typography variant="body2" color="blue" align="center">
            {footerLinkText}{"  "}
        <Link to={footerLinkTo} style={{ textDecoration: 'none', color: 'black' }}>
            {isSignUp ? "Login" : "Sign Up"}
        </Link>
        </Typography>
     </Box>
    )
}

export default Form