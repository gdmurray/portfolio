import React, {Component} from 'react';
import { Header, Segment, Card, Container, Image } from 'semantic-ui-react'
export default class Home extends Component{
    render(){
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
                    <Container className="gradient cr" centered>
                        <div className="project">
                            <a className="project__image" href="https://www.collectivereports.com" target="_blank">
                                <img width={400} src={process.env.PUBLIC_URL + "/tmp.png"}/>
                            </a>
                            <div className="project__info">
                                <Header as='h2' content='Collective Reports'/>
                                <p>
                                Lead developer of a financial management and employee accountability software solution built 
                                in collaboration with Sheppard Village Dental. Built using the Python framework Django and hosted 
                                on a PostgreSQL Database. Prototyped and built frontend using HTML, Bootstrap, CSS, JQuery, and AngularJS. 
                                Hosted on AWS RDS and Heroku, version controlled through Github.
                                </p>
                                <ul className="item-list tools">
                                    <li>Django</li>
                                    <li>PostgreSQL</li>
                                    <li>Heroku</li>
                                    <li>AngularJS</li>
                                    <li>Git/Github</li>
                                    <li>Staging Pipeline</li>
                                    <li>Elasticsearch</li>
                                </ul>
                            </div>

                        </div>
                    </Container>
                    <Container className="gradient lot">
                    <div className="project">
                            <a className="project__image" href="https://www.liveontwitch.app" target="_blank">
                                <img width={400} src={process.env.PUBLIC_URL + "/liveontwitch.png"}/>
                            </a>
                            <div className="project__info">
                                <Header as='h2' content='LiveOnTwitch'/>
                                <p>
                                Lead developer of a financial management and employee accountability software solution built 
                                in collaboration with Sheppard Village Dental. Built using the Python framework Django and hosted 
                                on a PostgreSQL Database. Prototyped and built frontend using HTML, Bootstrap, CSS, JQuery, and AngularJS. 
                                Hosted on AWS RDS and Heroku, version controlled through Github.
                                </p>
                                <ul className="item-list tools">
                                    <li>Kubernetes</li>
                                    <li>Django</li>
                                    <li>React</li>
                                    <li>Docker</li>
                                    <li>CircleCI</li>
                                    <li>Git/Github</li>
                                    <li>Adobe Xd</li>
                                    <li>Oauth2</li>
                                    <li>REST API</li>
                                    <li>Twitter API</li>
                                    <li>Twitch API</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                    <Container className="gradient ei">
                        <div className="project">
                            <a className="project__image">
                                
                            </a>
                            <div className="project__info">
                                <Header as='h2' content='Espresso Insights'/>
                                <p>
                                Lead developer of a financial management and employee accountability software solution built 
                                in collaboration with Sheppard Village Dental. Built using the Python framework Django and hosted 
                                on a PostgreSQL Database. Prototyped and built frontend using HTML, Bootstrap, CSS, JQuery, and AngularJS. 
                                Hosted on AWS RDS and Heroku, version controlled through Github.
                                </p>
                                <ul className="item-list tools">
                                    <li>Django</li>
                                    <li>Angular</li>
                                    <li>AWS</li>
                                    <li>Git/Github</li>
                                    <li>Heroku</li>
                                    <li>Oauth2</li>
                                    <li>REST API</li>
                                    <li>Keras NLP</li>
                                </ul>
                            </div>
                            
                        </div>
                    </Container>
                    <Container className="gradient shout">
                        <div className="project">
                            <a className="project__image" href="https://github.com/CP317S18/iOS" target="_blank">
                            <img width={400} src={process.env.PUBLIC_URL + "/shout.png"}/>
                            </a>
                            <div className="project__info">
                                <Header as='h2' content='Shout'/>
                                <p>
                                Lead developer of a financial management and employee accountability software solution built 
                                in collaboration with Sheppard Village Dental. Built using the Python framework Django and hosted 
                                on a PostgreSQL Database. Prototyped and built frontend using HTML, Bootstrap, CSS, JQuery, and AngularJS. 
                                Hosted on AWS RDS and Heroku, version controlled through Github.
                                </p>
                                <ul className="item-list tools">
                                    <li>Swift</li>
                                    <li>iOS</li>
                                    <li>Objective C</li>
                                    <li>Project Mgmt</li>
                                    <li>Git/Github</li>
                                    <li>Bluetooth</li>
                                    <li>BLE Tech</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </nav>

            </div>
        )
    }
}