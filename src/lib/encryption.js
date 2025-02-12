import bcrypt from 'bcrypt';
const encryption = {};


encryption.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

encryption.matchPassword = async (password, passwordCrypted) => {
    try{
        return await bcrypt.compare(password, passwordCrypted);
    } catch(e) {
        console.log(e);
    }
}

export default encryption;