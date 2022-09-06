import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AuthContext = React.createContext({
    isLoggedIn: false,
    userData: {},
    error: "",
    onLogout: () => {},
    onLogin: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});
    const [error, setError] = useState(null);

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    const loginHandler = async (enteredLogin, enteredPassword) => {
        try {
            let userId = await axios.post("/api/user/login", {
                enteredLogin,
                enteredPassword,
            });

            userId = userId.data.userId;
            setError(userId);
            if (typeof userId === "number") {
                const userData = await axios.post("/api/user/", {
                    userId,
                });

                const filteredUserData = {
                    userId: userId,
                    firstName: userData.data.first_name,
                    lastName: userData.data.last_name,
                    avatar: "",
                    email: userData.data.user_profile.user_email,
                    avatar: "https://sun9-8.userapi.com/impg/sTJ5sw3Wle8z4RNuR7hhwjf86lCWr27L8BRKIQ/0l02DRLY_Rs.jpg?size=1280x881&quality=95&sign=93d17be63082dcf011d1d877ebe9f9ff&type=album",
                };

                setUserData({ ...filteredUserData });
                setIsLoggedIn(true);
            } else {
                setError(userId);
            }
        } catch {
            const filteredUserData = {
                userId: 0,
                firstName: "userName",
                lastName: "userSurname",
                avatar: "",
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
                error,
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
