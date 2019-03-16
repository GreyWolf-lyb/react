/*
 * @Author: liuzhongbao 
 * @Date: 2019-03-14 16:55:36 
 * @Last Modified by: liuyabin
 * @Last Modified time: 2019-03-16 08:28:50
 */
import ArithMetic from '../methods/arithmetic';
import Login from '../page/login/login'
import Index from '../page/index/index'
import AddTopic from '../components/AddItem'
import BrowserTopic from '../components/BrowseTopic'
import AddExam from '../components/AddExam'
import EditTopic from '../components/EditTopic'
import TestClassify from '../components/TestClassify'
import AddUser from '../components/AddUser'
import UserDisplay from '../components/UserDisplay'
import ExamList from '../components/ExamList'
let {getMenuData} = ArithMetic;
// 管理所有的组名
const groups = {
        QUESTIONS_MANGER: '试题管理',
        USER_MANGER: '用户管理',
        EXAM_MANGER: '考试管理'
    }
    // 路由的配置数据
const routerConfig = [{
            path: '/login',
            component: Login,
            view_id: 'login'
        },
        {
            path: '/index',
            component: Index,
            view_id: 'main',
            routes: [
                  // 试题管理组
                  {
                    title: '添加试题',
                    groupName: groups.QUESTIONS_MANGER,
                    path: 'addTopic',
                    component: AddTopic,
                    isAside: true,
                    view_id: 'main-addQuestions'
                },
                {
                    title: '查看试题',
                    groupName: groups.QUESTIONS_MANGER,
                    path: 'browserTopic',
                    component: BrowserTopic,
                    isAside: true,
                    view_id: 'main-watchQuestions'
                },
                {
                    title: '试题分类',
                    groupName: groups.QUESTIONS_MANGER,
                    path: 'TestClassify',
                    component: TestClassify,
                    isAside: true,
                    view_id: 'main-questionsType'
                },
                {
                    title: '编辑试题',
                    groupName: groups.QUESTIONS_MANGER,
                    path: 'editTopic',
                    component: EditTopic,
                    isAside: false,
                    view_id: ''
                },
                // 用户管理
                {
                    title: '添加用户',
                    groupName: groups.USER_MANGER,
                    path: 'AddUser',
                    component: AddUser,
                    isAside: true,
                    view_id: 'main-addUser'
                },
                {
                    title: '用户展示',
                    groupName: groups.USER_MANGER,
                    path: 'UserDisplay',
                    component: UserDisplay,
                    isAside: true,
                    view_id: 'main-showUser'
                },
                // 考试管理组
                {
                    title: '添加考试',
                    groupName: groups.EXAM_MANGER,
                    path: 'addExam',
                    component: AddExam,
                    isAside: true,
                    view_id: 'main-addExam'
                },
                {
                    title: '试卷列表',
                    groupName: groups.EXAM_MANGER,
                    path: 'examList',
                    component: ExamList,
                    isAside: true,
                    view_id: 'main-examList'
                },
            ]
        }
    ]
export default routerConfig;