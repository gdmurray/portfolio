import React, {Component} from 'react';
import {Header, Segment, Card, Container, Image, Button, Icon, Label} from 'semantic-ui-react'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.content = [
            {
                code: "cr",
                title: "Collective Reports",
                image: "collectivereports.jpg",
                link: "https://www.collectivereports.com",
                content: [
                    "Lead developer of financial management and employee accountability software solution Collective Reports, \
                    built in collaboration with Sheppard Village Dental. \
                    The software is currently in use across various Dental Practices in Canada. \
                    The software has had 3 major iterations while I was learning how to develop and \
                    deploy large scale web applications.",
                    "Built using the Python framework Django and hosted on a PostgreSQL Database. \
                    Prototyped and built frontend using HTML, Bootstrap, CSS, JQuery, and AngularJS. \
                    Hosted on AWS RDS and Heroku, version controlled through Github."
                ],
                items: [
                    "Django", "PostgreSQL", "Heroku", "AngularJS", "Git/Github", "Staging Pipeline", "Elasticsearch"
                ],
                itemClass: "tools"
            },
            {
                code: "lot",
                title: "Live On Twitch",
                image: "liveontwitch.png",
                link: "https://www.liveontwitch.app",
                content: [
                    "Built a service LiveOnTwitch in which automatically updates a user's Twitter Username \
                    and or Bio when they’re live on Twitch through the use of Twitch Hooks. Built with a \
                    Django REST based backend and a React Frontend, liveontwitch uses Oauth2 for authentication of Twitch and Twitter",
                    "Both Staging and Production servers hosted on DigitalOcean, with Production\
                    server running on a Kubernetes Cluster. The production deployment pipeline utilizes CirleCI \
                    for Continuous Integration and Deployment by pulling the master git branch, rebuilding the docker \
                    images and deploying to managed Kubernetes. The containers within the Cluster include Django, Celery, \
                    Nginx, Redis, PostgreSQL."
                ],
                items: [
                    "Kubernetes",
                    "Django",
                    "React",
                    "Docker",
                    "CircleCI",
                    "Celery",
                    "Redis",
                    "Nginx",
                    "Git / Github",
                    "Adobe Xd",
                    "Oauth2",
                    "REST API",
                    "Twitter API",
                    "Twitch API"
                ],
                itemClass: "tools"
            }, {
                code: "ei",
                title: "Espresso Insights Backend",
                image: "espresso.png",
                link: "https://github.com/CP317S18/iOS",
                content: [
                    "Content Pending Approval"
                ],
                items: [
                    "Django", "Angular", "AWS", "Git/Github", "Heroku", "Oauth2", "REST API", "Keras NLP", "Celery", "Redis", "Websockets"
                ],
                itemClass: "tools"
            }, {
                code: "shout",
                title: "Shout iOS App",
                image: "shout.png",
                link: "",
                content: [
                    "In a Third year Software Engineering project I was the iOS Team Lead, \
                managing team of 12 designers and developers to build a Bluetooth Low Energy based chat app. \
                Developed a majority of the core iOS Bluetooth cross platform compatibility protocol code as well \
                as the Views Code for each function of the app."
                ],
                items: [
                    "Swift", "iOS", "Objective C", "Project Mgmt", "Git/Github", "Bluetooth", "BLE Tech"
                ],
                itemClass: "tools"
            }
        ]

    this.state = {
        content: this.content
    }
}

renderItemLists(content)
{
    var l = [];
    for (var i in content) {
        l.push(<li>{content[i]}</li>);
    }
    return l;
}

renderContent(content)
{
    var l = [];
    for (var c in content) {
        l.push(<p>{content[c]}</p>);
    }
    return l;
}

renderProjects()
{
    var projects = [];
    const {content} = this.state
    for (var p in content) {
        var project = content[p];
        console.log(project);
        projects.push(
            <Container className={"gradient " + project.code}>
                <div className="project">
                    <a className="project__image" href={project.link} target="_blank">
                        <img width={400} src={process.env.PUBLIC_URL + "/" + project.image}/>
                    </a>
                    <div className="project__info">
                        <Header as='h2' content={project.title}/>
                        {this.renderContent(project.content)}
                        <ul className={"item-list " + project.itemClass}>
                            {this.renderItemLists(project.items)}
                        </ul>
                    </div>
                </div>
            </Container>
        )
    }
    return projects;
}

render()
{
    return (
        <div>
            <nav className="site-navbar">
                <ul className="nav">
                    <li>
                        <a> Projects </a>
                    </li>
                    <li>
                        <a> Resume </a>
                    </li>
                    <li>
                        <a> Github </a>
                    </li>
                    <li>
                        <a> Contact </a>
                    </li>
                </ul>
                <Container textAlign='center' className="intro-section">
                    <Header as='h1' textAlign='center'>
                        Hi, My Name is Greg Murray
                    </Header>
                </Container>

                <Container className="card-container">
                    <Card fluid raised centered className="intro-card">
                        <Card.Header as="h4">Full Stack Software Engineer</Card.Header>
                        <Card.Description>
                            I am a 4th year Business and Computer Science student
                            at Wilfrid Laurier University and I am currently seeking opportunities for an internship
                            in Software Engineering for the Fall 2019 Term.
                            My experience ranges from school projects to full production environments.
                        </Card.Description>
                    </Card>
                </Container>

                <Container>
                    <Header className="huge section-header" textAlign="center">
                        Skills
                    </Header>
                    <Header as="h3">
                        Languages
                    </Header>
                    <ul className="item-list languages">
                        <li>Python</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>HTML5/CSS3</li>
                        <li>SQL</li>
                        <li>C++</li>
                        <li>PHP</li>
                    </ul>
                    <Header as="h3">
                        Frameworks
                    </Header>
                    <ul className="item-list frameworks">
                        <li>Django</li>
                        <li>Flask</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Wordpress</li>
                    </ul>
                    <Header as="h3">
                        Platforms
                    </Header>
                    <ul className="item-list platforms">
                        <li>AWS</li>
                        <li>DigitalOcean</li>
                        <li>Heroku</li>
                        <li>Salesforce</li>
                        <li>Unix</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                    </ul>
                    <Header as="h3">
                        Tools
                    </Header>
                    <ul className="item-list tools">
                        <li>Kubernetes</li>
                        <li>Docker</li>
                        <li>Docker Swarm</li>
                        <li>Keras</li>
                        <li>Ansible</li>
                        <li>CircleCI</li>
                        <li>Git/Github</li>
                        <li>Adobe Xd</li>
                    </ul>
                    <Header style={{marginTop: '6rem'}} className="huge section-header" textAlign="center">
                        Projects
                    </Header>
                </Container>
                {this.renderProjects()}
                <ul className="item-list tools">
                </ul>
            </nav>
        </div>
    )
}
}