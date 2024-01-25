import React from 'react';
import Titles from '../../components/Titles/Titles';
import ImageComponent from '../../components/ImageComponent/ImageComponent'; // Correct import path
import './Skills.css';
import ItemSkill from '../../components/ItemSkill/ItemSkill';
import {dataImagesUing,dataImagesDesign,dataImagesDev} from '../../constents/dataImages'; // Correct import path
const Skills = () => {
  return (
    <div className='skills'>
      <Titles title={'SKILLS'} />
      
      <ItemSkill title={"USING NOW:"} images={dataImagesUing}/>
     
      <ItemSkill title={"LEARNING:"} images={dataImagesDesign}/>
      <ItemSkill title={"OTHER SKILLS"} images={dataImagesDev}/>
      
    
    </div>
  );
};

export default Skills;
