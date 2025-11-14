//Controller
//Connecting your Models and your Views
//Contains in-between logic

import { userList } from '../Models/userModel.js';
export function handleUsers(req, res) {
    const userData = userList();
     res.render('user',{users:userData});
}