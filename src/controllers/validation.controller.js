import passport from "passport";

export const signIn = (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/user',
        failureRedirect: '/validation',
        failureFlash: true
    })(req, res, next);
};

export const signUp = passport.authenticate('local.signup', {
        successRedirect: '/user/create',
        failureRedirect: '/validation',
        failureFlash: true
});


export const logout = (req, res, next) => {
    req.logout(function(err) {
        if(err) { return next(err)}
    });
    res.redirect('/');
}