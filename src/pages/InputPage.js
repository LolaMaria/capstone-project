import styled from 'styled-components';
import ButtonSubmit from '../components/ButtonSubmit';
import { useState } from 'react';
import axios from 'axios';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function InputPage({ onCreatePlant }) {
  const [plantName, setPlantName] = useState('');
  const [plantFact, setPlantFact] = useState('');
  const [plantWater, setPlantWater] = useState('');
  const [plantSpot, setPlantSpot] = useState('');
  const [plantInfo, setPlantInfo] = useState('');
  const [image, setImage] = useState('');

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
  }

  return (
    <>
      <CreatePlant id="title-form">CREATE PLANT</CreatePlant>
      <FormBox>
        <form
          autoComplete="off"
          aria-labelledby="title-form"
          onSubmit={handleSubmitCreate}
        >
          <CardBox>
            <Label htmlFor="plant-name">Plant name:</Label>
            <Input
              id="plant"
              name="plant"
              required
              maxLength="20"
              type="text"
              placeholder="Monstera.."
              value={plantName}
              onChange={event => setPlantName(event.target.value)}
            />
            <Label htmlFor="Fact">Useful and interesting facts:</Label>
            <Input
              id="fact"
              name="fact"
              required
              maxLength="50"
              type="text"
              placeholder="facts, facts, facts"
              value={plantFact}
              onChange={event => setPlantFact(event.target.value)}
            />
            <Label htmlFor="water">Whats your plants water intake?</Label>
            <Input
              name="water"
              required
              maxLength="20"
              id="water"
              type="text"
              placeholder="..."
              value={plantWater}
              onChange={event => setPlantWater(event.target.value)}
            />
            <Label htmlFor="plantspot">
              How much light does your plant need?
            </Label>
            <Input
              name="spot"
              required
              maxLength="50"
              id="spot"
              type="text"
              placeholder="sunshine or shadow.."
              value={plantSpot}
              onChange={event => setPlantSpot(event.target.value)}
            />
            <Label htmlFor="info">Additional info about your plant:</Label>
            <Input
              name="info"
              maxLength="50"
              id="info"
              type="text"
              placeholder="more infos?"
              value={plantInfo}
              onChange={event => setPlantInfo(event.target.value)}
            />
          </CardBox>
          <ImageUpload>
            {image ? (
              <img
                src={image}
                alt=""
                style={{
                  width: '40vw',
                  margin: '3vw 12vw 3vw 12vw',
                  border_radius: '50%',
                }}
              />
            ) : (
              <div>
                <Input
                  type="file"
                  name="file"
                  aria-label="upload-your-picture"
                  onChange={upload}
                  id="files"
                />
                <label htmlFor="files">UPLOAD YOUR PLANT PICTURE</label>
              </div>
            )}
          </ImageUpload>
          <ButtonSubmit />
        </form>
      </FormBox>
    </>
  );
  function handleSubmitCreate(event) {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.plant.value.trim();
    const inputValueFact = form.elements.fact.value.trim();
    const inputValueSpot = form.elements.spot.value.trim();
    const inputValueWater = form.elements.water.value.trim();
    const inputValueInfo = form.elements.info.value.trim();
    const img = image;
    onCreatePlant(
      inputValue,
      inputValueFact,
      inputValueSpot,
      inputValueWater,
      inputValueInfo,
      img
    );
    form.reset();
    setPlantName('');
    setPlantFact('');
    setPlantSpot('');
    setPlantWater('');
    setPlantInfo('');
  }
}

const CreatePlant = styled.h2`
  font-size: 1.5rem;
  color: #5c9875;
  display: flex;
  justify-content: center;
`;

const FormBox = styled.div`
  padding: 1rem;

  background-color: #d4e5ed;
  border-radius: 3%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 300px;
  margin: 5px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  font-size: 0.7rem;
  margin: 0.3rem 0rem 0.3rem 0rem;
  color: #5c9875;
`;

const ImageUpload = styled.div`
  padding: 5px;
  margin-left: 40px;

  input[type='file'] {
    width: 0.1px;
    height: 0.1px;
    user-select: none;
  }

  label[for='files'] {
    background-color: #c2fbd7;
    padding: 10px;
    font-size: 13px;
    font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
      sans-serif;
    color: hotpink;
    border-radius: 100px;
  }

  label[for='files']:hover {
    background-color: #2e8b57;
  }
`;
