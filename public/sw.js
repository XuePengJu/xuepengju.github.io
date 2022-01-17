/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fe2ecad9b3b2809fd71a23f4b1ef836"],["/about/index.html","2b84517122cf7862b797ecb05d48aaca"],["/archives/2020/07/index.html","adf89b7b3df1d020b59114b0724d45ae"],["/archives/2020/08/index.html","2030c21b031f83fee3bf83faf3eb70f8"],["/archives/2020/index.html","8be4e7458500a99433b76e4192b2cda5"],["/archives/2021/02/index.html","84de2208e2e58bd6b3771a503680ee15"],["/archives/2021/03/index.html","476e0e9a2d30b6f586813fdfd4869712"],["/archives/2021/05/index.html","4f3650b07f20cbf214554fecc3a1cd95"],["/archives/2021/11/index.html","1f38ab63c85ceeb7801390e3b25d8b65"],["/archives/2021/12/index.html","5351f72638f142c2e795313de3d54e09"],["/archives/2021/12/page/2/index.html","75954b60f009fe90f1148d55d357d77d"],["/archives/2021/index.html","6a07b2d40fdaf5ff322437c7a748b948"],["/archives/2021/page/2/index.html","a09c1af73b95932953e3634abee344c2"],["/archives/2021/page/3/index.html","bd2f5e72b8eb05a3adfcb00b29433700"],["/archives/2022/01/index.html","65d68e419f058272e3b11d8f1e38fd3d"],["/archives/2022/01/page/2/index.html","e6787a34f9b3fcaa2c0ea0984a665b9f"],["/archives/2022/index.html","c77b900547020b421a3c31d1d13ba630"],["/archives/2022/page/2/index.html","2fcd62e7e6b29a3988cf3687cc92c1df"],["/archives/index.html","041f2482648fd8a625d149f127f644d4"],["/archives/page/2/index.html","49c933e85ece763bbd6a06b535feec10"],["/archives/page/3/index.html","09999761bee0667f329c9bc129b65e71"],["/archives/page/4/index.html","87caa20f73b72b8a2d87e73166e572e0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","8e4da52c8a70782f541a5cf1a5d12bc2"],["/categories/Appium/index.html","aca88d78adab56280ac9d51f02216692"],["/categories/Charles/index.html","9d0331e45df944ed46ac46249340785b"],["/categories/Hexo/index.html","114b4f7f312e1b54d9f5cc8b306474ff"],["/categories/MySQL/index.html","2da005f559a22fc8fe23026132efd58f"],["/categories/Python自动化/index.html","46f1ee1bdaacf63f7a81b571fa74f071"],["/categories/Shell脚本/index.html","cc2e617cf2eaf2e5edc914caea7290f8"],["/categories/index.html","1e6a476cf8b67e0fa166b933a1aea241"],["/categories/postman/index.html","d36518c6bae89d4ce03fa017f14b26a3"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","369a0a03e8bde22a168d6d7876c2d7ff"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","12155c2d2625b3e67740596f7b6d9e4e"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","409e133fd42db1b8fd39fbab8956381e"],["/index.html","9e62937a00bc4b03e24041cc846f1a03"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","2a1d4fecded0005af8fb720c7cc49c59"],["/music/index.html","b239e5618b1bf9e0b8173ab4aebda651"],["/page/2/index.html","f7ebe9ad34192cac2aecc5159894e3aa"],["/page/3/index.html","a99e8c82ef0ce29a1ddc9fc52b53de5b"],["/page/4/index.html","3b64836863535cd03c27655862530995"],["/photo/index.html","e9b81aca24b702310a87b02fd74299ce"],["/posts/2173e2a4/index.html","c62ae614f9ee95856315fbc9558ff934"],["/posts/2ab40ef8/index.html","7b6b1252e181fe40bd4830954b066b78"],["/posts/30fa304c/index.html","0a12512d8dce711f15c3d1fc0da85a23"],["/posts/3447541d/index.html","0ead56dedee8105b8c0e78ea57951145"],["/posts/3447554d/index.html","95c092cc887f2ba3d6f2dac9aa85e32a"],["/posts/344e3c5b/index.html","dd757d90df0ba64dc550af24438e4130"],["/posts/3457ed69/index.html","938ad951dc4920c0ecf5d4054b7f0d90"],["/posts/39cb083c/index.html","45b8811f8bf4b41e753049a6f592855d"],["/posts/3ba53770/index.html","03eb4b65a6ab655b76e32bd80af62f3c"],["/posts/3bd3916a/index.html","2126b349c3b1802388fd831d0e1e1dd2"],["/posts/3e4105ad/index.html","485efa0ed17fdad86b9a143db70c049c"],["/posts/42f034cf/index.html","27794cffbbd8cc9840000d0d061463dd"],["/posts/50a2b841/index.html","35ad4e9c5ff2b73390a1ad07444f0f09"],["/posts/54eecc7d/index.html","d018962bbe99b1e80fcf76b1f1bb2862"],["/posts/5a17eb30/index.html","e0f280ceff351d7ba5bbe0ec7a608692"],["/posts/66841aa6/index.html","3f32a2f7520d2810f92d0e09e667cdb7"],["/posts/689fc75c/index.html","2d79629fe9286b75ce40d5fedaae3cca"],["/posts/7de15477/index.html","f082f2ebab1e27da58b557ef99ffcfb2"],["/posts/8a00d2ea/index.html","e8d58b4675170b78bf13f62c89d3185b"],["/posts/8aa14a73/index.html","d6bad3576fa1212958d9041860078340"],["/posts/96032b58/index.html","62565d2d239d1152469e136b526e0bbc"],["/posts/9656df9f/index.html","58660e8d37e764bae86b4802048213d3"],["/posts/a3886b70/index.html","2753a059687443d514792e41d31c23b8"],["/posts/a42e3f6d/index.html","e92a3686c764023110d4e6719677619e"],["/posts/a9438874/index.html","6afb464d37443daa68fff96fb01c71d3"],["/posts/b4b3bf4e/index.html","88c066ab0161fc0d30575396fdbac9cb"],["/posts/b8685e49/index.html","d5946b3d56f36689c79db9a71926316e"],["/posts/baaef441/index.html","538770d1fdb239ddef9bd1ab5e1b485b"],["/posts/bbd06fa5/index.html","3d2e87f5e32e3215858a753208a8c97a"],["/posts/be476180/index.html","f7ef687d1a1340e4cfef5970ffcc6ee8"],["/posts/c4b6dbb9/index.html","f68d2d487ca22001b1d2057f04306f50"],["/posts/d2331223/index.html","f53353a5ab3869977b04cb22297e12ec"],["/posts/d5268b29/index.html","90e1e57b8d5dcc6d98da9efb85d0599a"],["/posts/d7719dab/index.html","19bab6eaa26da3686b072bdeb2173e38"],["/posts/de4de369/index.html","141013d5498c802b62999eb59bd20bd0"],["/posts/ea42950b/index.html","86a1e1c5d74979ae4502d19e3bacd3a7"],["/posts/f3908263/index.html","de78c32103e27a471c8c3b478c85361d"],["/posts/f6c5d65f/index.html","7d0506f8d08d1fd9585495e1b81b245a"],["/posts/f84657b8/index.html","0fbd9721d180d87e4429584b703877a7"],["/posts/undefined/index.html","b92535d23a556a3f7a4f6f3b27e0b77b"],["/shuoshuo/index.html","69c52c2188951ab1d50d077b2d018b55"],["/sw-register.js","e39c8684bb5053a4457926ebecb8e11c"],["/tags/API/index.html","378369be64ad65ff026dc2aa13f41660"],["/tags/Appium/index.html","b7bf32a4a8838690a19b0f80a24a39f0"],["/tags/Charles/index.html","2b958884087b1b7e092b928db405ccea"],["/tags/FLAG/index.html","69628efc818f3cd38d36a91836fec819"],["/tags/Hexo/index.html","7d3dfbaac5096625626a1cc414bce2de"],["/tags/MQ/index.html","aecc0c8d55c180ea1c6fbc53edf70a9f"],["/tags/MySQL/index.html","49fa0b3e54e915e07f0c709989f4130f"],["/tags/Python自动化/index.html","4d01bde294e87f963786dbe48fda5218"],["/tags/Shell脚本/index.html","1d3280c687dcaf97a3984f93e58aed22"],["/tags/index.html","f34f6566e2d00cfdbf546f1130478e45"],["/tags/postman/index.html","b16ff3b979a1cd57a9641cfe6b1d597d"],["/tags/博客/index.html","942a37f759450da15558d7f02d984a96"],["/tags/自动化测试/index.html","849e7a488100a8d45fa73944a89c265e"],["/video/index.html","43d6915b24b2fdea2bc706a4c846fb09"],["/风景/index.html","662188bb2b3960e7324dc6a79a69d6ec"]];
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
