import React from "react";
import { Text } from "react-native";

const MyComponent = () => {
    const opener = "Hello, ";
    const ending = "Alexander. Have a great day!";

    const createMessage = (opener, ending) => {
        const message = opener + ending;
        return message;
    }

    return <Text>{createMessage(opener, ending)}</Text>;
};

export default MyComponent;