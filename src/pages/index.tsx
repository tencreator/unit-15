import React from "react"

export default function Home(): JSX.Element {
    return (
        <div className='flex container flex-col'>
            <h1 className="mb-0-5">Home</h1>
            <section>
                <h2 className="mt-0-5">Who are we?</h2>
                <p>We are Ten's Web Designs, we specialise in making beautiful websites for companies and anyone who may see they need.</p>
                <p>We started making websites in 2020. The first time that the founder, TenCreator (Luca Kinsey) was introduced to HTML, CSS & JavaScript when he was tasked with making a loading screen for his FiveM server</p>
                <p>After that project he was inspired to learn more about HTML and CSS as a hobby that then turned into a dream that he now refuses to give up on.</p>
            </section>

            <section>
                <h2>We are hiring!</h2>
                <p></p>
            </section>
        </div>
    )
}