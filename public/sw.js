/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","134ad2b2f8b0721a96e304c675a0d62c"],["/about/index.html","8f4e48c582a3b703a428454c65fbaa2e"],["/archives/2020/07/index.html","ce0be3933e2e26202280cfc0fc6c031e"],["/archives/2020/08/index.html","d7d03a0a2ca2902b1be49a2d10e93b0a"],["/archives/2020/index.html","ce77cc7107cb1fb74b50556f45e854d2"],["/archives/2021/02/index.html","e819fbd61720280f8baf6911a1c4c1df"],["/archives/2021/03/index.html","1dc35363c1203cdcd7e8055adf28bdb1"],["/archives/2021/05/index.html","64ca58358164d3be10b45aa0f0de9eb4"],["/archives/2021/11/index.html","2a9ed87b4f62d09d6d1839ea906c74a3"],["/archives/2021/12/index.html","bd517b49abf940783336a7014abb65c0"],["/archives/2021/12/page/2/index.html","7aed6e42b6297d7fb176ee8a8068d771"],["/archives/2021/index.html","b0a85beacbf0552ccc652c120a463078"],["/archives/2021/page/2/index.html","53e1e7e3b240fd9c759d2258398693bc"],["/archives/2021/page/3/index.html","e687c7e82903fbc3ce695589063a19f8"],["/archives/2022/01/index.html","f46b04d1361474b5e18f38118741a4f8"],["/archives/2022/01/page/2/index.html","fc5b5f6c0968d08a815327ad8adf53cc"],["/archives/2022/02/index.html","1524879c7af8d4e89516d22dd8503564"],["/archives/2022/index.html","2a58265c4d55aeb3bbeffe85e9e8aee3"],["/archives/2022/page/2/index.html","8b93fbcbc09ece3a86f61bf09a2c0b94"],["/archives/index.html","79a922298a936e082a9dda3f83a05c88"],["/archives/page/2/index.html","b96ef481c9f63d0aac093af2eaf897f4"],["/archives/page/3/index.html","45e7e7a971fe374e890ce2d18997514a"],["/archives/page/4/index.html","3b6447db7c43ca47e1cd50525ab0cc2b"],["/archives/page/5/index.html","f12a588e8ad630e0e1d402a73d5c7e66"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","be7626a50f5859bcd336190a4afb0186"],["/categories/Appium/index.html","79687583bd08a3073b9d4503a1e54762"],["/categories/Charles/index.html","4cad543eec13a4801acfa8735e543d68"],["/categories/Hexo/index.html","e51ffd20b493fa8f97b0536989c9a8e6"],["/categories/MySQL/index.html","3a58e70bdba420dee784e1d1cc2c908a"],["/categories/Python自动化/index.html","3d24d9f39c63e2f577de842cb7a552dd"],["/categories/Shell脚本/index.html","5cfc52a10693db9b422585be47cb3d6a"],["/categories/index.html","b61258cb1e923802e0a0c6dce48ad925"],["/categories/postman/index.html","4955117672357ef0d3f48118ce39c7fd"],["/categories/postman/page/2/index.html","d363c6edcc9b96e5236d17f8dabaf915"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","ee1e75a4d04c23d11acf7a53618246cd"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","708a68dca193b988c8cf168b58b4d3b3"],["/index.html","33e626be989b9f8d119fc4204b1fbf72"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","91b404ef1c9be6d1d89d4da33e6cb858"],["/music/index.html","f6764b523c68ee7a31c61f10a351a53e"],["/page/2/index.html","af3cc4d6fd1d554c0f0c7ff47ba9d1e7"],["/page/3/index.html","a66801534e0817acfb3e9d67b5b7ea7b"],["/page/4/index.html","fa48300d30243c48ce98a6f0f0c5fc4c"],["/page/5/index.html","00a71062c7b688b086b3355afe39b417"],["/photo/index.html","418638d7604646e227b4aec02e8e9de2"],["/posts/2173e2a4/index.html","25d6880f4c10c79e39e9fbd401fbf170"],["/posts/2ab40ef8/index.html","2c7ca6a56bb3c71a17b159abae2271e0"],["/posts/30fa304c/index.html","b5722dbb4889eee1947927ffb18ea7fb"],["/posts/3447541d/index.html","8657431890f8f7d5c7c5d2313cb05a34"],["/posts/3447554d/index.html","4611a2e33ed939570a7027ac157e110b"],["/posts/344e3c5b/index.html","b1871355e623641274e022889d459858"],["/posts/3457ed69/index.html","783e4975cc7b125abe5d6ee4e2acd40f"],["/posts/39cb083c/index.html","00b37cc60d565c6d57fbf1497133614b"],["/posts/3ba53770/index.html","824d926a33ef645d8a013113b170b6f2"],["/posts/3bd3916a/index.html","dc62542dee8cab6ff614a02e6a38f00d"],["/posts/3e4105ad/index.html","8d3778435d01b6889b02eee559473280"],["/posts/42f034cf/index.html","ab08a8ca29f03a726b9c552bd057e7e8"],["/posts/50a2b841/index.html","864f39285ae9159748e3719ad746ed53"],["/posts/54eecc7d/index.html","a97984ccd8f97ec02320bd4d4fec4beb"],["/posts/5a17eb30/index.html","ee02f500be268c6cef0526f0bfe96122"],["/posts/66841aa6/index.html","2265ffa8d5172e08c86bf1a069ca5e80"],["/posts/689fc75c/index.html","3f69c08cff83c87c0ca9b717095fcf16"],["/posts/7de15477/index.html","a76d678920617ca26d6ab8a7da24535a"],["/posts/8a00d2ea/index.html","f461ccb6f835646bb9aaca4ed48acd32"],["/posts/8aa14a73/index.html","de5191e6e0d48f5fb9a06231df8d132c"],["/posts/96032b58/index.html","75f973527527db0d7f4b16039d230b4e"],["/posts/9656df9f/index.html","78c0012757ffd470b69f3434b069b35a"],["/posts/99817e93/index.html","3946abd516ecdee1fa5452bf1c44784a"],["/posts/a3886b70/index.html","1d720dbf15987fe5de90b9c44476ad74"],["/posts/a42e3f6d/index.html","746d2d009003aeaf661431f539b63a96"],["/posts/a9438874/index.html","d36b33670c202c6c055b9755bf57ecea"],["/posts/adb093cd/index.html","f744ed4d5bf233c6ff1fc6706b2642f7"],["/posts/b4b3bf4e/index.html","45e8c4b721876a1a4494a360a81260cd"],["/posts/b8685e49/index.html","53a994f9ca97d6a211d847f8c96578e6"],["/posts/baaef441/index.html","6b759d4a1ce9ffe706615c8d28c840f0"],["/posts/bbd06fa5/index.html","0e5c5ed11edf157434e26604011b1731"],["/posts/be476180/index.html","947fa5ffe3a947ad535204979f0c0b47"],["/posts/c4b6dbb9/index.html","99bbebb98ebe8888a7ea0cef8cb0545b"],["/posts/c98d9940/index.html","118671e7f2ae739ada1726ef1fbc90d4"],["/posts/d2331223/index.html","d8665e6ce547f946836be0fed676df8e"],["/posts/d5268b29/index.html","eb343e17d40f1b6a43ef3813307b6048"],["/posts/d7719dab/index.html","9b5862e84699082d63ff78756c3dae63"],["/posts/dcc42dc3/index.html","edaa5808b72d95cf17903fe719a79c45"],["/posts/de4de369/index.html","717e3a5c80d1b35bf633f739f68c3f5d"],["/posts/ea42950b/index.html","94f50349739033a6a71dc0b57e0c3b7a"],["/posts/f3908263/index.html","6ebbba7ec7fbf00896c21272f2ca6355"],["/posts/f6c5d65f/index.html","a55bea1ee3a1de077ce060e6fe4f305d"],["/posts/f84657b8/index.html","1ae1524ee29ddd86f9f35304717fcc4f"],["/posts/undefined/index.html","78adab48864decdebcbc6bfae9213593"],["/shuoshuo/index.html","d00554a6ceb968ad42bacee6e5bf4645"],["/sw-register.js","81e6865679a128a111271960fcdcae7d"],["/tags/API/index.html","fdd790ff131fdf18f643e8f4bf9811b9"],["/tags/Appium/index.html","659f819ccc9a5c201b2085c2e2e15546"],["/tags/Charles/index.html","0d68e8df9b7ce7086817289fbc937121"],["/tags/FLAG/index.html","7d31d4dac0cc0ed7617f054df5f23490"],["/tags/Hexo/index.html","635584f208fac9af30f07e4723fc109a"],["/tags/MQ/index.html","ff8e76ce4edcabba28f41b9d617866fa"],["/tags/MySQL/index.html","63c130ab9b226ffffbbd0a6525017e72"],["/tags/Python自动化/index.html","75c559bcb2689f7ecba8aa8824f8753c"],["/tags/Shell脚本/index.html","9270e955a86e86196b77c3215d158eb7"],["/tags/index.html","46c21f4930389f64d52d87bf9006a74d"],["/tags/postman/index.html","eb05ee4d92ced9023c7e059b28e905bf"],["/tags/postman/page/2/index.html","677035a6cf8f58c83eb6d6c050f5eab4"],["/tags/博客/index.html","701ffebd1dda792559b75e191028982f"],["/tags/自动化测试/index.html","d0e6984b3100daf7759a8f4439c9b8d3"],["/video/index.html","29cd619dbe394df116fd43f2cb62564b"],["/风景/index.html","e1f1d55cc5aeb258f2f5952f6611232b"]];
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
