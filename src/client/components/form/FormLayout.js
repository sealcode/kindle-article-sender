import React from "react";
import { EmailInput, URLInput } from "./LabelInput";
import axios from "axios";

export class FormLayout extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            kindleEmail: "",
            articleURL: "",
        };
    }

    generateChangeHandler(fieldName) {
        return e => {
            this.setState({ [fieldName]: e.target.value });
        };
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
                    <p>
                        Please set testererere23@gmail as approved in Amazon services.
                    </p>
                    <EmailInput
                        value={this.state.kindleEmail}
                        handleChange={this.generateChangeHandler("kindleEmail")}
                    />
                    <URLInput
                        value={this.state.url}
                        handleChange={this.generateChangeHandler("articleURL")}
                    />
                    <button type="submit">Process</button>
                </fieldset>
            </form>
        );
    }
}
