---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Garnet"
  text: "高性能缓存存储"
  tagline: 一种开源、下一代、更快的缓存存储
  actions:
    - theme: brand
      text: 快速开始
      link: /markdown-examples
    - theme: alt
      text: 为什么选garnet
      link: /overview/garnet

features:
  - icon: <?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 11.9143L24 19L44 11.9143L24 5L4 11.9143Z" fill="#E11D48" stroke="#E11D48" stroke-width="4" stroke-linejoin="round"/><path d="M4 20L24 27L44 20" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 28L24 35L44 28" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 36L24 43L44 36" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
    title: 高性能、高吞吐、低延迟
    details: 可插拔的网络设计、以获得高端端到端性能、降低大型服务的成本
  - icon: <?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37 22.0001L34 25.0001L23 14.0001L26 11.0001C27.5 9.50002 33 7.00005 37 11.0001C41 15.0001 38.5 20.5 37 22.0001Z" fill="#E11D48" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 6L37 11" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 25.9999L14 22.9999L25 33.9999L22 36.9999C20.5 38.5 15 41 11 36.9999C7 32.9999 9.5 27.5 11 25.9999Z" fill="#E11D48" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 32L27 28" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 42L11 37" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 25L20 21" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
    title: 丰富且可扩展的API
    details: 使用RESP协议，支持大部分Redis API，可扩展性和事务性存储过程能力
  - icon: <?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z" fill="#E11D48" stroke="#E11D48" stroke-width="4" stroke-linejoin="round"/><path d="M18 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28Z" fill="#E11D48" stroke="#E11D48" stroke-width="4" stroke-linejoin="round"/><path d="M35 20C38.866 20 42 16.866 42 13C42 9.13401 38.866 6 35 6C31.134 6 28 9.13401 28 13C28 16.866 31.134 20 35 20Z" fill="#E11D48" stroke="#E11D48" stroke-width="4" stroke-linejoin="round"/><path d="M40 28H30C28.8954 28 28 28.8954 28 30V40C28 41.1046 28.8954 42 30 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z" fill="#E11D48" stroke="#E11D48" stroke-width="4" stroke-linejoin="round"/></svg>
    title: 跨平台支持
    details: 支持Mac、Linux、Windows等主流操作系统
  - icon: <?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 4H37L26 18H41L17 44L22 25H8L19 4Z" fill="#E11D48" stroke="#E11D48" stroke-width="4" stroke-linejoin="round"/></svg>
    title: 内存分层存储
    details: 分层存储支持、提供缓存友好的共享内存可扩展性
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="#e11d48" d="M17 9.48V7.91c0-2.52-3.77-3.84-7.5-3.84S2 5.4 2 7.91v10.33C2 20.4 4.77 21.67 7.9 22l.1-.07v-6.7c0-3.15 3.7-5.49 9-5.75" class="clr-i-solid--badged clr-i-solid-path-1--badged"/><path fill="#e11d48" d="M18 10.85c-4.93 0-8.65 1.88-8.65 4.38v12.31c0 2.5 3.72 4.38 8.65 4.38s8.65-1.88 8.65-4.38v-2.16A13.58 13.58 0 0 1 18 28a16.77 16.77 0 0 1-6-1v-1.73a14.5 14.5 0 0 0 6 1.17c4.21 0 7.65-1.23 8.63-3.23v-2.74C24.8 22 21.72 23 18 23a16.77 16.77 0 0 1-6-1v-1.77a14.5 14.5 0 0 0 6 1.17c4.21 0 7.65-1.11 8.63-3.11v-3.06c.02-2.5-3.7-4.38-8.63-4.38" class="clr-i-solid--badged clr-i-solid-path-2--badged"/><path fill="#e11d48" d="M22.5 6a7.52 7.52 0 0 1 .14-1.4C20.55 5.19 19 6.3 19 7.91v1.57a15.33 15.33 0 0 1 5 1A7.46 7.46 0 0 1 22.5 6" class="clr-i-solid--badged clr-i-solid-path-3--badged"/><path fill="#e11d48" d="M30 13.49a7.47 7.47 0 0 1-2.65-.49a4 4 0 0 1 .7 2.23v6.7l.05.06c3.13-.32 5.9-1.6 5.9-3.75v-5.91a7.46 7.46 0 0 1-4 1.16" class="clr-i-solid--badged clr-i-solid-path-4--badged"/><circle cx="30" cy="5.99" r="5" fill="#e11d48" class="clr-i-solid--badged clr-i-solid-path-5--badged clr-i-badge"/><path fill="none" d="M0 0h36v36H0z"/></svg>
    title: 集群模式
    details: 支持集群模式、分片、复制
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#512BD4" d="M0 0h256v256H0z"/><path fill="#FFF" d="M45.627 163.555c-1.81 0-3.348-.603-4.615-1.809c-1.267-1.237-1.901-2.707-1.901-4.408c0-1.732.634-3.216 1.9-4.454c1.268-1.237 2.806-1.856 4.616-1.856c1.84 0 3.394.619 4.661 1.856c1.298 1.238 1.946 2.722 1.946 4.454c0 1.701-.648 3.17-1.946 4.408c-1.267 1.206-2.82 1.81-4.66 1.81m72.361-1.02h-11.765L75.225 113.63a21.882 21.882 0 0 1-1.946-3.85h-.272l.047.305l.043.35l.04.393l.038.436l.049.736l.042.832l.035.93l.028 1.028l.02 1.125l.01.805l.01 2.2v43.614H62.961V96h12.535l29.957 47.743l.74 1.169l.477.768l.408.675l.34.583l.19.338l.16.296l.13.255h.18l-.034-.21l-.064-.45l-.06-.493l-.053-.537a35.943 35.943 0 0 1-.024-.285l-.046-.602l-.04-.645l-.035-.69l-.042-1.114l-.03-1.212l-.018-1.31l-.006-1.407V96h10.362zm50.685 0h-36.428V96h34.98v9.373h-24.21v18.837h22.31v9.326h-22.31v19.673h25.658zm51.772-57.162H201.8v57.162h-10.77v-57.162h-18.6V96h48.014z"/></svg>
    title: 高性能、现代、安全
    details: 基于C# .NET8.0从零开始构建而成，且以性能为核心考量
---
