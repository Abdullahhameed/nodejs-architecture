// import User from "../models/UserModel.js";

export const getUser = async (req, res, next) => {
    try {
        res.success(statusCodes.OK, {});
    } catch (error) {
       next(error); 
    }
};

// user get by id
export const getUsers = async (req, res) => {};

// updating user
export const updateUser = async (req, res) => {};


