/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 19:37:39 
 * @Last Modified by:   liuzhongbao 
 * @Last Modified time: 2019-03-14 19:37:39 
 */

const request = (url, option = {}) => {
    if (option.body) {
        option.body = JSON.stringify(option.body)
    }
    let newOption = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization":localStorage.getItem('token')
        },
        ...option
    };
    return fetch(url, newOption).then(res => res.json()).catch((err) => alert(err));
}

export default request;