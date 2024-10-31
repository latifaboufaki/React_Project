import React, { useState } from "react";
import styled from "styled-components";

// Composant Container
const Container = styled.div`
  padding: 20px;
  background-color: #282c34; /* Couleur de fond du conteneur */
  color: white; /* Couleur du texte */
  border-radius: 8px; /* Arrondi des coins */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre pour donner de la profondeur */
  max-width: 600px; /* Largeur maximale */
  margin: 0 auto; /* Centrer le conteneur */
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const LanguageContainer = styled.div`
  position: relative;
  margin-bottom: 10px; /* Espacement entre les choix */
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 2px;
  background-color: red; /* Couleur de la ligne */
  z-index: 1;
`;

const Label = styled.label`
  text-decoration: ${(props) => (props.strike ? "line-through" : "none")};
  display: flex;
  align-items: center; /* Centrer le texte avec la case à cocher */
`;

const Checkbox = styled.input`
  margin-right: 10px; /* Espacement entre la case et le texte */
`;

const SelectedLanguagesList = styled.ul`
  margin-top: 20px;
`;

const ListItem = styled.li`
  list-style: none; /* Enlever les puces */
`;

const Shop = () => {
  const languages = ["C", "C++", "Java", "JS", "Python"];
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  // Gestion du changement d'état des cases à cocher
  const handleCheckboxChange = (language) => {
    if (selectedLanguages.includes(language)) {
      // Si le langage est déjà sélectionné, on le retire
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
    } else {
      // Sinon, on l'ajoute
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  return (
    <Container>
      <Title>Choix des Langages</Title>
      
        {languages.map((language, index) => (
          <LanguageContainer key={index}>
            {selectedLanguages.includes(language) && <Line />}
            <Label strike={selectedLanguages.includes(language)}>
              <Checkbox
                type="checkbox"
                checked={selectedLanguages.includes(language)}
                onChange={() => handleCheckboxChange(language)}
                disabled={selectedLanguages.includes(language)} // Désactiver la case à cocher
              />
              {language}
            </Label>
          </LanguageContainer>
        ))}
      
      <SelectedLanguagesList>
        <h3>Langages sélectionnés :</h3>
        {selectedLanguages.map((language, index) => (
          <ListItem key={index}>{language}</ListItem>
        ))}
      </SelectedLanguagesList>
    </Container>
  );
};

export default Shop;
