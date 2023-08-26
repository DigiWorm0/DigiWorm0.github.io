import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FadeIn from "../util/FadeIn";

function HeaderSection() {
    return (
        <Container>
            <Row>
                <Col
                    className={"p-4 pe-sm-0"}
                    md={4}
                >
                    <FadeIn
                        slide
                    >
                        <img
                            src="/profile.png"
                            alt="Profile"
                            style={{
                                width: "100%",
                                borderRadius: "50%"
                            }}
                        />
                    </FadeIn>
                </Col>
                <Col
                    className={"align-self-center ms-md-5 mb-5 mt-5"}
                    md={6}
                >
                    <FadeIn
                        slide
                        delay={0.3}
                    >
                        <h1 style={{ fontSize: 58 }}>
                            Hi, I'm <b>Digi</b>
                        </h1>
                        <h2 className="mt-5">
                            I'm a student software developer with experience in{' '}
                            <a href="https://reactjs.org/" className="text-info">React</a>,{' '}
                            <a href="https://www.typescriptlang.org/" className="text-primary">Typescript</a>,{' '}
                            <a href="https://firebase.google.com/" className="text-warning">Firebase</a>, and{' '}
                            <a href="https://dotnet.microsoft.com/en-us/apps/aspnet" className="text-danger">ASP.NET</a>.
                        </h2>
                    </FadeIn>
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderSection;
