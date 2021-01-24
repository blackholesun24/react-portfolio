import React, {useState, useEffect } from "react";
import sanityClient from "../client";
import image from "../test.jpg";
import imageUrlBu_ilder from "./@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

export default function About(){
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorIamge": image.asset->url
        }`).then((data) => setAuthor(data[0])).catch(console.error)
    })

    if(!author) return <div>Chargement...</div>
    return (
        <main className="relative">
            <img src={image} alt="galaxy" className="absolute w-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-54 mr-8" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Coucou ! Je suis {" "}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="7bce3nca" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}