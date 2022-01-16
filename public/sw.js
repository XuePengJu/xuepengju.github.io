/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","265ba9f22a426754b57539ebce5a9c50"],["/about/index.html","03b842caae917488f67fabf551e15fc0"],["/archives/2020/07/index.html","cb5f0c6f6efb49c3834efce1e98b2d71"],["/archives/2020/08/index.html","b3f762f5e43eba98561ceca942b0e195"],["/archives/2020/index.html","3957fed7f4e1e1a68b9253a816ad675c"],["/archives/2021/02/index.html","5064e784eafb45e40b980731da6c04f5"],["/archives/2021/03/index.html","284b13ba9efed2ca7a351c0177e109a9"],["/archives/2021/05/index.html","cd2f56fa05f0b0790ccb40f938a859a6"],["/archives/2021/11/index.html","74a979ca27def08ad9907945746791ed"],["/archives/2021/12/index.html","35e0c3803b10f8d75e7c0c5b37cc3b84"],["/archives/2021/12/page/2/index.html","c696ec86f4ab0ae7cdfc626dcf5827d9"],["/archives/2021/index.html","c73d0eb23f6000db420bbbf73d71666b"],["/archives/2021/page/2/index.html","7c96cd31a0227d274d146eea7129e686"],["/archives/2021/page/3/index.html","720558d0169926d4b3370d547a29d13d"],["/archives/2022/01/index.html","795f1d70c14cac5dc2313823ec09e061"],["/archives/2022/index.html","89f2932f3a8a91839c506e07c6114934"],["/archives/index.html","e2880e90e757a02f7b0d8f5e7f3d198b"],["/archives/page/2/index.html","821cc49f6842028a4e6b155535196137"],["/archives/page/3/index.html","81982c02aa371f78c55e7b8f92377cc0"],["/archives/page/4/index.html","5cf678f240920ceb81a9eedc013d85d0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","9fb8cc36388cde7f0e30333a69967332"],["/categories/Appium/index.html","1d003a42f789d9f19bf485950aacf57d"],["/categories/Charles/index.html","7d2e33950f438ef1323debceb3140d9b"],["/categories/Hexo/index.html","2a9163d5d79764b8be798967eabcde79"],["/categories/MySQL/index.html","aca1f3eab1e4816101955e4f670fa666"],["/categories/Python自动化/index.html","bcecc8d8b1dfef9220cff986b6cf7644"],["/categories/Shell脚本/index.html","67727ccb2da9d68c6179423c86752fdd"],["/categories/index.html","1fbeb05987785ecbbc34acc9a1f502f5"],["/categories/postman/index.html","130483b517033bedaaf8d18be06c7473"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","ec63d99feb3ec5e47a88dc383c710e1c"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","121318b5514390360907f2703171cd7a"],["/music/index.html","3e3fa3c59ae439ccc248b67511836a5a"],["/page/2/index.html","2f7c5757e152752892db93ed7374cf07"],["/page/3/index.html","33b8ff675666fcc9c9b183ef110220fd"],["/page/4/index.html","b5c3f42e42f80a59894807ab29157212"],["/photo/index.html","de25f8e12e4fdf1e749f2fe36ab875da"],["/posts/2173e2a4/index.html","49e4bf8dfa1e9d28a14fed11d27fe8d1"],["/posts/2ab40ef8/index.html","dda77fa62f4c01de9ce1d7b38730ea8f"],["/posts/3447541d/index.html","8ab036a516a66445782b6617f92993be"],["/posts/3447554d/index.html","ac0aaad383b115e5affc3f1dced279c9"],["/posts/344e3c5b/index.html","4c776b4360ff917dfde07f19d0172680"],["/posts/3457ed69/index.html","3faefc2200b1017ed2a2e8d5ec337cb0"],["/posts/39cb083c/index.html","423599e671aa78dea8921b54ffa06b39"],["/posts/3ba53770/index.html","7f1404b0c92908810a8b23149b101b39"],["/posts/3bd3916a/index.html","7921cac3012d437659332f798a93a62c"],["/posts/3e4105ad/index.html","99b02f4b8166ef5d0e3642b17045f833"],["/posts/42f034cf/index.html","8cc6725b9e931dc4f4ce521f6576195a"],["/posts/50a2b841/index.html","b731e66b6f022e050232e17be8c4e669"],["/posts/54eecc7d/index.html","d159baa09cebefe8d5f4ff676e59f88b"],["/posts/5a17eb30/index.html","03d4c4a5c362eca575147a0ee417ed4d"],["/posts/66841aa6/index.html","4f10ab870124543787c87c775d224389"],["/posts/689fc75c/index.html","5d2ad1a61961b0579989c070b8207bd9"],["/posts/7de15477/index.html","01484b12d1e313cd71df8943dce1a218"],["/posts/8a00d2ea/index.html","eaed44c83fefaf09807bff5675ae8c0f"],["/posts/8aa14a73/index.html","e05f38ffcbf2747eec986cc59da7262a"],["/posts/96032b58/index.html","564883d9b84d09cc273a1c8dfbc4951a"],["/posts/9656df9f/index.html","45401cb6518c438aad5a04b3efa4046b"],["/posts/a3886b70/index.html","aef2b566ae8474e525467a97f6ece138"],["/posts/a42e3f6d/index.html","44a682e244c77493919b0837e7832274"],["/posts/a9438874/index.html","739bdaf3be4a671c3e48a64013305441"],["/posts/b4b3bf4e/index.html","dc0c7aa0f1d4bbb4ebb51529f5766f45"],["/posts/b8685e49/index.html","5261b43ed807576332ca237823998386"],["/posts/baaef441/index.html","249253196f4af165de31cc695164d96f"],["/posts/bbd06fa5/index.html","cb37da4b98ffc235ca7d597c85114b93"],["/posts/be476180/index.html","942564a37a9950b849440f86b592af80"],["/posts/c4b6dbb9/index.html","8e182dd7eb12686761260699dc624d46"],["/posts/d2331223/index.html","2b23eb7876f970e6a782b8e1598863fb"],["/posts/d5268b29/index.html","4a42a054c9fdf2edabbe77a41b40c859"],["/posts/d7719dab/index.html","2706eb47b19a756bb69aa81fc7488400"],["/posts/de4de369/index.html","727764c85bebe3034be0da1c9bff35ff"],["/posts/ea42950b/index.html","9a8a226659e5045ad79dbe1dfd21a5af"],["/posts/f3908263/index.html","007352736f6eef1a7fa161fce2252fa5"],["/posts/f6c5d65f/index.html","421965fa59eb1a1377a03a6ca339096f"],["/posts/f84657b8/index.html","a54b8eadad925a0d2a4352a857eceb87"],["/posts/undefined/index.html","9f04be3bba970b48f4e10346a5a70dca"],["/shuoshuo/index.html","2ab77f8eb5c32218a33acfc63e441b85"],["/sw-register.js","5c61ef182dcb21a4058d95bb2a5b75be"],["/tags/API/index.html","c06c8cbaf781dd8f52b2658bb66d05f4"],["/tags/Appium/index.html","66cb1f8c08b05533aa976a488d436551"],["/tags/Charles/index.html","ee5be7f73cc21747df086b51cfcb0bad"],["/tags/FLAG/index.html","fdc82ed3702e424b9960fe7b38998068"],["/tags/Hexo/index.html","b9b21973e0b91f8368d0df29ccc29df2"],["/tags/MQ/index.html","a78a98c3efebe8369f5006ce8470631a"],["/tags/MySQL/index.html","1bed97aaf65b3dde7cfb8ed95b700232"],["/tags/Python自动化/index.html","3ebb643be9caade550077b67f58b69f9"],["/tags/Shell脚本/index.html","0760a22bf250c4384da25796ebd47965"],["/tags/index.html","4a062b8b9b57b16bf71d1c7bf502b78f"],["/tags/postman/index.html","ba483be62b28b09dc19d0a585da0579a"],["/tags/博客/index.html","d4fd2e0447ddd7dcc654184d993be69d"],["/tags/自动化测试/index.html","4dede5b4380f0734182f496db8e135ea"],["/video/index.html","e35f05a242e4cf463ac3bb43ef8026a9"],["/风景/index.html","648a1337fba013e58b9c8792edbe36ae"]];
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
