const Header = () => {
    return (
        <div className="block w-full">
            <h1 className="text-3xl">Christoph Victor Schild</h1>
            <h2 className="text-2xl">Software Engineer</h2>
            <br />
        </div>
    )
}

const LeftBar = () => {
    return (
        <div className="w-1/3 pr-4 inline-block phone:block phone:w-full">
            
            <article className="text-sm mb-4">
                <h3 className="text-xl mb-4 text-white bg-black inline-block w-full pl-2 phone:w-full">Contact</h3><br />
                <a className="underline" target="_BLANK" href="mailto:christoph@schild.tech">christoph@schild.tech</a><br />
                <a className="underline" target="_BLANK" href="tel:+15055779730">(505) 577-9730</a><br />
                <a className="underline" target="_BLANK" href="https://www.github.com/the-germanator">github.com/the-germanator</a><br />
                <a className="underline" target="_BLANK"  href="https://linkedin.com/in/germanator">linkedin.com/in/germanator</a><br />
            </article>
            
            <article className="text-sm mb-4">
                <h3 className="text-xl mb-4 text-white bg-black inline-block w-full pl-2 phone:w-full">Education</h3><br />
                B.S.B.A. INFORMATION SYSTEMS<br />
                MINOR: COMPUTER SCIENCE<br />
                CERTIFICATE: ENTERPRISE SYSTEMS<br />
                Northern Arizona University<br />
                2016 - 2020
            </article>
            
            <article className="text-sm mb-4">
                <h3 className="text-xl mb-4 text-white bg-black inline-block w-full pl-2 phone:w-full">Awards & Certs</h3><br />
                CERTIFIED SOLUTIONS ARCHITECT<br />
                Amazon Web Services (AWS)<br />
                9/2021
                <br /><br />
                CERTIFIED CLOUD PRACTITIONER<br />
                Amazon Web Services (AWS)<br />
                8/2021
                <br /><br />
                INFORMATION SYSTEMS ANALYST<br />
                Institute for the Certification of Computing Professionals<br />
                7/2020
                <br /><br />
                OUTSTANDING SENIOR: INFORMATION SYSTEMS<br />
                Northern Arizona University<br />
                Spring 2020
            </article>

            <article className="text-sm mb-10">
                <h3 className="text-xl mb-4 text-white bg-black inline-block w-full pl-2 phone:w-full">Skills</h3><br />
                Fluent German (Native Speaker)<br />
                AWS, Azure<br />
                DevOps (Gitlab), CI/CD<br />
                Docker, Kubernetes<br />
                Javascript (Node/ES6), React<br />
                Python

            </article>
        </div>
    )
}

const RightContent = () => {
    return (
        <div className="w-2/3 l-1/3 pl-4 phone:pl-0 pr-4 inline-block align-top phone:block phone:w-full">
            <article className="text-sm mb-4">
                <h3 className="text-xl mb-4 text-white bg-black inline-block w-full pl-2 phone:w-full">Profile</h3><br />
                Software Engineer with experience developing and modernizing robust, cost-effective apps in the cloud. Passionate about serverless technologies, and the benefits they bring to organizations. Currently seeking new professional challenges.
            </article>

            <article className="text-sm mb-2">
                <h3 className="text-xl mb-4 text-white bg-black inline-block w-full pl-2 phone:w-full">Professional Experience</h3><br />
                SOFTWARE ENGINEER - SITE RELIABILITY ENGINEERING<br />
                State Farm | Atlanta, GA | 6/2020 - Present (+Internship 2019)
            </article>
            <ul className="list-disc pl-4 mb-5 text-sm">
                <li>Contributed extensively to the improvement (and later re-write) of a self-service utility that helps teams more easily create feature-rich dashboards in Dynatrace</li>
                <li>Contributed to an assessment tool for teams to validate their infrastructure’s resilience</li>
                <li>Led the development of a cloud onboarding and education tool; coordinated with business partners regularly</li>
                <li>Independently developed a framework for the automated mapping and testing of complex web apps</li>
                <li>Mentored an intern; helped teach AWS Services (Lambda, API Gateway, DynamoDB), general programming concepts (Python, Node, React) and internal business processes</li>
            </ul>
            <article className="text-sm mb-2">
                HIGH-PERFORMANCE COMPUTING STUDENT TECHNICIAN<br />
                Northern Arizona University | Flagstaff, AZ | 9/2018 - 12/2019
            </article>
            <ul className="list-disc pl-4 mb-5 text-sm">
                <li>Performed sysadmin tasks on 100+ node HPC cluster</li>
                <li>Routinely performed hardware upgrades & maintained regular relationships with vendors</li>
                <li>Assisted with training and onboarding for new users</li>
                <li>Taught Intermediate-level “Slurm” classes</li>
                <li>Developed a dependency tracking system to report on unused Python libraries</li>
            </ul>
            <article className="text-sm mb-2">
                HIGH-PERFORMANCE COMPUTING INTERN<br />
                Los Alamos National Laboratories | Los Alamos, NM | Summer 2017/2018
            </article>
            <ul className="list-disc pl-4 mb-5 text-sm">
                <li>Successfully completed the Supercomputer Institute. Evaluated scaling challenges with large Raspberry Pi clusters</li>
                <li>Built a custom web application for NM Supercomputing Challenge</li>
                <li>Analyzed and produced comprehensive reports on CPU core load distribution in cluster workloads</li>
            </ul>
        </div>
    )
}



export const Resume = () => {

    return (
        <div className="w-full left-0 p-12 phone:p-2">
            <Header className=""/>
            <LeftBar className=""/>
            <RightContent />
        </div>
    )
}