/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","73ed639ad7579a10b93d9f766d78ed56"],["/about/index.html","4a7600c11005ea1b8c967400f8d57998"],["/archives/2020/07/index.html","8699157d2f8c5ee398d968157bece8cf"],["/archives/2020/08/index.html","c404b007c8f0d12425f6baa1896e8d98"],["/archives/2020/index.html","fccb1e44c3851c748c53d082a50b2aa9"],["/archives/2021/02/index.html","39a585bc6ffba7b210796c5e410e7b9a"],["/archives/2021/03/index.html","48334c04a1b4442444600e99dc4bea02"],["/archives/2021/05/index.html","632fc8085602bba66b315aa0fa21969e"],["/archives/2021/11/index.html","aa1d2dac270bf8b435237e18d3207daf"],["/archives/2021/12/index.html","492159b26fd2877a0af2d89dd65c0358"],["/archives/2021/12/page/2/index.html","fc19fe91feeb4e9368fbf2af72656970"],["/archives/2021/index.html","e85233d4dc9127df3335a7589367daf4"],["/archives/2021/page/2/index.html","90823ddc6a05fe447b04dd86b91cb6cf"],["/archives/2021/page/3/index.html","729da3cb0fb19e552b9e636503e7411b"],["/archives/2022/01/index.html","7739c8571eefabb5abcba5257cb1d62b"],["/archives/2022/index.html","75c370dc6feeaa9716648f6b2219f02c"],["/archives/index.html","46ffab869b79e6ba7d145f8dc88dd983"],["/archives/page/2/index.html","f6a03786af1c29fd5923f9e299c47176"],["/archives/page/3/index.html","c4b42faa90d77ca56ff89482960d6819"],["/archives/page/4/index.html","88a987550847456c83754903c0e01416"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","d33944c5da0919e9f0081b88795643c2"],["/categories/Appium/index.html","4a491abfd876a1a1326a26ca34a1d9f0"],["/categories/Charles/index.html","5f67c7a0222924452bdbbdebeeba128b"],["/categories/Hexo/index.html","ae027900bc7cc3311fe30645605114e6"],["/categories/MySQL/index.html","680efa259513c3bf48f53def688e57f4"],["/categories/Shell脚本/index.html","a1e6a87d981f9cf31939ca56ef2890b3"],["/categories/index.html","b9ea7ebaa1da17610f3815df5ac44223"],["/categories/postman/index.html","09399dcc6091367a1f1e5d90373a84bd"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","2b190967f2d84e8e92151b5307fe0f1f"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","2038d4155e8d528465baa7d709932776"],["/music/index.html","624c3d70001fc15162b855de7afb5f50"],["/page/2/index.html","d578d0a5d16615ded62df7289abb3f62"],["/page/3/index.html","aa35b203f94d7ce5e1296a78ed9d968c"],["/page/4/index.html","14751edc2176eed8b1953cc207cb45b7"],["/photo/index.html","e429a0446aeb1991aa529100e57640bf"],["/posts/2173e2a4/index.html","fc79cc0dcd168732edc377c68e5a51d0"],["/posts/3447541d/index.html","0597ff4408e3791dcfaac30f9e95f7d0"],["/posts/3447554d/index.html","b00d08162209337c44451242a8e03a0e"],["/posts/3457ed69/index.html","0d1dca6a0a2df4c06fed830176a18b52"],["/posts/39cb083c/index.html","b919f3e2cf31162b4d8731d82493aceb"],["/posts/3ba53770/index.html","80675871e6476f2c1d1a198ede46be33"],["/posts/3bd3916a/index.html","064694df9f35836d855021519cfbe68e"],["/posts/3e4105ad/index.html","6bd824758d35bf33099eccd84c413cb9"],["/posts/42f034cf/index.html","4af1fa738b6c9d7a67deef07ee2be680"],["/posts/50a2b841/index.html","a9511878d8cdee9dbef3ae7552cbb396"],["/posts/54eecc7d/index.html","dc49c698a5a84895d1ab9ff5681e0839"],["/posts/5a17eb30/index.html","1630d8337d8d7da57145c97a93f44653"],["/posts/66841aa6/index.html","0464b5ca73585e272ec08249fb81a18d"],["/posts/7de15477/index.html","016bba40cd1104dc2699a31fcb89ae93"],["/posts/8a00d2ea/index.html","bdebe40d0343886e93b1070e17a1b0ad"],["/posts/8aa14a73/index.html","f8ddc53630f44398f977ec1b97bea9c1"],["/posts/96032b58/index.html","561d8e43deae36ba797fc74b38cd3f03"],["/posts/9656df9f/index.html","fdcd7d150169f75df555376c0c920395"],["/posts/a3886b70/index.html","2a2f167a16cdca150e38262aea08dc28"],["/posts/a42e3f6d/index.html","a71a77b22dc95ea6ff3333d9882a6fd4"],["/posts/a9438874/index.html","8c10c95c221c32091628155e415c1bd8"],["/posts/b4b3bf4e/index.html","208df3c31d2343ea980d6975a7f1481b"],["/posts/b8685e49/index.html","281e8cac0c434a6d89fe807e1742f3a0"],["/posts/baaef441/index.html","9af6dd44c854504cab90cd4c4f02834f"],["/posts/bbd06fa5/index.html","eae871cc7a0fdf54a8611d0b86173100"],["/posts/be476180/index.html","ee636e838b017abb5552417c344a37d0"],["/posts/c4b6dbb9/index.html","f250250d1a36fa549911e8b1f7df6c41"],["/posts/d5268b29/index.html","027f30d9eb2f652a9395e204f212e423"],["/posts/d7719dab/index.html","d078d2a4af8ac622bc55abdb9c4ddd2d"],["/posts/de4de369/index.html","0d94d88b3d1f961ff18332f2254cca91"],["/posts/ea42950b/index.html","7858e27d903f8b034453e283f39f1b1f"],["/posts/f3908263/index.html","5a480b0583f30082ed46a462b0ec94c5"],["/posts/f6c5d65f/index.html","09f921590211c9d329484a1b1790c76c"],["/posts/f84657b8/index.html","2503d2a40a201513f9b2f646244b261e"],["/posts/undefined/index.html","c71e6b9bb4816a1983cf36a5751189e8"],["/shuoshuo/index.html","e23cb0ecca7781f3ecfa19a973ad83d7"],["/sw-register.js","bf84e8f16078567e0abb966f46186ecf"],["/tags/Appium/index.html","48843f11c30b559ec247be3ec4d23a6e"],["/tags/Charles/index.html","a1887e7ccd0187ef5b9dd75dcbc3ec50"],["/tags/FLAG/index.html","d41b4fede8df59e74336bc1d03f0b68f"],["/tags/Hexo/index.html","8f0aad5c542c0f5e639195974a6928ba"],["/tags/MQ/index.html","38a76708d7c6dab36f375a10b989223a"],["/tags/MySQL/index.html","8e4efa23f0fdc6f516cd77d2e0b96e7c"],["/tags/Shell脚本/index.html","3dcfdc75979aa4bc0822d2ff0ae8b999"],["/tags/index.html","20f76e4a25617b6b34a5ccbc95446a47"],["/tags/postman/index.html","56e4e97e48175626b87191f8a80acf26"],["/tags/博客/index.html","bab980de377900571618035ff9359a6c"],["/tags/自动化测试/index.html","7d1a693142f6e6b7818f880816a000d1"],["/video/index.html","ecbe83765b0557bb1c4f098303316f8b"],["/风景/index.html","d1ef96ab5fd8eba7621e784c7fa9aa88"]];
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
