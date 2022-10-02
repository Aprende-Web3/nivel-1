// SPDX-License-Identifier: MIT
 pragma solidity ^0.8.1;
 contract MoodDiary{
 string mood;
 //Crea una función que escriba un estado de ánimo en el contrato inteligente
 function setMood(string memory _mood) public{
     mood = _mood;
 }
 
 
 //Crea una función que lea el estado de ánimo del contrato inteligente
 function getMood() public view returns(string memory){
     return mood;
 }
 
 }
