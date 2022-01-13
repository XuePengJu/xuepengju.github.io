/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4662655efec4117f30c83788d260b013"],["/about/index.html","e9414058c5bb967d1e0f56a04a6d6cb1"],["/archives/2020/07/index.html","94c5268850381b391d52266fd34abc5d"],["/archives/2020/08/index.html","39313fce42d12860361b6f4220ad3835"],["/archives/2020/index.html","320f44a56685dd3e8231d33a12a3c922"],["/archives/2021/02/index.html","ec5d6bca24e0175362d4b6982143d6fa"],["/archives/2021/03/index.html","f24ecb88710675c819757eb5422eb9a2"],["/archives/2021/05/index.html","67afcf591c773f366809bf76facbb6a2"],["/archives/2021/11/index.html","570cafc5edb6706aaf5bdde98381abb9"],["/archives/2021/12/index.html","aeeed600b287362b9edfe96d100ba0fc"],["/archives/2021/12/page/2/index.html","6444fcc4e6cdc36927f15d67fc4ea5de"],["/archives/2021/index.html","c555c3237be2a437924be8f6bb847cda"],["/archives/2021/page/2/index.html","035c50bd3c347945050412e5d43876c9"],["/archives/2021/page/3/index.html","c8203647f044b5283b5b11d439c81caa"],["/archives/2022/01/index.html","faf4828b07fcd1f71fa72d7c62aa7f60"],["/archives/2022/index.html","c0196ac3f17e72794230c96190ec7b53"],["/archives/index.html","c74b9b0b0421606372e2ef82ee38923b"],["/archives/page/2/index.html","3a44a46da2e0f985670e3c2f867d8f82"],["/archives/page/3/index.html","1cb5c99a6b799212670a95879c46aaff"],["/archives/page/4/index.html","9ef10a71165a15d40738b9ed4033222c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","03aed1d00c3a748a7433d106bd0c2ca2"],["/categories/Appium/index.html","c48e133a5621233d6345987cd7751f38"],["/categories/Charles/index.html","630eacb6bc45b43a7b02b655fb6f3432"],["/categories/Hexo/index.html","f17ed7710494cebf966459e8f08421e1"],["/categories/MySQL/index.html","c2b92d03bfbd78ae311dc2cc7ee22319"],["/categories/Shell脚本/index.html","a57f1cd223d727e5aa3653c2132a82da"],["/categories/index.html","e9ecd01de1f93a46bc84ba1878ccabd8"],["/categories/postman/index.html","49003142b132f47cef39ff87fb6fc205"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","2d3683d66a6b7d02e79d132c9eeb9f30"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","7101f327977b9313ddb6840966fc7902"],["/music/index.html","c3cc38973dc1327a40b9e3d8b69dca92"],["/page/2/index.html","3323089f5e846989f60d172bfa8ef9d0"],["/page/3/index.html","34b6566d0f59d10a9ca2da1bfc941ba2"],["/page/4/index.html","c2b0bdf6c6b429b5da7a368b20a894ee"],["/photo/index.html","cd12f0ff31322d8dbf0002861c066ec7"],["/posts/2173e2a4/index.html","0720b27881df26a5d8978fc952974f57"],["/posts/2ab40ef8/index.html","3b4c1a83920d46ceadda4006317f1e2a"],["/posts/3447541d/index.html","65e98013af19ef19a2e47d52d0ae9f95"],["/posts/3447554d/index.html","73fbc8ea1963505fc814ad989884e540"],["/posts/3457ed69/index.html","dbcf64c3d3a0e73c11f01f734a945946"],["/posts/39cb083c/index.html","58824dc6e2108b851949a1271a075bae"],["/posts/3ba53770/index.html","06c9888dd3f0cdbe67962bea9e959be9"],["/posts/3bd3916a/index.html","9094daecf33507f35d32f1be6b8384f3"],["/posts/3e4105ad/index.html","9a097e23984b9cf9b993cd170faf4fa9"],["/posts/42f034cf/index.html","246ce3df45f0eb50313fb2458f2e936c"],["/posts/50a2b841/index.html","33f9c6d472bc8284e9f7391e87bf56a6"],["/posts/54eecc7d/index.html","1f19c84a560353261a19d10864649e80"],["/posts/5a17eb30/index.html","3d831214a97df088b03cea9d6d470279"],["/posts/66841aa6/index.html","3a2a85b237b9b4ffc4e30c18dab8172d"],["/posts/689fc75c/index.html","771cf0fd7b1afda0b3011df6b4fc3986"],["/posts/7de15477/index.html","ba13d3ac202fb44ec160c63ceb8e04bd"],["/posts/8a00d2ea/index.html","7698a41f2b52b748cf87e64f039413d9"],["/posts/8aa14a73/index.html","a8e2bd1b4035acbb11dda57b748cd28a"],["/posts/96032b58/index.html","5ed07c32b7d3d0d3e003cd497446c6d8"],["/posts/9656df9f/index.html","067833c91ab42b62d7e78745d94888d6"],["/posts/a3886b70/index.html","a80679b5be2485e55df00be772f4aa50"],["/posts/a42e3f6d/index.html","9afde697f9ab7388de058bda4dc5b6d3"],["/posts/a9438874/index.html","5c53e1905891d20a125a3d17af12cb3e"],["/posts/b4b3bf4e/index.html","466bb3e29402dbbfd64545f690b6a59b"],["/posts/b8685e49/index.html","2275b418d4e468b6bff83a2ef7a436a5"],["/posts/baaef441/index.html","b9463832e5a9272318f2c9a83ff1e6d0"],["/posts/bbd06fa5/index.html","300b336b95dbc07df9a21bd49a3c10ae"],["/posts/be476180/index.html","5f9b2a70310f97505bff0213ec362f22"],["/posts/c4b6dbb9/index.html","d5c24285bf2df37bdc1a23ad6a006c73"],["/posts/d5268b29/index.html","3d581f5761d7ef53e45ccf1501c29280"],["/posts/d7719dab/index.html","e9fed1dedd5289690636c2d543466882"],["/posts/de4de369/index.html","5054e42abdc7d3eedb6873bfa3502ed3"],["/posts/ea42950b/index.html","060892c894a34c8f1b4a741ef0d1916d"],["/posts/f3908263/index.html","d38a5ddd6c943bcdb6467115f381064b"],["/posts/f6c5d65f/index.html","c8aefe6271addf0aa88c9dcd6a9fad0a"],["/posts/f84657b8/index.html","48acf467d3c1e6e8b62f8193ebad3d1d"],["/posts/undefined/index.html","1c60f76f1d7fa846fa1c8e6a2bc0718d"],["/shuoshuo/index.html","59380a09644dc02ff441910a4231df0b"],["/sw-register.js","da539f8e35db9b6868109c5588ba02d2"],["/tags/API/index.html","9957e3b11ad85d7cb095e099016217ec"],["/tags/Appium/index.html","f37be62fac37e76e2e50329d59fc847b"],["/tags/Charles/index.html","db7e467ccf5eae7f392d4498e4ba7114"],["/tags/FLAG/index.html","af8ea32d87633523f8cffddede72f47f"],["/tags/Hexo/index.html","1f0193e9536852ce2bc6d862f3826572"],["/tags/MQ/index.html","910fc21ab3d783e523b987dd27fd3abd"],["/tags/MySQL/index.html","82d1608faaa7d28a7eae5f83c9e7c82c"],["/tags/Shell脚本/index.html","cee58ebb7826fb3ec1fc01cffc336121"],["/tags/index.html","bb8a26e9e7d328ad57fa33dd6951687c"],["/tags/postman/index.html","451ea427aa85d37dae2340b41a0d2c16"],["/tags/博客/index.html","d88fe1684e0d8f7923413949cccb2395"],["/tags/自动化测试/index.html","f6d4901c3d0da40b78ef20e54390f86c"],["/video/index.html","20ef0038b1e9ee9633967f856d98fd68"],["/风景/index.html","bfbe4665f73b244fe2e60a459228539f"]];
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
