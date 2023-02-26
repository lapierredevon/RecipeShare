import React from "react";

export default function NavBar (){
    return (
        <div className="flex  flex-row md:flex-col ">
            <h5 className="text-lg  md:mt-2 mr-2 md:text-2xl">Home</h5>
            <h5 className="text-lg md:mt-2 mr-2 md:text-2xl">Recipes</h5>
            <h5 className="text-lg md:mt-2 mr-2 md:text-2xl">Add Recipe</h5>
            <h5 className="text-lg mt-2 mr-2 md:text-2xl">Search Recipes</h5>
        </div>
    )
}