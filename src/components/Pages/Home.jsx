import { NavLink } from 'react-router-dom'

import me from './me_3.jpeg'
import cover from './cover_2.jpeg'
export const Home = () => {
    return (
        <div className="">
            <div className="h-64 bg-cover bg-center phone:h-40" style={{ backgroundImage: `url(${cover})` }}></div>     
            <img src={me} className="inline-block relative h-40 w-40 -top-20 left-10 rounded-full z-10 phone:w-32 phone:h-32 phone:left-32 phone:-top-16"></img>
            <div className="shadow-md inline-block relative h-24 left-20 -top-16 text-xl bg-white p-4 z-10 rounded-lg phone:w-full phone:left-0 phone:right-0">
                <h2 className="text-2xl">Christoph Victor Schild</h2>
                <h3 className="text-xl">Software Engineer</h3>
            </div>
            <div className="relative -top-12 phone:-top-8">
                <div className="relative z-0 pl-10 pr-10 pb-1 phone:pl-4 phone:pr-4">
                    <article>
                        Hello, World. Here are some quick facts about me:
                        <br />
                        <ul className="pt-4 list-disc pl-4">
                            <li>Software Engineer 🤓💻</li>
                            <li>Mössingen 🇩🇪 ✈ Atlanta 🇺🇸 </li>
                            <li>Dog Dad 🐶</li>
                            <li>Occasional Sports-Ball Enjoyer ⚽</li>
                            <li>Last Amazon Order: <a className="text-blue-500 underline" href="https://www.amazon.com/gp/product/B01N46BGKF/" target="_blank"> This Plunger</a> 🪠</li>
                        </ul>
                    </article>
                    <div className="mt-12">
                        <h2>Not Convinced? See What Others Are Saying:</h2>
                        <br />
                        <figure className='inline-block w-1/2 border-l-4  border-l-accent pl-4 mb-4 phone:w-full phone:mb-4'>
                            <blockquote>"LGTM"</blockquote>
                            <figcaption className="text-sm text-gray-600">- Someone who hasn't seen my PRs</figcaption>
                        </figure>
                        <figure className='inline-block w-1/2 border-l-4  border-l-accent pl-4 mb-4 phone:w-full phone:mb-4'>
                            <blockquote>"Nice Guy"</blockquote>
                            <figcaption className="text-sm text-gray-600">- My Mom</figcaption>
                        </figure>
                        <figure className='inline-block w-1/2 border-l-4  border-l-accent pl-4 mb-4 phone:w-full phone:mb-4'>
                            <blockquote>⭐⭐⭐⭐⭐</blockquote>
                            <figcaption className="text-sm text-gray-600">- Anonymous</figcaption>
                        </figure>
                        <figure className='inline-block w-1/2 border-l-4 border-l-accent pl-4 mb-4 phone:w-full phone:mb-4'>
                            <blockquote>You're such a nerd!</blockquote>
                            <figcaption className="text-sm text-gray-600">- My Girlfriend</figcaption>
                        </figure>
                    </div>
                    <br />
                    <hr className="phone:border-black hidden phone:block"/>
                </div>
                <div className="p-2 mb-8">
                <div id="contact" className="shadow-md rounded-lg p-4 w-96 border-t-2 phone:w-full">
                    <h2 className="text-lg">Ready To Connect?</h2>
                    <ul>
                        <h4 className="Direct Contact:"></h4>
                        <li className="after:text-xl after:content-['↗']">Email: <a className="underline" href="mailto:christoph@schild.tech">christoph@schild.tech</a></li>
                        <li className="after:text-xl after:content-['↗']">Phone: <a className="underline" href="tel:+15055779730">(505) 577-9730</a></li>
                    </ul>
                    <br />
                        <div className="justify-around flex">
                            <a target="_BLANK" href="#"><img className="inline-block h-12" src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png" /></a>
                            <a target="_BLANK" href="#"><img className="inline-block h-12"src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
                            <a target="_BLANK" href="#"><img className="inline-block h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}