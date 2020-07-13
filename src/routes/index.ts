/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: Shentong
 * @Date: 2020-07-13 18:49:06
 * @LastEditors: Shentong
 * @LastEditTime: 2020-07-13 19:00:44
 */

interface RouteConfig {
  path: string; // 浏览器访问路径，如果设置了base则path取base之后的路径
  component?: string; // 组件路径，以'@'开头，@代表src目录
  title?: string; // 页面title
  exact?: boolean; //是否严格匹配路径
  redirect?: string; //重定向，配置值为其他route的path项
  wrappers?: string[]; // https://umijs.org/docs/routing#wrappers
  routes?: RouteConfig[];
}

const routes: Array<RouteConfig> = [
  { path: '/', exact: true, title: '首页', component: '@/pages/index' },
  { path: '/login', exact: true, title: '首页', component: '@/pages/login' },
];

export default routes;
