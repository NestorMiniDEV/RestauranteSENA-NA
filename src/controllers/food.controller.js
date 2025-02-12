import { pool } from "../db.js";
import fs from 'node:fs'

export const addFood = async(req, res) => {
    const url_image = saveImg(req.file);
    const { ingredients, value_food, name_food, name_typeFood} = req.body;
    const [resultFood] = await pool.query('INSERT INTO foods (ingredients, value_food, name_food, url_image) VALUES (?, ?, ?, ?)', [ingredients, value_food, name_food, url_image]);
    await pool.query('INSERT INTO typeFoods (id_typeFood ,name_typeFood) VALUES (? ,?)', [resultFood.insertId ,name_typeFood]);

    /*res.send({
        id_food: resultFood.insertId,
        ingredients,
        value_food,
        name_food,
        url_image,
        name_typeFood
    });*/

    req.flash('success', 'El alimento fue añadido');
    res.redirect('/food');
};

export const removeFood = async(req, res) => {
    const { id } = req.params;
    await pool.query ('DELETE FROM typeFoods WHERE id_typeFood = ?', [id]);
    await pool.query ('DELETE FROM foods WHERE id_food = ?', [id]);

    req.flash('success', 'El alimento fue eliminado');
    console.log('Food deleted');
    res.redirect('/food');
};

export const editFood = async(req, res) => {
    const {id} = req.params;
    const [valuesFood] = await pool.query('SELECT * FROM foods WHERE id_food = ?', [id]);
    
    res.render('menu/editMenu', {valuesFood, title: "Editar Plato"});
};

export const confirmEditFood = async(req, res) => {
    const { id } = req.params;
    const {ingredients, value_food, name_food, image_url} = req.body;
    await pool.query('UPDATE foods SET ingredients = ?, stock = , value_food = ?, name_food = ?', [ingredients, stock, value_food, name_food]);

    req.flash('success', 'El alimento fue modificada');
    res.redirect('/food');
};

export const showFood = async(req, res) => {
    const [foods] = await pool.query('SELECT id_food, name_food, value_food, ingredients, url_image, typeFoods.name_typeFood FROM foods INNER JOIN typeFoods ON typeFoods.id_typeFood = id_food');
    res.render('menu/menu', { foods , title: 'Menú'});
};

// export const testRequest = (req, res) => {

//     console.log(req.file);
//     saveImg(req.file);
//     res.send('resultImg');
// }

function saveImg (file) {
    const newPath = `files/images/food/${file.originalname}`;
    fs.renameSync(file.path, newPath);
    return newPath;
}