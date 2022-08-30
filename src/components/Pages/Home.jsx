import { NavLink } from 'react-router-dom'

import me from './me_3.jpg'
import cover from './cover.jpg'
export const Home = () => {
    return (
        <div className="">
            <div className="h-64 bg-cover bg-center phone:h-40" style={{ backgroundImage: `url(${cover})` }}>
            </div>     
            <img src={me} className="inline-block relative h-40 w-40 -top-20 left-10 rounded-full z-10 phone:w-32 phone:h-32 phone:left-32 phone:-top-16"></img>
            <div className="inline-block relative h-24 left-20 -top-16 text-xl bg-white p-4 z-10 rounded-lg phone:w-full phone:left-0 phone:right-0">
                <h2 className="text-2xl">Christoph Victor Schild</h2>
                <h3 className="text-xl">Software Engineer</h3>
            </div>
            <div className="relative -top-48 z-0 pt-40 pl-10 pr-10 pb-10 phone:pl-4 phone:pr-4">

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
                    <br />
                    If you have an opportunity to share or just want to connect, head on over to the&nbsp;
                    <NavLink className="text-blue-500 underline" to="/contact">/contact</NavLink> page.
                </article>
                <br />
                <br />
                <div className='mt-12'>
                    <h2>Not Convinced? See What Others Are Saying:</h2>
                    <br />
                    <figure className='inline-block w-1/2 border-l-4 pl-4 mb-4 phone:w-full phone:mb-4'>
                        <blockquote>"LGTM"</blockquote>
                        <figcaption className="text-sm text-gray-600">- Someone who hasn't seen my PRs</figcaption>
                    </figure>
                    <figure className='inline-block w-1/2 border-l-4 pl-4 mb-4 phone:w-full phone:mb-4'>
                        <blockquote>"Nice Guy"</blockquote>
                        <figcaption className="text-sm text-gray-600">- My Mom</figcaption>
                    </figure>
                    <figure className='inline-block w-1/2 border-l-4 pl-4 mb-4 phone:w-full phone:mb-4'>
                        <blockquote>⭐⭐⭐⭐⭐</blockquote>
                        <figcaption className="text-sm text-gray-600">- Anonymous</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}