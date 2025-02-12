import passport from 'passport';
import passportlocal from 'passport-local';
import { pool } from '../db.js';
import encryption from './encryption.js';

const strategy = passportlocal.Strategy;

passport.use('local.signup', new strategy({
    usernameField: 'first_name',
    passwordField: 'password_user',
    passReqToCallback: true
}, async (req, username, password, done) => {
    
    const {document_user, email_address, phonenumber, born_year, last_name} = req.body;
    const newUser = {
        first_name: username,
        password_user: password,
        document_user,
        last_name,
        email_address,
        phonenumber,
        born_year
    };
    newUser.password_user = await encryption.encryptPassword(password);
    await pool.query('INSERT INTO users SET ?', [newUser]);
    newUser.id = document_user;
    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.document_user);
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE document_user = ?', [id]);
    done(null, rows[0])
})

passport.use('local.signin', new strategy({
    usernameField: 'document_user',
    passwordField: 'password_user',
    passReqToCallback: true
}, async (req, document_user, password, done) => {
        const [rows] = await pool.query('SELECT * FROM users WHERE document_user = ?', [document_user]);
        if (rows.length > 0) {
        const user = rows[0]
        const validPassword = await encryption.matchPassword(password, user.password_user);
        if (validPassword) {
            done(null, user, req.flash('BIENVENIDO' + user.document_user));
        } else {
            done(null, false, req.flash('failure', 'Contraseña incorreta'))
        }
    } else {
        return done(null, false, req.flash('failure', 'Usuario incorrecto'));
    }
}));

export default passport;