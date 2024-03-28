import styled from "styled-components"


export const Container = styled.div `
background-color: #3D3333;
width: 414px;
height: 100%;
border: 1px solid #000;
border-radius: 10px;
display: flex;
flex-direction: column;
margin: 20px auto;

`
export const Image = styled.img `
margin: 50px 0;

`
export const H1 = styled.h1 `
color: #fff;
font-weight: 700px;
font-size: 27px; 
text-align: center;
margin-bottom: 40px;



`

export const InputLabel = styled.p `
color: #fff;
font-weight: 700px;
font-weight: bold;
font-size: 19px;
line-height: 18px;
letter-spacing: -0.15px;
margin: 30px 56px 0;
padding-bottom: 5px;

`
export const Input = styled.input `
background-color: #000;
color: #fff;
width: 342px;
height: 58px;
border: none;
outline: none;
border-radius: 14px;
margin: 0 auto;
padding-left: 15px;
font-weight: 300px;
font-size: 19.3px;
line-height: 21px;


`
export const Button = styled.button `
width: 342px;
height: 68px;
background-color: #000;
color: #fff;
margin: 50px auto;
border: none;
border-radius: 5px;
cursor: pointer;
font-weight: 900px;
font-size: 19px;
line-height: 2.5px;
color: #fafafa;
box-shadow: 0px 0px 10px 3.5px #350565;

&:hover{
    opacity: 0.7;
}
&:active{
    opacity: 0.3;
}`

export const User = styled.li `
display: flex;
justify-content: space-around;
align-items: center;
width: 342px;
height: 68px;
background-color: #4C2672 ;
margin: 20px auto;
border: none;
border-radius: 5px;
color: #fff;
font-weight: 300px;
font-size: 18px;
line-height: 21px;

p{
font-weight: 700px;
font-weight: bold;
font-size: 19px;
line-height: 18px;
letter-spacing: -0.15px;

}

button{
    background-color:  #4C2672;
    border: none;
    cursor: pointer;
}
button:hover{
    opacity: 0.8;
}
button:active{
    opacity: 0.6;
}
`;

