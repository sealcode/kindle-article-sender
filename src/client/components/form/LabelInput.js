import React from "react";

const kindleEmailRegex = "[a-z0-9._%+-]+@kindle\.com$";

export const EmailInput = ({ value, handleChange }) => (
    <label htmlFor="kindleEmail">
        Kindle email
        <input
            required
            type="email"
            placeholder="example@kindle.com"
            title="Give us your kindle email, please."
            id="kindleEmail"
            pattern={kindleEmailRegex}
            value={value}
            onChange={handleChange}
        />
    </label>
);

export const URLInput = ({ value, handleChange }) => (
    <label htmlFor="articleURL">
        Article URL
        <input
            required
            type="url"
            placeholder="https://blog.com/article"
            id="articleURL"
            value={value}
            onChange={handleChange}
        />
    </label>
);
