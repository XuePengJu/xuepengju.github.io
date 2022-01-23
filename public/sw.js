/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7d8ceddc3615294fbaa809bdf155a504"],["/about/index.html","1c88bef83884b97e4bc66dc9ae055606"],["/archives/2020/07/index.html","03bf035417d22661625fa42b64569807"],["/archives/2020/08/index.html","5b97e58054c30a26627954f00134128e"],["/archives/2020/index.html","3bb2207f1df5f262e9776c2601349934"],["/archives/2021/02/index.html","e9b425f1f3b45034ab4a79260b6f2ac3"],["/archives/2021/03/index.html","39cc52f989e684b762f2ce71606ad08c"],["/archives/2021/05/index.html","3c5da20c977dcc0273a18b4e865e5ff6"],["/archives/2021/11/index.html","0c817a0bfe4704654f1dec79780c73e2"],["/archives/2021/12/index.html","0fc7afed8d66895f46f073e13839e46e"],["/archives/2021/12/page/2/index.html","0db26fadba6e62d887e6fb0ccb559342"],["/archives/2021/index.html","4475408394d749ffa9d536c166e6c880"],["/archives/2021/page/2/index.html","47123e7e5d0f5b9c67fb018fa33725e0"],["/archives/2021/page/3/index.html","6ca4c312c0387c05bcfdb379c44b8a11"],["/archives/2022/01/index.html","33bf960d75a22690223847bcf9c149af"],["/archives/2022/01/page/2/index.html","36964d76e441f9d875f96df434d3b241"],["/archives/2022/index.html","ed312d89c4c4e5092174c7ac7b01b624"],["/archives/2022/page/2/index.html","41f80db0bd3b72135e767a6339ec786e"],["/archives/index.html","6e06453a953a850576fb11c29e90cc2b"],["/archives/page/2/index.html","20ac9de842f2dee040aec2dce4c92925"],["/archives/page/3/index.html","b8054fbc2c14e2641bb846222427b2b2"],["/archives/page/4/index.html","170d0f36b5ff0942a041f6fffd060bf2"],["/archives/page/5/index.html","f50f937e6681e34e2b401c3457f391ec"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","88d32e7b06650f04f62d7be060e93036"],["/categories/Appium/index.html","43dd9c1949e13922ca63c9ace0df078b"],["/categories/Charles/index.html","ca3e108ad5782da1726bc5da74b05767"],["/categories/Hexo/index.html","6bb62a914ce46e386f03b7a349aabd79"],["/categories/MySQL/index.html","e6ac998a5c2cbee1093620deb75adf60"],["/categories/Python自动化/index.html","c79322f1813f020c012d4b6d4ef47b41"],["/categories/Shell脚本/index.html","3ddde0ba6235e102ec1bb9ca161f7fb2"],["/categories/index.html","f7ff2f3e9fff9958b5638ebac5676e97"],["/categories/postman/index.html","74ef9b5523cb544bbf7f3a0905d26c74"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","ad0daae7f347af44e318c14a4c998bfb"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","41bf6686767baf6eb5d17a72a41fb426"],["/music/index.html","54ce5fac4f9c65e1d569ccfb9bedac45"],["/page/2/index.html","76be4d755bebdd0962a3759e28c425f9"],["/page/3/index.html","8c46c201098c4d67a35ecf1b6a986720"],["/page/4/index.html","fbb034a5dc891e7a37ae4ed445082217"],["/photo/index.html","84d13324e564f42c4f98e80c1aa10cd9"],["/posts/2173e2a4/index.html","1d6e4b82441a9944b8c038899f74cf1f"],["/posts/2ab40ef8/index.html","2829253cf377d3ab364f447341419ff7"],["/posts/30fa304c/index.html","c095ed40f46d862223e5313dd385a027"],["/posts/3447541d/index.html","b0064043b3fb8e4e47f59a88fe15bbe3"],["/posts/3447554d/index.html","b90d89a33bf99b6e20409eb09ae3019f"],["/posts/344e3c5b/index.html","c817dbad74936594573fcc4c72aa7ca5"],["/posts/3457ed69/index.html","da6c9e15b3ba47ece8407f0806b73cc4"],["/posts/39cb083c/index.html","e5d7eb72ebd10db2e8eaaf645d4a3256"],["/posts/3ba53770/index.html","2bb96e2fa8d58101d6f9b72e7f7077ba"],["/posts/3bd3916a/index.html","ede89e65ad22a30df2ea1d985a222147"],["/posts/3e4105ad/index.html","303d58ffb55342b2b552f2647fd4897b"],["/posts/42f034cf/index.html","1349f49cd93a1255e3f50f7024be5555"],["/posts/50a2b841/index.html","dd4070f13c90b393c69dd4fe1da1edc7"],["/posts/54eecc7d/index.html","1026499361632ca069f3c6832a7e561f"],["/posts/5a17eb30/index.html","f67777e6568cfe2e6eebcf1eb1f4857c"],["/posts/66841aa6/index.html","0a81a127876b5250c36a40f50e53e61e"],["/posts/689fc75c/index.html","3451c18db13e81d05e0716b2619b6414"],["/posts/7de15477/index.html","fe3224807c0dd12307b3ce1b5b554a93"],["/posts/8a00d2ea/index.html","ecd17f38a80851edf065f6f9b9350146"],["/posts/8aa14a73/index.html","578f31a410dd3d4b7daab98f800a0788"],["/posts/96032b58/index.html","64e0c6093dcfda7e0cf5c383dfaec7b6"],["/posts/9656df9f/index.html","804364c6dcf449c1744df128e021e2f7"],["/posts/a3886b70/index.html","54c44330c653fc101e202b691ed5a196"],["/posts/a42e3f6d/index.html","88d219ff8064c121ed2a8ae28f694671"],["/posts/a9438874/index.html","5e862931641167c83d2d7f0630f59437"],["/posts/b4b3bf4e/index.html","6b374ab99f2e81ab62e15d00378591ba"],["/posts/b8685e49/index.html","06413c54a129ee289da06b9a47f74d05"],["/posts/baaef441/index.html","f369cd4c39940b4be7ea9954c50788e5"],["/posts/bbd06fa5/index.html","dedb7971d3d3e3f92795980d5a7fb8ef"],["/posts/be476180/index.html","adc4ea545411b826bb918fdc0e8a0526"],["/posts/c4b6dbb9/index.html","49463eb044e1cbb534486949fcded604"],["/posts/c98d9940/index.html","2b2b2758137bf56a3bdc447407605be5"],["/posts/d2331223/index.html","30222e898a9d73e39d2dda6f901a5237"],["/posts/d5268b29/index.html","d5f022e90ae32bdf1a0ba69de7e3c3e4"],["/posts/d7719dab/index.html","085ce0a2e4a494e931c964ac6e3fbabf"],["/posts/de4de369/index.html","59df8c09cafa70b9037301e13b32a7a9"],["/posts/ea42950b/index.html","b332697df9a8204c5ba10bcf34c4fcaf"],["/posts/f3908263/index.html","0937db88d55113623ebc77a35a7ba830"],["/posts/f6c5d65f/index.html","8800aaad654bfcf75351e37294db60dc"],["/posts/f84657b8/index.html","0f302bebee7cea522a23bc4b0ca370c4"],["/posts/undefined/index.html","bc3037df2c10bea3499b1e53bb79b0da"],["/shuoshuo/index.html","edf6677766996b95f7a4c3455488c14f"],["/sw-register.js","5a8589cf0c1aca59e471edeb96ad6968"],["/tags/API/index.html","c8d6d5ba7ddbed6a7dfb53e06f5f6b46"],["/tags/Appium/index.html","1828fd1ad459d3ef3caa818b64d361cd"],["/tags/Charles/index.html","febd833df945c08c76814cc63fcbc478"],["/tags/FLAG/index.html","ab51e6ef759e360bb57d91e6af36c770"],["/tags/Hexo/index.html","8e378084e1c9e0846e9e65bf066e3640"],["/tags/MQ/index.html","672d0af8847fdf16b71780dcbb204e5c"],["/tags/MySQL/index.html","27811302fb4cdfad1887d9851713d5a7"],["/tags/Python自动化/index.html","2502e4b314f23a9d63907bd11c7f380b"],["/tags/Shell脚本/index.html","99627527264a4a7a4d7b01648298d5c3"],["/tags/index.html","dab98db8cdea00eace87083aea3f64db"],["/tags/postman/index.html","32d678285bfb37d884d5bbdd6830584d"],["/tags/博客/index.html","0f356aee323c1f77410292fb4f00b918"],["/tags/自动化测试/index.html","9aab1368a0ff5df8a3f9ae3ad8afcae3"],["/video/index.html","6e9c9e1d2ce818936be95ea885e0254b"],["/风景/index.html","db1644a5d53dbeae5c8bc0f4b42cdbb2"]];
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
