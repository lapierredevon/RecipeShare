import React from "react";
import Wardiere from "../videos/Wardiere.mp4"

// Add a font that I like to home page 
export default function HomePageVideo() {
    return (
        <div className="flex flex-col justify-end">
             <div>
                <h6 className="text-center text-4xl">
                    Homemade Recipes Shared Right With You
                </h6>
            </div>
            <div className= " bg-video mt-8 bg-video">
            <video controls loop autoPlay>
                <source src={Wardiere} type="video/mp4" />
            </video> 
            </div>
        </div>
    )
}