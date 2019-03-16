/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 20:43:06 
 * @Last Modified by: liuyabin
 * @Last Modified time: 2019-03-15 18:47:06
 */
const ArithMetic = {
    Update(Data){
        let that = this;
        
        console.log(that);
        that.data = Data;
    },
    data : [],
    getMenuData(viewData) {
        let that = this;
        let menus = [];
        // 筛选出侧边栏要显示的数据
        let initMenus = that.data[1].routes.filter(item => item.isAside);
        // 从权限信息中再筛选一次
        initMenus = initMenus.filter(item => {
            let index = viewData.findIndex(val => val.view_id === item.view_id)
            return index !== -1;
        });
        // 对侧边栏数据进行分组
        initMenus.forEach(item => {
            // 在menus中查找是否有该组
            let result = menus.find(val => val.groupName === item.groupName);

            if (result) { //如果存在直接push
                result.sides.push(item);
            } else {
                menus.push({ // 不存在就创建一个对象
                    groupName: item.groupName,
                    sides: [item]
                })
            }
        });
        return menus;
    }
}
export default ArithMetic