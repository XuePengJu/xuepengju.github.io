/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8843f9a57b0b2c2e59ceee408f5b2653"],["/about/index.html","715edd4c0897554816be5cb8427af0f4"],["/archives/2020/07/index.html","42ded476bff38146a8c3d9d358a3f5e3"],["/archives/2020/08/index.html","1fc9da30e15aba8ecd2685076533bb22"],["/archives/2020/index.html","42c12de1e9f81aa688d3716922a6fac3"],["/archives/2021/02/index.html","68a0be4203764a82ca559a97085cfddc"],["/archives/2021/03/index.html","15194a64581fcb93f01a0e1f40c387d2"],["/archives/2021/05/index.html","d76c1186803ee956a5583141c0480b9a"],["/archives/2021/11/index.html","44beac7333b6903d48cf439a8c748eb4"],["/archives/2021/12/index.html","ec5631d5cba97aa9ae8e33b806a68511"],["/archives/2021/12/page/2/index.html","80c7453cd52740df663d32fa67560805"],["/archives/2021/index.html","a25485bf9b6747f0dca69cdc4d747bcf"],["/archives/2021/page/2/index.html","003690e2cb8cee82f17e2fd2ae4c4ab5"],["/archives/2021/page/3/index.html","7b4756a5283013fc2370982aa6a6c4b3"],["/archives/2022/01/index.html","22fb42833517370e884f266b20df6608"],["/archives/2022/01/page/2/index.html","f6e556284f153c52dc0ae0e17a4c61c4"],["/archives/2022/index.html","f49e45451e88d49085d35fc20c4dd85d"],["/archives/2022/page/2/index.html","96b124258699be2fea7811e02fdb0170"],["/archives/index.html","b78a6f1c9c680c2abe8a5daf614614a8"],["/archives/page/2/index.html","4c385ceee62562e23291da2b776b0d73"],["/archives/page/3/index.html","0070a7870ba43c55addb582fa5de7094"],["/archives/page/4/index.html","266987b833d54aec4e2f4780db378e66"],["/archives/page/5/index.html","cb0eaac2f2a9e77249c3f544df8ffaea"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","33ab453120a0acc902da3f6145146962"],["/categories/Appium/index.html","7efc1d536207a258a3b66ce56af79bc2"],["/categories/Charles/index.html","4eab113f133f886538872da1ff310452"],["/categories/Hexo/index.html","c6db17e7afd15fa0ecbe7b4d0b69dadf"],["/categories/MySQL/index.html","69d8eb6ce15873a280332e4e991bb363"],["/categories/Python自动化/index.html","454eaca53149ad1bc53d1b26e8a37ce6"],["/categories/Shell脚本/index.html","320d02f135dfb2e6c8d6e86edac597c8"],["/categories/index.html","db0b069f8a6eda01e417575b8d59170f"],["/categories/postman/index.html","cb788eec88cabfe62b230ab3e9ec0051"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","c28ef236ebe090cfc1da98da85830e5a"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","8ba242813237ed778ce5e1d7458426bd"],["/music/index.html","95af771ae9f97284a692e40e703dab56"],["/page/2/index.html","642dc145f990ecc22d824839bb460fe0"],["/page/3/index.html","e44fc260a634c8598be8d52a8c7e9909"],["/page/4/index.html","65fa2a4dbe6c5e7f03dafb1b79c62344"],["/page/5/index.html","fe2b7172416edbf38cfa5ec6e7aaf647"],["/photo/index.html","7f81efa986954d676a469ebb6df9dd68"],["/posts/2173e2a4/index.html","50567a29a8e3317f0468a10e269c7558"],["/posts/2ab40ef8/index.html","75810ed7e5b7d357b38e137ef6265fad"],["/posts/30fa304c/index.html","6069a976e8a8a03f8c5dbfd5966b43a9"],["/posts/3447541d/index.html","484bda85edd8498ec54006adc3729058"],["/posts/3447554d/index.html","fdbe812129620a41aba9a914f23dfc88"],["/posts/344e3c5b/index.html","b45311d7497eb5a58b19902cba30309c"],["/posts/3457ed69/index.html","78ce8a579683d5c98094c93956d2c37e"],["/posts/39cb083c/index.html","2ce3da17c516c1790e890ce660776746"],["/posts/3ba53770/index.html","38fee62bdd577697b90723d794ffab8f"],["/posts/3bd3916a/index.html","693d1476371c722112ea04fed6f888c5"],["/posts/3e4105ad/index.html","1b27025942caebb6dbe0a2ca2efd7e2e"],["/posts/42f034cf/index.html","a84427b6e54c729a365efa9f967ba9d0"],["/posts/50a2b841/index.html","37590438208cf9baefb9d5064f368148"],["/posts/54eecc7d/index.html","4bd05d73dc822d63b285bf243d2b6c50"],["/posts/5a17eb30/index.html","d1f0a306b573b86bb65b39f725586585"],["/posts/66841aa6/index.html","699fca23cc369f6283afdafe301c1397"],["/posts/689fc75c/index.html","3451c18db13e81d05e0716b2619b6414"],["/posts/7de15477/index.html","599835ca71b7d0b7abe55f1afa8c6d96"],["/posts/8a00d2ea/index.html","b3915246863979dd3e6e66ec005a2f2d"],["/posts/8aa14a73/index.html","6b66aa9852b0c762c0ffdda7ad2b0eaf"],["/posts/96032b58/index.html","f183627324865356ae71ca7f83dc2615"],["/posts/9656df9f/index.html","f41da7b66b48e45b90003efdcc74a614"],["/posts/a3886b70/index.html","50f60c496ec1249314493615dd6246ca"],["/posts/a42e3f6d/index.html","88d219ff8064c121ed2a8ae28f694671"],["/posts/a9438874/index.html","d5f9b8b6e9f34f63e405ebaa10ae0993"],["/posts/b4b3bf4e/index.html","7c25714d82d1ed350eddcedd1b1efdfe"],["/posts/b8685e49/index.html","ae16ee9de080b6b447d3e12758a68875"],["/posts/baaef441/index.html","9cde8bb948191d5cfe11c0b0851f432b"],["/posts/bbd06fa5/index.html","758dac623e3d73c7ce51ab2af1aab23b"],["/posts/be476180/index.html","ce9e72f22d8d8bbf5fd4ec49e23a6ab2"],["/posts/c4b6dbb9/index.html","0480ed68a4fea15780c93bb6766ad34e"],["/posts/c98d9940/index.html","98d3c658abd2ab55f60a4703b14485e8"],["/posts/d2331223/index.html","50cd4495b444dfbab94bb743b2055e9c"],["/posts/d5268b29/index.html","581b6ff69ea6f58e57212cfe78b49ac2"],["/posts/d7719dab/index.html","ea71345ea1398688d498c9fd0f6af4f7"],["/posts/de4de369/index.html","56e58602ce1f1616106fe954f99ffb35"],["/posts/ea42950b/index.html","5eaf88fef051174090fcc1711b230259"],["/posts/f3908263/index.html","dbe0c7ff205c50f215d9e5939c874e08"],["/posts/f6c5d65f/index.html","e8ef9956c42e20e10e8a36880eb697b8"],["/posts/f84657b8/index.html","bacb5102a2b34afa59245ecce89abcb2"],["/posts/undefined/index.html","2de28bf79531386770920277f62a407d"],["/shuoshuo/index.html","4d70e46748d1095304d6b7cb1e71addc"],["/sw-register.js","fd1380ddf4e128d7ce61c49d14b5a769"],["/tags/API/index.html","77a5d3901eaa302d23eb3ea6dc15b222"],["/tags/Appium/index.html","80acd9c9d9fb0158415a1065edc4d75d"],["/tags/Charles/index.html","05e73e61c7af6272c5a3ab36a538237c"],["/tags/FLAG/index.html","e070ad01b8f781117a92889f0c4c05e6"],["/tags/Hexo/index.html","f684db1866f81cf519e38c16c50e33ac"],["/tags/MQ/index.html","9abc9134c353aa77b651c26e984a5e79"],["/tags/MySQL/index.html","58eaa7a3a944ad5e079990d297751608"],["/tags/Python自动化/index.html","071c23d38ac6ba56435ed063048604c5"],["/tags/Shell脚本/index.html","d7d83ecd60fb75e6eecfee6e7574f870"],["/tags/index.html","ee32a98578abc286dcaf1d1be27de2c5"],["/tags/postman/index.html","c8d3976b15af4c200e787001caeadafd"],["/tags/博客/index.html","da2d106375b65b47b76e8b0fe3ed31a3"],["/tags/自动化测试/index.html","32a6f2ad7eccfb4834036f75ef110702"],["/video/index.html","f65a1b0c9b0e6c88456b9a088ef762ad"],["/风景/index.html","8d2da65aac0a0de484dc21ef7843e034"]];
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
