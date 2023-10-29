import styled from 'styled-components';
import Container, {  Button, Card, Div, Div2, Field, ForgotPassword, Form, FormControl, Image, Input, Label, Submit, Terms, Title, Toggle } from './Component/Style/Global.styled';
import pic from './assets/pic-1.svg'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from 'react';


function App() {

  const [passwordVisible, setPasswordVisible] = useState(false);
const [password, setPassword] = useState('');

const togglePassword = () => {
  setPasswordVisible(!passwordVisible);
};

const handleSubmit = (e) => {
  e.preventDefault(); 
};
  return (
    <>
  
   <Container>
    <Image>
      <img src={pic} alt="login-svg" />
    </Image>
    <Field>
      <Card>
      <Title>
      
      Login
    
    </Title>
      
      <Form onClick={handleSubmit}>
        <FormControl>
          <Label>Login ID</Label>
          <Input type='text' $w='100%' placeholder='enter login id'/>
          
        </FormControl>
        <FormControl>
        <Label>Password</Label>
          <Div2>
             <Input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="password"
            value={password}
           $w='100%'
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength={6}
          />
          <Toggle onClick={togglePassword}>
            {passwordVisible ? <BsEyeSlash/>:<BsEye/> }
          </Toggle>
          </Div2>

        </FormControl>
        <FormControl>
        <Div>
        <Label> 
           <input type="checkbox">
          </input>
          Remember Me</Label>
          <ForgotPassword>Change Password</ForgotPassword>
        </Div>
        <Label>  <input type="checkbox">
          </input>
          Agree to <Terms>Terms & Conditions</Terms>     </Label>
        </FormControl>
        <FormControl>
          <Button>
            <Submit>Login</Submit>
          </Button>
          
        </FormControl>

  <FormControl>
  
  <Button>
       <Label>  
          Don’t have an account? 
          <Terms>Register Here</Terms>     </Label>
  </Button>
     
        
  </FormControl>
      </Form>

      </Card>
    </Field>
   
   </Container>
  
  
  </>
    
  )
}

export default App
