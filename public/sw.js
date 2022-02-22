/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e26358790b5b49624ec54bf0d746a043"],["/about/index.html","cbfa2aecff2b255f5f9ca02a658c0c65"],["/archives/2020/07/index.html","19c7cfc89a4b5a2c040a956567fa2c74"],["/archives/2020/08/index.html","2dee57a835848d1f3936f12aec009acc"],["/archives/2020/index.html","2c6af8e8444f7eb000c9669ed6f2c496"],["/archives/2021/02/index.html","8f7772f94ee75854d9939fc4b92673b5"],["/archives/2021/03/index.html","562e93ebc53d342730f77f5f8dd9b176"],["/archives/2021/05/index.html","23b6806a525c308cf3e4f7fc792fbc10"],["/archives/2021/11/index.html","7adf8a119eae6216326e5384edb88dc5"],["/archives/2021/12/index.html","18616e968b79ad57832f525efe7f885c"],["/archives/2021/12/page/2/index.html","da9392a99cd5b8fdcd2553d491a6c76b"],["/archives/2021/index.html","0763c7eaa9cddf075e56016f2b6e3a86"],["/archives/2021/page/2/index.html","63716e815c385b69f6dc7c295d277159"],["/archives/2021/page/3/index.html","31a809934b581407758346b5bd93fbdb"],["/archives/2022/01/index.html","fa4907acb1fa6a5137f31d725ec9b617"],["/archives/2022/01/page/2/index.html","b53fc9f452e80878c5d733881133a1a1"],["/archives/2022/02/index.html","9e95ebe31e35f3768ebf9ba7ee4742dd"],["/archives/2022/index.html","afde0055eb6bbbc5968e1cf94ad03480"],["/archives/2022/page/2/index.html","d0d32588b13e2baab4bcd6d96a6f95d3"],["/archives/index.html","2453056f480aed978c9895539677cbff"],["/archives/page/2/index.html","6e17265f5b4b1672302e98baec261583"],["/archives/page/3/index.html","59dc836609bdf1f1467e3a2575e24a47"],["/archives/page/4/index.html","0fce607b1420ac827944a0a6cf94f633"],["/archives/page/5/index.html","0767352f1b8f9b6f0015d3e96b07a146"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","7acc683065ea4cecb39afef791eba336"],["/categories/Appium/index.html","71fa9689954d312d9fe4f93425d34451"],["/categories/Charles/index.html","d4e06ddaf14f4fdb5ea4f14a7fc0a22a"],["/categories/Hexo/index.html","c68a23be7b9e43038841f50285b28e53"],["/categories/MySQL/index.html","76f931b5def52df36c05d8a972c3bd89"],["/categories/Python自动化/index.html","5d81e8ab8e8e7a4a0cef4bfb8e9de5c0"],["/categories/Shell脚本/index.html","888d624d667edc76e20f23fde3cdd547"],["/categories/index.html","ce524c944c9214b78a88bfc539c099d8"],["/categories/postman/index.html","28629a3355b107c0e531eb8eaca42b94"],["/categories/postman/page/2/index.html","4b5be4a8b78be21789ff30e8d31e62c4"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","ee1e75a4d04c23d11acf7a53618246cd"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/blog/postman/15/015-01.png","5d5eef8d7373ee9a2fd8fa31044afcd9"],["/img/blog/postman/15/015-02.png","74b2783a2b3fa9ce877147c8a24df58b"],["/img/blog/postman/15/015-03.png","bd1123c853618aa0d722d2f6cc8fe903"],["/img/blog/postman/15/015-04.png","7a81600fc90dcf67ee1e53b56bab74d8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","708a68dca193b988c8cf168b58b4d3b3"],["/index.html","8f3bc777777b4e96c474a920be4be54d"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","7e048631952aff0dc7a30381b30610d1"],["/music/index.html","b3b681f02a28684da4459444930880c0"],["/page/2/index.html","4af4c6b17ce7eceb98e758a138433f88"],["/page/3/index.html","014aa0cdb59a6832b41c6bd34963cce5"],["/page/4/index.html","de1cae404337e54144d2dfc7d808a5e1"],["/page/5/index.html","6c787f5694ba6e68785fd6e4f5b1f81a"],["/photo/index.html","24e92eed8fe6e90b9973cf7cb612b4a8"],["/posts/2173e2a4/index.html","0434ab6de9662ef3994338397e9c4225"],["/posts/2ab40ef8/index.html","d75ead4f1f4e0133e6798bf7ee15a186"],["/posts/30fa304c/index.html","8b70ceafb0853b40d72d71484e02ff36"],["/posts/3447541d/index.html","8123b140fee5220a5618d9d97fbfc0f4"],["/posts/3447554d/index.html","ff923a298da15a1d36d39b91fd4e42f0"],["/posts/344e3c5b/index.html","c391c40afee3097d202eae10bc756235"],["/posts/3457ed69/index.html","40e0e43de6c850ebc87f32e1fad3ff86"],["/posts/39cb083c/index.html","0b4b1dbd6714f4af244f0cebd55091ca"],["/posts/3ba53770/index.html","b1f2a2297cd28770734ed0d64fcec452"],["/posts/3bd3916a/index.html","5704a67a8714ec7eeb6625dfc5e9f498"],["/posts/3e4105ad/index.html","1ab75f4e8c1b96a4888964c1269564a2"],["/posts/42f034cf/index.html","3fc8f20feb4015d2d55e100dc226d341"],["/posts/43b8c324/index.html","e9ea5a85ecc92176db5c8290f7cb9a77"],["/posts/50a2b841/index.html","5b4171f291888f37c1fe8d9092edc23c"],["/posts/54eecc7d/index.html","df1c0e1cfa2d61481d6084e9ebb13b3d"],["/posts/5a17eb30/index.html","3fdd2f17611233983db6957f6120e215"],["/posts/6172e27e/index.html","393133689fb8e023f853cc156af2f611"],["/posts/66841aa6/index.html","caabdf95bc93bb8adec0750c9bdf6066"],["/posts/689fc75c/index.html","37f37b18b5e281396f58085affe1834e"],["/posts/7de15477/index.html","4d64f645218e481f9928fd7ea9328a10"],["/posts/8a00d2ea/index.html","03cc3814f17a953fb6463fb0ce338311"],["/posts/8aa14a73/index.html","b21ee6abeb4bfde656d11e7649017e8e"],["/posts/96032b58/index.html","24a0ba57abd9389608ecb50de4930b1a"],["/posts/9656df9f/index.html","6a4c3f5b5550cea0648064bbca7e47bf"],["/posts/99817e93/index.html","a28cf8533b0a0193b4718532b5390837"],["/posts/a3886b70/index.html","11dfba4465bf2be7980da6a7ef4c9cc9"],["/posts/a42e3f6d/index.html","3ca220d2ad590362f2aa82a40f79f4b8"],["/posts/a9438874/index.html","d956ab09ac53d7d08697ac355ce4ba0c"],["/posts/adb093cd/index.html","03a6c668a26366c534d63afc36c658da"],["/posts/b4b3bf4e/index.html","fbccad2e637e0e626f9e50e4f4282e32"],["/posts/b8685e49/index.html","152dead7574d134302d3e3db01515d02"],["/posts/baaef441/index.html","e7a7e56eefe833f0641490f7d3f8d17f"],["/posts/bbd06fa5/index.html","669f2615457a427161b3239bbacc3636"],["/posts/be476180/index.html","5415e7d5d2794e6628ccec0f437c274e"],["/posts/c4b6dbb9/index.html","555bfb0f05d53eb4b93cf64c80df1954"],["/posts/c98d9940/index.html","24f462a4a3eb37871e5f487443ff9997"],["/posts/d2331223/index.html","b4fe26af15a13f0339bda8b5339b3c40"],["/posts/d5268b29/index.html","6cba6195342a152cc11a9aae35027a8e"],["/posts/d7719dab/index.html","2f56828ad6830697f793d2553a7eb4c7"],["/posts/dcc42dc3/index.html","2c90fd35ebf496b37f0ba30f3fb37551"],["/posts/de4de369/index.html","b8d66824dd563e99109d8de52390017a"],["/posts/ea42950b/index.html","e50ba029d678d9f8f8e111091da2f459"],["/posts/f3908263/index.html","1999d416b47ce969f407c4a0bf27439e"],["/posts/f5e730b6/index.html","a2efc7a60ca51c32376606fefab059f6"],["/posts/f6c5d65f/index.html","4ee1a30f60c739dd3caab738515763fd"],["/posts/f84657b8/index.html","d40121e8c9b90675750aa6d7eef5dd05"],["/posts/undefined/index.html","886d97d3fd08c812461c454073160997"],["/shuoshuo/index.html","d8c2da5335d071bbe72c05aa783f00f1"],["/sw-register.js","0c5d84bd37248e347809fee9b418f5b4"],["/tags/API/index.html","919e189fb51d01b2f1a950241352fbb8"],["/tags/Appium/index.html","597c2a49c564cb6284e83ffb80e16b2a"],["/tags/Charles/index.html","c93306827da05d7266b84b2c7eb4281c"],["/tags/FLAG/index.html","38fdec5d564b572ea8b9fa072eb65bbc"],["/tags/Hexo/index.html","426753eddde27cbe2f990748ba17490e"],["/tags/MQ/index.html","9fcec719766df534b7e9609a8dfd0d0d"],["/tags/MySQL/index.html","4ffe17e5730752d4c9d1dc74c3ec5122"],["/tags/Python自动化/index.html","77c9bacc84c2b7ba5ef4c1860ec9a3f4"],["/tags/Shell脚本/index.html","9331604f3d15d9a68e1a19f5bc89d304"],["/tags/index.html","98726540918be6b139d8ff0c0d78df64"],["/tags/postman/index.html","90582e9c905bba665a5b8cfa10277a5d"],["/tags/postman/page/2/index.html","d1700e6620ed3147bdd78069f5843006"],["/tags/博客/index.html","5d88d96099d8b7a4958a95846eeb231c"],["/tags/自动化测试/index.html","fe2cd0b70f8ce852aca65ff261150b42"],["/video/index.html","2201d3bd9b9385699721db121906d801"],["/风景/index.html","21219cd0054917748b9ff9adfa709d0f"]];
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
