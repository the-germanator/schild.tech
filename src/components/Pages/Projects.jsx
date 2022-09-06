import winners from './winners.jpeg'
import poster from './poster.jpg'
export const Projects = () => {
    const projectCards = [
        {
        title: 'Personal Website',
        description: 'The website you\'re currently viewing!',
        moreInfo: 'MORE INFORMATION GOES HERE!!!',
        techStack: [
            'React',
            'tailwind.css',
            'react-router-dom',
            'AWS',
            "S3",
            "CloudFront"
        ],
        progress: 50,
        demoLink: 'https://www.schild.tech',
        sourceLink: 'https://www.github.com/the-germanator/schild.tech'
    },
    {
        title: 'Serverless Template for CRUD on AWS',
        description: 'Terraform for quickly deploying DynamoDB, Lambda & API Gateway',
        moreInfo: 'MORE INFORMATION GOES HERE!!!',
        techStack: [
            'AWS',
            'Lambda',
            'Terraform',
            'DynamoDB',
            'API Gateway',
            "Security",
            "Automation"
        ],
        progress: 100,
        demoLink: 'https://github.com/the-germanator/serverless_app',
        sourceLink: 'https://github.com/the-germanator/serverless_app'
    }]
    const OtherCards = [
        {
            title: 'Won 1st Place in Coding Competition',
            description: ['As team lead for Northern Arizona University\'s Information Systems Association (ISA), we successfully won first place in the Software Innovation Challenge at the 2019 Association for Information Systems Student Chapters Leadership Conference',
            'Our Project: Swipe Network allowed students to donate their unused meal plan \"swipes\" to anyone in proximity using the site.', 
            'We conducted extensive online research, built a prototype and defended our work in front of a panel of judges.'],
            image: winners
        },
        {
            title: 'Conducted Real-World Research on Raspberry Pi Clusters',
            description: ['While interning at Los Alamos National Laboratories, my team and I researched strategies \
            for distributing large amounts of data (entire OS Images) to Raspberry Pi clusters. \
            We [...]'],
            image: poster
        }
    ]
    return (
        <div>
            <div className="p-12 phone:p-2">
                <h2 className="mb-8 text-2xl">My Projects</h2>
                <div className="flex flex-wrap self-stretch gap-4">
                    {
                        projectCards.map(card => <ProjectCard cardData={card} />)
                    }
                </div>
                <br /><br />
                <div className=" phone:p-0">
                    <h2 className="mb-8 text-2xl">Other Stuff I've Done</h2>
                    {
                        OtherCards.map((card, cardNum) => <OtherCard cardData={card} isDark={cardNum % 2 === 0} />)
                    }
                </div>
            </div>
            
        </div>
    )
}
const ProjectCard = ({ cardData }) => {
    const {
        title,
        description,
        moreInfo,
        techStack,
        progress,
        demoLink,
        sourceLink
    } = cardData;
    return (

    <div className="border-2 border-black w-96 h-64 relative shadow-md phone:w-full">
        <div className="absolute p-4 pt-2">
            <h3 className="text-md">{ title }</h3>
            <div className="text-xs">
                { description }
            </div>
            <div className="text-xs">
                <br />
                <div className="w-full flex flex-wrap self-stretch gap-2">
                    {
                        techStack.map(technology =>
                            <div className="rounded-2xl bg-black text-white p-1 pl-2 pr-2">
                                { technology }
                            </div>)
                    }
                </div>
            </div>
        </div>
        <div className="w-full absolute bottom-8 h-14 pl-4 pr-12 ">
            Progress:<br />
            <div className="relative">
                <div className=" w-full h-2 absolute rounded-xl border-2 border-black"></div>
                <div className={`w-${progress === 25 ? '1/4' : (progress === 50 ? '1/2' : (progress === 75 ? '3/4' : (progress === 100 ? 'full' : '0')))}  
                bg-accent h-2 absolute rounded-xl border-2 border-black
                ${progress === 100 ? 'border-r-black' : ''} `
                }></div>
            </div>
            <div className="absolute right-1 bottom-4">{progress}%</div>
        </div>
        <div className="absolute bottom-2 h-6 right-0 self-end">
            <div className="inline-block bg-color-blue-400 mr-4 pl-2 pb-2">
                <a className="text-xs border-2 border-black p-1 ml-1 mr-1 hover:bg-black hover:text-white" href="#">More Info</a>
                <a className="text-xs border-2 border-black p-1 ml-1 mr-1 hover:bg-black hover:text-white" target="_BLANK" href={demoLink}>Demo</a>
                <a className="text-xs border-2 border-black p-1 ml-1 hover:bg-black hover:text-white" target="_BLANK" href={sourceLink}>Source</a>
            </div>
        </div>
    </div>
    )
}
const OtherCard = ({ cardData, isDark }) => {
    const {
        title,
        description,
        image,
    } = cardData;
    console.log(isDark)
    return (
        <div className={"mb-4 bg-slate-200 phone:bg-white phone:border-0 phone:mb-12 phone:border-b-2"}> 
            <div className="inline-block w-1/3 align-top phone:w-full phone:mb-4">
                <a target="_BLANK" href={image} className="hover:opacity-50 phone:hover:opacity-100">
                    <img src={image} />
                </a>
            </div>
            <div className="w-2/3 inline-block pl-2 phone:w-full">
                <h3 className="text-lg mb-4 font-bold">{ title }</h3>
                <div className="text-xs">
                { description.map(paragraph => <div className="mb-4">{ paragraph }</div>) }
                </div>
            </div>    
        </div>
    )
}