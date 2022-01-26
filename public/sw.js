/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4593623face1984d14e62b7a5b1efc49"],["/about/index.html","4c185ca7f1e3544fc59399fe351b58b6"],["/archives/2020/07/index.html","2a4e5a0f1a4f7d62d3575e290e058364"],["/archives/2020/08/index.html","52a5b3b6795afeb0cc94e8e832712624"],["/archives/2020/index.html","2d083a4b2d8a41282a4cc287cf1508b5"],["/archives/2021/02/index.html","a817b5052506d90ce93b1540f4419580"],["/archives/2021/03/index.html","b9f8bd9b5ae172162416e3768391387c"],["/archives/2021/05/index.html","b1b02d86d6773e27c60c264ce932b56b"],["/archives/2021/11/index.html","89fe148ca5d8c452495b7a4347d5b227"],["/archives/2021/12/index.html","c2b2ff9d2cd671b916a8ef4c1d6068b5"],["/archives/2021/12/page/2/index.html","79abf86d680cb898374b40a4fdd24862"],["/archives/2021/index.html","697deb70b0daec94899d3c802264ee26"],["/archives/2021/page/2/index.html","1e01cdce989c77513c74edeec717785b"],["/archives/2021/page/3/index.html","0f4e550d133dd3833e24bae05cf75f75"],["/archives/2022/01/index.html","44a0a27c0a4d88807e4dcf5864123a3f"],["/archives/2022/01/page/2/index.html","ee73b84d4262ece0cc3205893c543ba5"],["/archives/2022/index.html","2bddf07496f5e5b55b291d1ef1ead732"],["/archives/2022/page/2/index.html","42645b94f6500e2f98c5e3fd4fb1c1c5"],["/archives/index.html","96c5e086a7f387d8663d5caab54dc351"],["/archives/page/2/index.html","ab0ed282b72a262aa91a6500ab259ee0"],["/archives/page/3/index.html","6c6982462095339ecbdf7a8fe7e6d37c"],["/archives/page/4/index.html","0436abaaa1f96b3d9b227a3053577df4"],["/archives/page/5/index.html","4e7463a24f470a15b0b0e3b51223a2ae"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","ae9afbc5a83b9fb9f07a3091e78cd35e"],["/categories/Appium/index.html","d77b91228cf0eca3fc0c562de669ebcf"],["/categories/Charles/index.html","c2dc6bb284c1061aa274090bbf412520"],["/categories/Hexo/index.html","c6bf3376ee9110b68e0961fd04525844"],["/categories/MySQL/index.html","fadcc3db94dcd8d6b1e53cc843b343b9"],["/categories/Python自动化/index.html","336a15ddb1e4c2f67a3128bf7d69268b"],["/categories/Shell脚本/index.html","be3aacf352cf60d3b5ada4686014552c"],["/categories/index.html","f7ff2f3e9fff9958b5638ebac5676e97"],["/categories/postman/index.html","4ad758967593fff2a57427f2fa8bea13"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","5ccfd2bf25d0e02204b74ba10b3a8f4e"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","74ec43464762c195501f908e468320af"],["/music/index.html","588a92bd9fa354033cdd78d83b4c045a"],["/page/2/index.html","5547a77fd78e5af3fe7907bff8ed918c"],["/page/3/index.html","4904915736a3a850a2dbde50594dd7a5"],["/page/4/index.html","dd1a997491fbbb798b5167cad44fa70e"],["/page/5/index.html","b0644cf134b61286abbbafd732b88944"],["/photo/index.html","5360d2c5e5d5e4b1c14852480ae1134f"],["/posts/2173e2a4/index.html","c4eef35231646eb29b51cf26d2ad8ba4"],["/posts/2ab40ef8/index.html","edf46ce71aee535ee51a6eb79ad908da"],["/posts/30fa304c/index.html","fff3837326eb0abf110df4231d20fa28"],["/posts/3447541d/index.html","0b9eed67be14167a4693655e91ceef72"],["/posts/3447554d/index.html","7378c59201ee7236502d2d8101178385"],["/posts/344e3c5b/index.html","fd7a2d22f29d4e52c0ebd3d80d1cdef3"],["/posts/3457ed69/index.html","da6c9e15b3ba47ece8407f0806b73cc4"],["/posts/39cb083c/index.html","f8c50b95e1295aa185627e87ac4b43b9"],["/posts/3ba53770/index.html","11059f696c9e15d5331f465916aee3ed"],["/posts/3bd3916a/index.html","32f21f0d9294804168f12c896c865e04"],["/posts/3e4105ad/index.html","a6914ef467cda2d9898172659f210d3c"],["/posts/42f034cf/index.html","01e2ced7c20c8579c6f0ef51bcf459d9"],["/posts/50a2b841/index.html","97de6cb5596cffd07125d8524a634cd4"],["/posts/54eecc7d/index.html","b092c28207593af6d6a1e8bcff93e935"],["/posts/5a17eb30/index.html","7d30e2163aabc583b006cfb70b6e3fee"],["/posts/66841aa6/index.html","6cbcf4b27ec519bc2d080e7ca9d165b7"],["/posts/689fc75c/index.html","0261cf669366fd7b4624c51663b72910"],["/posts/7de15477/index.html","9e6703baecd6895b9de502f822f04160"],["/posts/8a00d2ea/index.html","750058eb1b8ae5ca8e55afe929acd7fd"],["/posts/8aa14a73/index.html","3aeaffebb5bef497f8e6f5cccb916737"],["/posts/96032b58/index.html","19ce1334af33714a7b4c0e482ab28fdd"],["/posts/9656df9f/index.html","67f26f462c391569b84034f1ba69f3ee"],["/posts/a3886b70/index.html","5bd0376f24e1ed6bc99f4075e0b23f6d"],["/posts/a42e3f6d/index.html","6704c113b0e43704530b9d000882821d"],["/posts/a9438874/index.html","dc2967f7c476fbf4dece19db4aed54ef"],["/posts/b4b3bf4e/index.html","357d8f07a7324f82c77a5ecceb357202"],["/posts/b8685e49/index.html","6058ed74d5a6790100284bd0d3dfff33"],["/posts/baaef441/index.html","cac0a3cbf2ee3bd4993350050290b8b1"],["/posts/bbd06fa5/index.html","d0652ff374e92d4641e7c8aaafacd725"],["/posts/be476180/index.html","2f40e0d4cca1483e45aaef8c9588dd1f"],["/posts/c4b6dbb9/index.html","2e8bc9ff088b472a39053ac3825330e3"],["/posts/c98d9940/index.html","c5b96617b99fdc0bd471ce16febadee2"],["/posts/d2331223/index.html","eccd9861af0914cbe0e56bb1b689272d"],["/posts/d5268b29/index.html","a168354e09681d2d6c42ce3f78880bba"],["/posts/d7719dab/index.html","d4a413e92e75c18d35223dbbca9cddd1"],["/posts/de4de369/index.html","b27ac5a493166c4035d82c7202a3bed4"],["/posts/ea42950b/index.html","b3f8e5f4eecf7f9c5bf27ea11b8d75fa"],["/posts/f3908263/index.html","0f3bbc9621de3537e3737d43b6691e41"],["/posts/f6c5d65f/index.html","6179f86d997d04e348f052d9a4e804c8"],["/posts/f84657b8/index.html","8e9c2c77d9d53ec9488590dbfe22cc85"],["/posts/undefined/index.html","bc3037df2c10bea3499b1e53bb79b0da"],["/shuoshuo/index.html","6c6f93015a365fcac9949ff80bed70b7"],["/sw-register.js","8924e115effeee78a6562d2cc5224616"],["/tags/API/index.html","95657dfeca1d0e7d1d8669e3e7ef3204"],["/tags/Appium/index.html","197d675269fe4b92eb956358ad3c42de"],["/tags/Charles/index.html","a721d305a717d5a926dcd6dce746fe56"],["/tags/FLAG/index.html","50ccadc61adb1b6c6da2ee6af94e39f8"],["/tags/Hexo/index.html","caad72149d6d2fb409707a50dcb18155"],["/tags/MQ/index.html","f69d2dd2da12807ed7946b03b98e22c2"],["/tags/MySQL/index.html","9dfe6ef3cd1525b11c45f8d040f7b528"],["/tags/Python自动化/index.html","e2db00954f50edda686d29ea448a31f8"],["/tags/Shell脚本/index.html","96167030717a4f16600194c53c80fe28"],["/tags/index.html","08807490edc575fe674c1277a075c707"],["/tags/postman/index.html","7f59886f231ac119da37d1057a9c536d"],["/tags/博客/index.html","716fe8c640d7cbc8e1a51672854de564"],["/tags/自动化测试/index.html","83588c848c3936fd261f2ee05447881a"],["/video/index.html","6e9c9e1d2ce818936be95ea885e0254b"],["/风景/index.html","5e733c1defb0a33e0a55701104eb56dd"]];
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
