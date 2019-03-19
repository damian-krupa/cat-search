import ReactDOM from "react-dom";
import React from "react";
import {App} from "./Components/App";

const kitties = [
    {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
    {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
    {category: "male", age: "2", likesKids: false, name: "Grumpy"},
    {category: "male", age: "3", likesKids: true, name: "David Meowie"},
    {category: "male", age: "8", likesKids: true, name: "Cat Stevens"},
    {category: "male", age: "2", likesKids: false, name: "Lucifurr"},
    {category: "male", age: "4", likesKids: true, name: "Santa Claws"},
    {category: "male", age: "9", likesKids: true, name: "Cat Damon"},
    {category: "male", age: "2", likesKids: false, name: "Chairman Meow"},
    {category: "male", age: "3", likesKids: true, name: "Fuzz Aldrin"},
    {category: "male", age: "8", likesKids: true, name: "Luke Skywhisker"},
    {category: "male", age: "2", likesKids: false, name: "Genghis Cat"},
    {category: "female", age: "1", likesKids: true, name: "Cat Middleton"},
    {category: "female", age: "2", likesKids: false, name: "Catzilla"},
    {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"},
    {category: "female", age: "6", likesKids: true, name: "Katy Purry"},
    {category: "female", age: "4", likesKids: false, name: "Catastrophe"},
    {category: "female", age: "5", likesKids: true, name: "Puma Thurman"},
    {category: "female", age: "1", likesKids: true, name: "Catalie Portman"},
    {category: "female", age: "2", likesKids: false, name: "Empurress"},
    {category: "female", age: "3", likesKids: true, name: "JK Meowling"},
    {category: "female", age: "6", likesKids: true, name: "Katy Purry"},
    {category: "female", age: "4", likesKids: false, name: "Clawdia"},
    {category: "female", age: "5", likesKids: true, name: "Cindy Clawford"}
];

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App kitties={kitties}/>,
        document.getElementById('app')
    );
});