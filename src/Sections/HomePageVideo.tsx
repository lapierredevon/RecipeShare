import React from "react";
import Wardiere from "../videos/Wardiere.mp4"


export default function HomePageVideo() {
    return (
        <div className="flex flex-col justify-end">
            <div className= " bg-video mt-8 bg-video">
            <video controls loop autoPlay>
                <source src={Wardiere} type="video/mp4" />
            </video> 
            </div>
            <div>
                <h6 className="text-center text-9xl">
                    Recipes by homemade chefs <br />
                    shared right with you
                </h6>
            </div>
        </div>
    )
}