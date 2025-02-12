 import { pool } from "../db.js";
 import { join } from "path";

 export const showUser = async(req, res) => {
 	const {first_name, password_user} = req.body;

 	const [result] = await pool.query('SELECT * FROM users WHERE first_name = ? and password_user = ?', [first_name, password_user]);

 	res.render('validation/user', { result, title: "Usuario" });
 };

 export const registerUser = async(req, res) => {
 	const { document_user, first_name, last_name, email_address, phonenumber, born_year, password_user } = req.body;
 	const [insertUser] = await pool.query('INSERT INTO users (document_user, first_name, last_name, email_address, phonenumber, born_year, password_user) VALUE (?, ?, ?, ?, ?, ?, ?)', [ document_user, first_name, last_name, email_address, phonenumber, born_year, password_user]);
 	const [insertType] = await pool.query('INSERT INTO typeUsers (id_typeUser) VALUES (?)', [document_user]);
 	res.render('menu/menu', {title: "MENÚ"});
 };

 export const deleteUser = async(req, res) => {
    const { document_user } = req.body;
    await pool.query('DELETE FROM typeUsers WHERE id_typeUser = ?', [document_user]);
    await pool.query('DELETE FROM users WHERE document_user = ? ', [document_user]);

    console.log('User deleted');
    res.redirect('/')
}

export const editUser = async (req,res) => {
    const { first_name, last_name, email_address, phonenumber } = req.body;
    const { document_user } = req.body;
    const userChange = {
        first_name,
        last_name,
        email_address,
        phonenumber
    }
    await pool.query('UPDATE users SET ? WHERE document_user = ? ', [userChange, document_user]);

    res.redirect('validation/user')
};