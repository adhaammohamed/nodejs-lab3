import User from '../../../db/models/user.model.js';
import bcrypt from 'bcrypt';
import CryptoJS from 'crypto-js';
 export const register=async (req, res)=> {
    try {
      const { Username, email, password,confirmedPassword } = req.body;
      if (password !== confirmedPassword) {
        return res.status(422).json({ message: "repeatPassword doesn't match password" });
      }
      if (await User.findOne({ email })) {
        return res.status(409).json({ message: 'email already exists' });
      }

      const hashedPassword = bcrypt.hashSync(password,parseInt(process.env.SALT_ROUNDS));

      const encryptPhone = CryptoJS.AES.encrypt(phone,process.env.SECRET_WORD_CRYPTO);

      const user = await User.create({ Username,email,password: hashedPassword,phone: encryptPhone, });

  
      const objUser = user.toObject();
      delete objUser.hashedPassword;

      res.status(200).json({ message: `${email} registered successfully`, user: objUser });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}



export const login= async (req, res)=> {
    try {
      const { email, password } = req.body;

      if (!email) {return res.status(400).json({ message: 'email is requried' });}
      const user = await User.findOne({ email });
      if (!user) {return res.status(404).json({ message: "email doesn't exist" });}
      const match = bcrypt.compareSync(password, user.password);
      if (!match) {return res.status(422).json({ message: 'invalid password' });}

      const decryptPhone = CryptoJS.AES.decrypt(user.phone, process.env.SECRET_WORD_CRYPTO).toString(CryptoJS.enc.Utf8);

      const objUser = user.toObject();
      objUser.phone = decryptPhone;
      delete objUser.password;

      res.status(200).json({ message: `${user.name}  Welcome`, user: objUser });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

