import React from 'react';
import Titles from '../../components/Titles/Titles';
import devider from '../../assets/devider.svg'; // Correct import path
import './Skills.css';
import ItemSkill from '../../components/ItemSkill/ItemSkill';
import {dataImagesUing,dataImagesDesign,dataImagesDev} from '../../constents/dataImages'; // Correct import path
import Links from '../../components/Links/Links';
const Skills = () => {
  return (
    <div className='skills'>
      <Titles title={'SKILLS'} />
      
      <ItemSkill title={"USING NOW:"} images={dataImagesUing}/>
     
      <ItemSkill title={"LEARNING:"} images={dataImagesDesign}/>
      <ItemSkill title={"OTHER SKILLS"} images={dataImagesDev}/>
      
      <img src={devider} alt="" style={{ alignItems: 'center',
  width: '100px'}}/>
 
    </div>
  );
};

export default Skills;
