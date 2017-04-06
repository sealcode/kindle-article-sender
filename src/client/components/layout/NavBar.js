import React from "react";
import { Link } from "react-router";

export class NavBar extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    kindle-article-sender
                </h1>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
}
