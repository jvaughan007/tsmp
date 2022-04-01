import React from 'react';
import styled from 'styled-components';

export class LandingPage extends React.Component {
    render() {
        return (
            <Div>
                <h1>
                    Welcome to JIYU
                </h1>
                <h2>
                    Where Censorship Dies
                </h2>
                <br />
                <h3>What is JIYU?</h3>
                <p>
                    <b>JIYU</b> is a social media and live streaming application built with the explicit goal of facilitating a 100% <b>COMPLETELY FREE SPEECH</b> forum for discussion, debate, discourse, and amateur/guerilla journalism.
                </p>
                <p>We have just <b>two(2)</b> policies:</p>
                <ol>
                    <li>
                        Do not incite violence against another individual.
                    </li>
                    <li>Do not commit any American federal crimes, such as (but not limited to):
                        <ul>
                            <li>Distribution of child pornography</li>
                            <li>Sale or promotion of illicit or illegal substances, paraphanalia, etc. of which the posession carries a federal offense</li>
                            <li>Promotion or solicitation of any products/services that if sold or purchased would result in a federal offense</li>
                        </ul>
                    </li>
                </ol>
            </Div>
            
    )}
}

const Div = styled.div`
text-align: center;
`;