export default ({ router }) => {
    if (typeof window !== 'undefined') {
        const host = window.location.hostname
        const path = window.location.pathname

        // 如果是首页并且是 wangkaixin.net.cn，就跳转到中文站
        if (host === 'wangkaixin.net.cn' && path === '/') {
            window.location.replace('/zh-CN/')
        }
    }
}
