import qr from './qr.png'
export const Contact = () => {
    return (
        <div className="p-10">
            <h2 className='text-2xl'>Contact</h2>
            <br />
            You can use the contact information on my business card to reach out!
            <br />
            <b>P.S.:</b> The Phone, Email and Linkedin links work!
            <br />
            <br />
            <br />
            <div>
                <div className="h-64 w-96 border-2 border-black p-4 relative">
                    <div className="text-lg">
                        Christoph V. Schild
                    </div>
                    <div className="text-base">
                        Software Engineer
                    </div>
                    <br /><br />
                    <div className="text-xs w-48">
                        Seeking New Software Engineering Opportunities 
                    </div>
                    <img className="w-32 top-16 block absolute right-0" src={qr}></img>
                    <div className="text-xs bottom-0 absolute text-center">
                        <a href="tel:+15055779730">(505) 577-9730</a>&nbsp;&bull;&nbsp;
                        <a href="mailto:christoph@schild.tech">christoph@schild.tech</a>&nbsp;&bull;&nbsp;
                        <a href="https://www.linkedin.com/in/germanator/" target="_BLANK">Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    )

}