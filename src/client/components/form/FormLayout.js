import React from "react";
import { EmailInput, URLInput } from "./LabelInput";
import axios from "axios";

export class FormLayout extends React.Component {
    constructor() {
        super();

        this.kindleEmailChange = this.kindleEmailChange.bind(this);
        this.urlChange = this.urlChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            kindleEmail: "",
            articleURL: "",
        };
    }

    kindleEmailChange(e) {
        this.setState({ kindleEmail: e.target.value });
    }

    urlChange(e) {
        this.setState({ articleURL: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.sendRequest();
    }

    sendRequest() {
        const self = this;
        axios({
            method: "post",
            responseType: "json",
            url: "/send-article",
            data: {
                kindleEmail: self.state.kindleEmail,
                articleURL: self.state.articleURL,
            },
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <fieldset>
                    <legend>
                        <h2>
                            Send article
                        </h2>
                    </legend>
                    <legend>
                        Please set testererere23@gmail as approved in Amazon services.
                    </legend>
                    <EmailInput
                        value={this.state.kindleEmail}
                        handleChange={this.kindleEmailChange}
                    />
                    <URLInput
                        value={this.state.url}
                        handleChange={this.urlChange}
                    />
                    <button type="submit">Process</button>
                </fieldset>
            </form>
        );
    }
}
