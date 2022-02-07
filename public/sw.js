/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","498340122b3552ec5c4c3b17c7e20c99"],["/about/index.html","1fee67864828a01a6cf829c83ef605ab"],["/archives/2020/07/index.html","af68023cdf841714816756df6001d8a9"],["/archives/2020/08/index.html","a39dce50e4db759c543f8b9b77639e36"],["/archives/2020/index.html","3460dad0025c9a45eaa6d261d34fdd4c"],["/archives/2021/02/index.html","ad48051ef23aa467659bd40b33cabe04"],["/archives/2021/03/index.html","57e6cc6cab12c58390de301acebb5513"],["/archives/2021/05/index.html","2fb5d131336886aa6d455a826a576869"],["/archives/2021/11/index.html","ee2c7d6b604bcc0ce3d80540f749553c"],["/archives/2021/12/index.html","f78f8235c78cccf25031214b6ae70add"],["/archives/2021/12/page/2/index.html","24e667ee21e3124a22b7fd548586e0bd"],["/archives/2021/index.html","075fd0928d04a4d7407b74b2e163e7b3"],["/archives/2021/page/2/index.html","2dcdee1171185f366ce33d1117ee75e5"],["/archives/2021/page/3/index.html","913fc18700d7bdc18857ff2f33d3c5fc"],["/archives/2022/01/index.html","ea62b7694fe8f770ad0f99b9c221bee1"],["/archives/2022/01/page/2/index.html","9a17cd2c8aa256d7c809c7da6a41f8da"],["/archives/2022/02/index.html","50740632df143ce0ae32f5d3354cbf21"],["/archives/2022/index.html","e578d4438f421c14b40e9651fc92761d"],["/archives/2022/page/2/index.html","5575cb83821029ede9b74a5f92d1308d"],["/archives/index.html","0908be012182089097dfa05e9b9668c9"],["/archives/page/2/index.html","a2aac7e55b8325cfa3e2109ed3f3537b"],["/archives/page/3/index.html","09c60e0acc9d29137a38058f45410540"],["/archives/page/4/index.html","9ffb3fff038a27947fab36f4a6c2353c"],["/archives/page/5/index.html","55030aa1a14f7c84f908fbdf726959a0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","506b5a6760da31737c2a8ea7aec3731c"],["/categories/Appium/index.html","87dc87de473e92e0781ea632b3e74c92"],["/categories/Charles/index.html","20b35215395c99db0cd43e474ec543c7"],["/categories/Hexo/index.html","1a27b6ee3772a49a564b18a2816fe40a"],["/categories/MySQL/index.html","a19fcb6cb53cf6eaf99dd75b20a0b355"],["/categories/Python自动化/index.html","3b8bd85ae4b6dbeb2ac4c34687640e8d"],["/categories/Shell脚本/index.html","142a11199cc858d4b9d3882387ad09dc"],["/categories/index.html","ab4aefc3000d852aa1c74bb049e3568b"],["/categories/postman/index.html","28e0a0efe3d74d44169149a6533be2a0"],["/categories/postman/page/2/index.html","41fba4451b2a47727b669b8956631bce"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","ee1e75a4d04c23d11acf7a53618246cd"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","708a68dca193b988c8cf168b58b4d3b3"],["/index.html","177f8760dc6f7cb026f253eb43b35ba7"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","2b88f12d93dbaf1365d47efba2e442ef"],["/music/index.html","144584dd0ab226a77e036dbeecc5d3de"],["/page/2/index.html","3f28da7d413768a360d3e136b8a31ca0"],["/page/3/index.html","4fa21023dee8d249e19e055f9fe1a351"],["/page/4/index.html","aebddf652ca4ae632682e98c47806c74"],["/page/5/index.html","2587c85aa9f69a19aa8e8a16e85579ba"],["/photo/index.html","e546a1773214c43684d806b2fba0231b"],["/posts/2173e2a4/index.html","3313fa68969c950e36b3c69a5ec4c420"],["/posts/2ab40ef8/index.html","47e911525aaf949cfdb4ae0835363a20"],["/posts/30fa304c/index.html","0d18438e4af7c041f95df91409c645f6"],["/posts/3447541d/index.html","136758877a1cc356fef405f73fc0ec61"],["/posts/3447554d/index.html","0facf350877455084589139452cef16f"],["/posts/344e3c5b/index.html","3a280ae496cc8d9aa619a5d178a47aac"],["/posts/3457ed69/index.html","25cba79c3e66f5fb2a132e5cf6a731d9"],["/posts/39cb083c/index.html","ff428aad36a8753e7385a63317018626"],["/posts/3ba53770/index.html","5fd26469a20bfa6d3ac69737e6990df8"],["/posts/3bd3916a/index.html","424861ded2decee95367e170584473b5"],["/posts/3e4105ad/index.html","97770a06bd1ff72993a5a4f372793ba2"],["/posts/42f034cf/index.html","d68dd43b6380b23252ed20f8cfdd070a"],["/posts/50a2b841/index.html","92910e98ff1e93a6d68c82d5eb5f8ae0"],["/posts/54eecc7d/index.html","c1f1e9a63786f3981b74eb0f252b7c13"],["/posts/5a17eb30/index.html","1917bc71096cbb0c257972e36d6a8fc8"],["/posts/66841aa6/index.html","1df9aaee91661af2445adff736ccd435"],["/posts/689fc75c/index.html","1736ca410147c05633be5dcefb1d9eb6"],["/posts/7de15477/index.html","d0c62a974bbf390bd4e2f4be85390d6b"],["/posts/8a00d2ea/index.html","d5360fc25204ca15983cf5fb9febd45b"],["/posts/8aa14a73/index.html","51c967e8023165b26483fe994316f827"],["/posts/96032b58/index.html","101aff1be52d04bed74a33d10146683e"],["/posts/9656df9f/index.html","c1b9eb055bedd89d23054607d3dfade7"],["/posts/a3886b70/index.html","453d0bbd99a109c986fade3d4b6a8981"],["/posts/a42e3f6d/index.html","46a5a618125a9dd99e973cf1c836fc84"],["/posts/a9438874/index.html","93b9d725588da16bd1434fdf2444cb4d"],["/posts/adb093cd/index.html","b8a73212b18f70c531411203b0a32a74"],["/posts/b4b3bf4e/index.html","85fa3725adc2d9013bc4e068b525df2c"],["/posts/b8685e49/index.html","1a2af504ad477d9c1b174d5216efe993"],["/posts/baaef441/index.html","a8d4aca782a4551cb0a2650b0e6d424f"],["/posts/bbd06fa5/index.html","8cf88eab59064bbe1e793582cb7c2b89"],["/posts/be476180/index.html","6978473076f48e6a238a30ef5d5a6e3f"],["/posts/c4b6dbb9/index.html","cb99e04a7ced26c016b5067fb2a69f32"],["/posts/c98d9940/index.html","2bb66456a91d0032fd885754d838de77"],["/posts/d2331223/index.html","7f072b9b6d367dc5dfc68c18eea26336"],["/posts/d5268b29/index.html","0e6b8189f048a8645ff930048fbcaa59"],["/posts/d7719dab/index.html","088f3efcc2f74f82b145a34f9f0f1f45"],["/posts/de4de369/index.html","330013c21ed7c4e9424aa99c3269732f"],["/posts/ea42950b/index.html","a4799c87dfab0c220a5e1ce431629a88"],["/posts/f3908263/index.html","5e9e82a137391ba5740d0d2a8ca21abe"],["/posts/f6c5d65f/index.html","3a1238462709196d14f6eb2c983ae08d"],["/posts/f84657b8/index.html","180ac1385597196d2b7f9d1f78fa765f"],["/posts/undefined/index.html","80c74b39206921c36f9a114b805f26b7"],["/shuoshuo/index.html","175c3d89298b091ac349879b7319858a"],["/sw-register.js","cc185af3d7f07e79a5961af3d7be14cb"],["/tags/API/index.html","816a039fe9730ae275c1657fbd766602"],["/tags/Appium/index.html","c3b225f85b94019014c4141948b7783a"],["/tags/Charles/index.html","9cbcabef54bc83b4f17600ffb4c900fa"],["/tags/FLAG/index.html","e1f563994e28c6a74ed4791abe2d24c8"],["/tags/Hexo/index.html","4866390ff903035d9fb98a306513122a"],["/tags/MQ/index.html","167da31d1da75e67e6faeb8098ec010a"],["/tags/MySQL/index.html","34b03e488bc8b7b4b06a593a18dca72d"],["/tags/Python自动化/index.html","95c384252d36675b22b6c7edbe739b41"],["/tags/Shell脚本/index.html","00973a722f06fea68fde18b459ba141c"],["/tags/index.html","76d0bd88d3be96cd019bb56457e51b43"],["/tags/postman/index.html","a36e23bdf11d8e8f731e445453679f62"],["/tags/postman/page/2/index.html","eb9d5fd5a3cffa203d0d60ef9fad6171"],["/tags/博客/index.html","7a0bef7a7dee5ed87ada858966ab0893"],["/tags/自动化测试/index.html","a0ad3ea4a5d22823b8ad93deaac663ff"],["/video/index.html","b41999a2e499a0fc00bc124b74944b06"],["/风景/index.html","9f6171d6d18726830242159f371356fb"]];
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
