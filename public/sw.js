/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c8871d3b7e801815971f43f8db34a40b"],["/about/index.html","1c88bef83884b97e4bc66dc9ae055606"],["/archives/2020/07/index.html","6599e0dffae0664ef0c39ef7bab1f8ff"],["/archives/2020/08/index.html","f1cd0cb29994c69cd084d50688894de1"],["/archives/2020/index.html","429f05dd1354f5fe310710eb4e460eb4"],["/archives/2021/02/index.html","5e27fbd4f67823daf5b8717faf1bf763"],["/archives/2021/03/index.html","f1e2d86c00fac6cda68b0b4487099aa7"],["/archives/2021/05/index.html","555da834d8e86d85ed36fca29433e1e5"],["/archives/2021/11/index.html","710d9cc3e4faf85b513823bd981a1240"],["/archives/2021/12/index.html","4b99204ea6c8112735c54afe2506c312"],["/archives/2021/12/page/2/index.html","f994c6750415888d4d4316bee23914f0"],["/archives/2021/index.html","8cee820559d8348f3c94b98097fb1221"],["/archives/2021/page/2/index.html","bcd17a806d8c09dba7338213568e6200"],["/archives/2021/page/3/index.html","609ec3846cdd535e40458e0069d1e939"],["/archives/2022/01/index.html","031f168558a014a5fb8c49cd123b9f7f"],["/archives/2022/01/page/2/index.html","ab5422a58419655c67ee04f5ccbbf506"],["/archives/2022/index.html","e97d9f808f7dbd3f8e7903a2baa992df"],["/archives/2022/page/2/index.html","1b4d61565bd482313358e7b2b5f6693f"],["/archives/index.html","03e79f5e43fe2d08d9b04416db5fea3e"],["/archives/page/2/index.html","3050b16df1ec99d652f530c174daafec"],["/archives/page/3/index.html","033dabbee58051ba6bb10cd4d8c48429"],["/archives/page/4/index.html","5267edbd5a6a3fc38ae798c1ff0f737f"],["/archives/page/5/index.html","ac22bfdc51621bdafa70f2e2723baebb"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","30373b7c952715b79441f1705e199109"],["/categories/Appium/index.html","d792d82e4258696ea631363e62ace500"],["/categories/Charles/index.html","89404a304e759a678eadcc398e0ee07c"],["/categories/Hexo/index.html","5baa6c0f43684a027950854d46f076bc"],["/categories/MySQL/index.html","78bcc188445b7077fa8cc7deebca828a"],["/categories/Python自动化/index.html","11767316939116396f2256fd540869ed"],["/categories/Shell脚本/index.html","d45b56e95a2dd078b1e0119904e194bb"],["/categories/index.html","5c362462af593f64f3a827145555033c"],["/categories/postman/index.html","3a93d2443258a1315bbd16f7c5add61c"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","324c233827380decd35c5ea52ccfb113"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","ead406c97cfa3ad83e840cf68c9fd05a"],["/music/index.html","ec9152aa71bb13c77b22e043b1be450d"],["/page/2/index.html","b7e94ff11505fac9d0a83e10340e312e"],["/page/3/index.html","e6332ed535ea1fde93f809e2921a58f9"],["/page/4/index.html","3d8d7798aed059a89c7cec42b56d4461"],["/photo/index.html","95b8065655d2e0d9728f618fc452d7b0"],["/posts/2173e2a4/index.html","40a53533201f53f371af5e2bce397f02"],["/posts/2ab40ef8/index.html","9ff36121d5b56d548c04664a78b27106"],["/posts/30fa304c/index.html","db36f8687887165c9daa1a5def62e906"],["/posts/3447541d/index.html","0e1b6773bd88af7dfefe62737d7dea1f"],["/posts/3447554d/index.html","038e99905452b98c4e3b7321e1c2d0eb"],["/posts/344e3c5b/index.html","5bcb284e9182f055afeab4326cd29f62"],["/posts/3457ed69/index.html","93c8f133382ba66d4c1788b9e39f7f00"],["/posts/39cb083c/index.html","bab3642cb7c284fea07e4e735c6782a5"],["/posts/3ba53770/index.html","2f42756df389ff4000eaadf331b610f5"],["/posts/3bd3916a/index.html","d436810cae6e62a881712b0d8f598aed"],["/posts/3e4105ad/index.html","90064cc84b08de348349deded55ffc2c"],["/posts/42f034cf/index.html","a7f6e60ffa85658684610bc0992d53a1"],["/posts/50a2b841/index.html","874e508cea23412b4f95bf1a36133f9f"],["/posts/54eecc7d/index.html","1026499361632ca069f3c6832a7e561f"],["/posts/5a17eb30/index.html","213ea47be6ee2ef86953c6a1138ede00"],["/posts/66841aa6/index.html","ad626e30a9c83b0f458b146ffec58440"],["/posts/689fc75c/index.html","0b6b697055d386c2defa49b21b1b9f40"],["/posts/7de15477/index.html","93b4d75663a3a587d362bd39ef222d3c"],["/posts/8a00d2ea/index.html","d1c6b45471956de68d540744270ab81a"],["/posts/8aa14a73/index.html","ad102e1d04065e4c7224f7ada6c5cb67"],["/posts/96032b58/index.html","111d46fcf1674d8f72eb6b2ccd47ce08"],["/posts/9656df9f/index.html","ad0eefad818103a700c5be37c595fcc1"],["/posts/a3886b70/index.html","dfd0edb24ea86b5f15ecf3aebabd0e1b"],["/posts/a42e3f6d/index.html","6f16bb4864bbb2c4b54daa6b067a8afa"],["/posts/a9438874/index.html","85471a29f12ae6c9d09a6feffe2a84f6"],["/posts/b4b3bf4e/index.html","1040be1692242702a3b4ad3e768a7b6b"],["/posts/b8685e49/index.html","c4b92d2f1fc8c86ecae4ff3ca5f0cce3"],["/posts/baaef441/index.html","a42db774521a31dab00b563b3e94eb68"],["/posts/bbd06fa5/index.html","b743d6b4524c6e5176a933fa83531372"],["/posts/be476180/index.html","11e198b084f2142714a2c1c3e2cf4724"],["/posts/c4b6dbb9/index.html","ed97de7fa9f55ba6fbe192edfc5c8b60"],["/posts/c98d9940/index.html","edbdd02ca49189ac54830b07e0339dac"],["/posts/d2331223/index.html","2c256a49e025d1ba2c57acee4bc161ad"],["/posts/d5268b29/index.html","62c7211cc4fe69691690a23deed2a870"],["/posts/d7719dab/index.html","fea16079bb4f7b1d3fd36add521de391"],["/posts/de4de369/index.html","780416aeccb28200434317b19fa7a7ff"],["/posts/ea42950b/index.html","b332697df9a8204c5ba10bcf34c4fcaf"],["/posts/f3908263/index.html","e0b1e439a7e120874ccf446b2446526f"],["/posts/f6c5d65f/index.html","6179f86d997d04e348f052d9a4e804c8"],["/posts/f84657b8/index.html","7a5fee1708f41b0749b86b31ed1a827d"],["/posts/undefined/index.html","15b97c677bf169bf03a6e377ebd3fbdf"],["/shuoshuo/index.html","0b941f74e877820a21b9adfd4ba4ec5c"],["/sw-register.js","2bfc16dfc56a36b5683e68cad330d9f9"],["/tags/API/index.html","d5be4dfc1a78ef5f10e9c7d3b2c4aab9"],["/tags/Appium/index.html","fe55c561aaa3e4836b963783c35b2a4b"],["/tags/Charles/index.html","c241c637598472d58de96bf397165917"],["/tags/FLAG/index.html","82070306156eb9673e84760070ae8ac1"],["/tags/Hexo/index.html","54d25bf7cadd77d361c7684035585d2e"],["/tags/MQ/index.html","78e7663e957882bd7bb73dbb49b6dadf"],["/tags/MySQL/index.html","77f2275534b4f8fa852a9e1dfa4251f9"],["/tags/Python自动化/index.html","08d740d6feb8814d926cf9ac084e2d35"],["/tags/Shell脚本/index.html","e166cd88d460c569f122546269c4e3ab"],["/tags/index.html","d97dbca2254d797b02d923bce11b0b51"],["/tags/postman/index.html","ffa01e15d1e73b165d21246fe45542b1"],["/tags/博客/index.html","cddfc873cb443a1fb65cd89f9a12cbe8"],["/tags/自动化测试/index.html","74db95ed45fb103b9072cb41b6db96e0"],["/video/index.html","1362bcf2e0d6e79942b4bf6c5d240552"],["/风景/index.html","82651973db7ddf724911e5233c5b7af5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
