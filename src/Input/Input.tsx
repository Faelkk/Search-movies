import React from 'react'
import styled from "styled-components";
import ButtonSearch from '../Components/Button';




const Form = styled.form`
display:flex;
gap: 1rem;
align-items: center;

@media (max-width: 768px) {
   flex-direction:column
    
  }


`

const Label = styled.label`
font-size: 1.2rem;
font-family: Helvetica, Arial;
@media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Input = styled.input`
border: 1px solid #eee;
border-radius: 3px;
background: #eee;
padding: 5px;
`


const Button = styled.button`
  padding: 10px;
  background: #0c4369;
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
  transition: .3s;
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: .1rem;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    background: #1788cf;
  }
`;

const ContainerInput = styled.div`
display:flex;
gap: 1rem;
`



const InputSearch = (props) => {
    const [searchValue, setSearch] = React.useState('');

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        window.localStorage.setItem('searchItem', searchValue)
    }

    return (<>
        <Form className="FormSearch" onSubmit={handleSubmit}>
            <ContainerInput>
                <Label htmlFor={props.id}>{props.label}</Label>
                <Input
                    type={props.type}
                    id={props.id}
                    name={props.id}
                    autoComplete={props.autoComplete}
                    value={searchValue}
                    onChange={handleChange}
                />
            </ContainerInput>
            <Button onClick={handleSubmit}>Pesquisar</Button>
        </Form>

    </>)
};

export default InputSearch;