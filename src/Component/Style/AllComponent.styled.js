import React from 'react';
import styled from 'styled-components';

export  const Title =styled.h1`
color:  #04072F;
text-align: center;
font-family: Poppins;
font-size: 48px;
font-weight: 700;
line-height: 50%; 



  @media  (min-width: 1724px) {

    font-size: 68px 
   
}


`;
export const Image =styled.section`
width:40%;
height:100%;
padding-left:40px;
@media (max-width: 768px) {
    width:100%;
    padding-left:0px;
    height:auto
  }

  @media (min-width: 769px) and (max-width: 1023px) {
   width:auto;
   height:auto
   padding-left:0px;
  }
`;
export const Field =styled.section`
width:40%;
height:100%;
margin:auto;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
   width:100%;
   height:auto;

  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width:auto;
    height:auto
  }
`;
export const Card = styled.div`
width:80%;
align-items: center;
border: 2px ;
margin:auto;
border-radius: 13px;
display:block;
padding:80px;
border-radius: 12px;
background: #FFF;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);

@media (max-width: 768px) {
    width:35%;

  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width:50%;
  }
`;

// export const InputField =styled.input`
// padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: 100%;
//   margin: 5px 0;
//   &:focus {
//     outline: none;
//     border-color: #007bff;
//   }
// `;
export const Form = styled.form`
 
  margin:auto;
`;

export const FormControl = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color:#737B86);
font-size: 10px;
font-weight: 300;
line-height: 20px
`;

export const Input = styled.input`
min-width: ${props=> props.$w};
height:30px;
border-radius: 8px;
border: 1px solid rgba(4, 7, 47, 0.40);
padding-left:6px;

 
`;


export const ForgotPassword = styled.a`
  display: block;
  color: #F78719;
  text-decoration: none;
  font-size: 10px;
`;
export const Terms = styled.a`
  color: #F78719;
  text-decoration: underline;
`;
 
export const Div= styled.div`
display:flex;
justify-content: space-between;
`;
export const Div2= styled.div`
display:flex;
justify-content: space-between;
`;

export const Button = styled.div`
text-align:center;
`;

export const Submit = styled.button`
  width:300px;

  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  background:  #1575A7;
  padding: 0.5rem 1rem;
  cursor: pointer;


  @media (max-width: 768px) {
    width:200px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width:200px;
  }
`;



export const Toggle = styled.button`
  background: transparent;
  border: none;
  font-size: 15px;
  cursor: pointer;
  margin-left: -30px;
`;



 const Container =styled.section`
display:flex;
width:95%;
height: 80vh;
padding:15px;
align-items: center;


@media (max-width: 768px) {
    display:block
     
  }

  @media (min-width: 769px) and (max-width: 1023px) {
  
    display:block  
   
}

`;
export default Container;
