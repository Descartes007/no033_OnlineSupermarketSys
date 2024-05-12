const base = {
    get() {
                return {
            url : "http://localhost:8080/wangshangchaoshi/",
            name: "wangshangchaoshi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangshangchaoshi/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "网上超市系统"
        } 
    }
}
export default base
