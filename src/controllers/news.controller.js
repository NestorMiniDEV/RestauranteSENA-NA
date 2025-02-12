import { pool } from "../db.js";

export const insertNew = async(req, res) => {
    const {title_new, description_new} = req.body;
    const [result] = await pool.query('INSERT INTO news (title_new, description_new) VALUES (?, ?)', [title_new, description_new]);

    console.log({
        id: result.insertId,
        title_new,
        description_new,
    });
    req.flash('success', 'La novedad fue creada satisfactoriamente');
    res.redirect('/new');
};

export const editNew = async(req, res) => {
    const {id} = req.params;
    const [valuesNew] = await pool.query('SELECT * FROM news WHERE id_new = ?', [id]);


    res.render('news/editNew', { valuesNew , title: "Editar Novedad" })
};

export const confirmEditNew = async(req, res) => {
    const { id } = req.params;
    const { title_new , description_new } = req.body;

    await pool.query('UPDATE news SET title_new = ?, description_new = ? WHERE id_new = ?', [title_new, description_new, id]);
    console.log('change sucessfull');
    console.log({
        title_new,
        description_new
    })
    req.flash('success', 'La novedad fue modificada');
    res.redirect('/new');
}

export const deleteNew = async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM news WHERE id_new = ?', [id]);
    
    req.flash('success', 'La novedad fue eliminada satisfactoriamente');
    res.redirect('/new');
};

export const showNew = async(req, res) => {
    const [resultNew] = await pool.query('SELECT * FROM news ORDER BY id_new DESC')
    res.render('news/news' , { resultNew, title: "Novedades" })
}