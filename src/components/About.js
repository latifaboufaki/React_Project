import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
`;

const Fieldset = styled.fieldset`
  border: 2px solid black;
  padding: 10px;
`;

const Legend = styled.legend`
  font-weight: bold;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
  width: 100px;
  height: auto;
  border-radius: 10px;
  background-color: blue;
  color: white;
`;

const About = () => {
  const [ville, setVille] = useState("");
  const [villes, setVilles] = useState([]);

  const addVille = () => {
    if (ville && !villes.includes(ville)) {
      setVilles([...villes, ville]);
      setVille("");
    }
  };

  const removeVille = (index) => {
    setVilles(villes.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Fieldset>
        <Legend>ToDo List</Legend>
        <Label htmlFor="ville">Ville :</Label>
        <Input
          type="text"
          name="ville"
          id="ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />
        <Button type="button" onClick={addVille}>
          Add
        </Button>
      </Fieldset>
      {villes.length > 0 && (
        <div>
          <ul>
            {villes.map((v, index) => (
              <li key={index}>
                {v} 
                <Button onClick={() => removeVille(index)}>remove</Button>
              </li>
            ))}
          </ul>
          <p>Total des villes : {villes.length}</p> 
        </div>
      )}
    </Container>
  );
};

export default About;
