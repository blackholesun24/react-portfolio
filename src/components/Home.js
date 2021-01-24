import React from "react";
import image from "../test.jpg"

export default function Home(){
    return (
        <main>
            <img src={image} className="absolute object_cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Coucou, tu veux voir ma bite ?</h1>

            </section>
        </main>
    )
}