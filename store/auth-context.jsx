import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AuthContext = React.createContext({
    isLoggedIn: false,
    userData: {},
    onLogout: () => {},
    onLogin: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    const loginHandler = async (enteredLogin, enteredPassword) => {
        try {
            let userId = await axios.post("/api/user/login", {
                enteredLogin,
                enteredPassword,
            });

            userId = await userId.data.userId;

            if (typeof userId === "number") {
                const userData = await axios.post("/api/user/", {
                    userId,
                });

                const filteredUserData = {
                    userId: userId,
                    firstName: userData.data.first_name,
                    lastName: userData.data.last_name,
                    email: userData.data.user_profile.user_email,
                    avatar: "https://sun9-8.userapi.com/impg/sTJ5sw3Wle8z4RNuR7hhwjf86lCWr27L8BRKIQ/0l02DRLY_Rs.jpg?size=1280x881&quality=95&sign=93d17be63082dcf011d1d877ebe9f9ff&type=album",
                };

                setUserData({ ...filteredUserData });
                setIsLoggedIn(true);
            }

            return await userId;
        } catch {
            const filteredUserData = {
                userId: 0,
                firstName: "userName",
                lastName: "userSurname",
                email: "test@test.com",
                avatar: "https://sun9-8.userapi.com/impg/sTJ5sw3Wle8z4RNuR7hhwjf86lCWr27L8BRKIQ/0l02DRLY_Rs.jpg?size=1280x881&quality=95&sign=93d17be63082dcf011d1d877ebe9f9ff&type=album",
            };

            setUserData({ ...filteredUserData });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                userData,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;
