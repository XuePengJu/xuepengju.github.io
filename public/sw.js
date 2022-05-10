/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ffde71c6ef8cccccc8f8671102561122"],["/archives/2020/08/index.html","92e2f06d30b237b3c22ed220b9909aa0"],["/archives/2020/index.html","54e6cbba255c4b66a50dcafd4f47a109"],["/archives/2021/02/index.html","eaf4adbc0ac57807734aa431d74441b4"],["/archives/2021/03/index.html","ff5877b572e484c1ed1d4b4915d158b5"],["/archives/2021/05/index.html","0a2f5af297e5d0b480ac4661b6aa1cd3"],["/archives/2021/11/index.html","3fc4fafd85e17f51c808fda2f5d27cf6"],["/archives/2021/12/index.html","1d572208d23ed8dceb9c1d656b3ba703"],["/archives/2021/12/page/2/index.html","236d18c163cdeae951fcb9af7cf9b832"],["/archives/2021/index.html","d906805c8e7ac50f48da20751b2ebb6e"],["/archives/2021/page/2/index.html","6586e413651234f7af0a9a55f383d38f"],["/archives/2021/page/3/index.html","9cda06c497e862bda44d08c34eed33eb"],["/archives/2022/01/index.html","38547cfd2ccf401ff773bce392015ec1"],["/archives/2022/01/page/2/index.html","8a36900ba39cb94d2366a29e09893949"],["/archives/2022/02/index.html","a8219d3ea0a03cb81ebb85ae044c03ea"],["/archives/2022/02/page/2/index.html","370f0a7356b075a6bb1f97422765b620"],["/archives/2022/05/index.html","303b7c4b862e1f61005752865ef7c9c1"],["/archives/2022/index.html","c0e6f09762d114bf1c541cb7914d94fc"],["/archives/2022/page/2/index.html","08bc84a86350bb06d14254d201d2392d"],["/archives/2022/page/3/index.html","5dc40181f37464b7ccde32c0163607cb"],["/archives/index.html","96bb520486bca18d7263d7e4e618dc7b"],["/archives/page/2/index.html","1bb1b11746d059ab48ea5ef803d3651b"],["/archives/page/3/index.html","1845ace88dbb71df797f105b1a41e7bd"],["/archives/page/4/index.html","ce18416d178f8035266b9ddc39f014da"],["/archives/page/5/index.html","c911e9a322907985563143850009130d"],["/archives/page/6/index.html","a4f51b37b3ea76375886b882a8568168"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","1dd719555ec3a7952f157716807e11ad"],["/categories/Charles/index.html","ccb7abc14526411d38645ee4a687aa7e"],["/categories/Hexo/index.html","1d459c1d367444270283c154268843e0"],["/categories/MySQL/index.html","d6faf47f3e19d5d01df88096aefadc0d"],["/categories/Python接口自动化测试/index.html","af1fb7c08507ca94a2244c80629a4d8e"],["/categories/Python自动化/index.html","0247a31b5ba77d4d9815b462e3afc91d"],["/categories/Shell脚本/index.html","8c76a014fe4fff4c4d2d0bd8161da685"],["/categories/index.html","5773db4fbb0574e57a85caba4f33045e"],["/categories/postman/index.html","b7e98ff22d751074381f4be735c3d82d"],["/categories/postman/page/2/index.html","00674b3833037feebe95abd5b51072d6"],["/categories/postman/page/3/index.html","64b44149d00e88738bc4dd5f48723fb6"],["/categories/技术积累/index.html","918d1a449f4e39cb7af575deada26e8f"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","f539b664e33e7fdb78efb1129a9d137e"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","8872046c8c0a9438879a5e76a6903472"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","6a2db8ca993e442e246da85cfb6293c1"],["/page/3/index.html","497812799e78b6668ff1771ca6f91c38"],["/page/4/index.html","72b1529f0581ebe9a749b032cbd7e744"],["/page/5/index.html","00257450440af9c1e91058c822849684"],["/page/6/index.html","b4e1c23d4b995b0966621d3da3b974ea"],["/posts/2173e2a4/index.html","7f4d4f50a7ec7ed291d11ce4b2628c43"],["/posts/22131793/index.html","4871cd7907548148749e164c842506fe"],["/posts/2ab40ef8/index.html","ad757581294b93c810408957d073dd3e"],["/posts/30fa304c/index.html","b9c27a5dc8ec2c34c61923fbdc60c2e1"],["/posts/3447541d/index.html","6322a7faa416db800fdbbd6abb4c8cdc"],["/posts/3447554d/index.html","3c0bcbaa894629a60a63fefb83574447"],["/posts/344e3c5b/index.html","c4299fc8736039e82b78b808b0c4079a"],["/posts/3457ed69/index.html","587d2f10b6b0b6cd73f2f6e01238cd16"],["/posts/39cb083c/index.html","a56268a5d3d76bdbe064699d39487eb6"],["/posts/3ba53770/index.html","8e38594fe08462980a853d255bdccc4b"],["/posts/3bd3916a/index.html","06b0c8bfd55176aa7165fdf4c2f1c6a0"],["/posts/3e4105ad/index.html","b0e273f7fea9c71951774936509d67b3"],["/posts/42f034cf/index.html","bad94e03ed85f097e5a50180f7149202"],["/posts/43b8c324/index.html","9bd22aa3f9bc76d6d1e41b265a6bdd1e"],["/posts/54eecc7d/index.html","49e6a0f8086a3f27a62baa1503a33da3"],["/posts/6172e27e/index.html","4fddc4c40b44bfa82820eeebbd003170"],["/posts/6556c33b/index.html","3bce6048b5b4b1ab59775ccace61982c"],["/posts/66841aa6/index.html","0f7bf34fd758debd1afc270844817164"],["/posts/689fc75c/index.html","1cf7a4a2bdc74e04159d05fa96ded056"],["/posts/69423a58/index.html","e5125cdfdeb6e2115778871a20c8af00"],["/posts/69ae7450/index.html","b215aff13b74e84b1db31e9ff65d17b1"],["/posts/7de15477/index.html","a5f0f957657de47b51cb947f9b8f8609"],["/posts/8a00d2ea/index.html","05413b3183f9460d1cb2bc16a839e26d"],["/posts/8aa14a73/index.html","774f7d096089b230b206702e621bc856"],["/posts/96032b58/index.html","61ddf54f9b07eb86aba392b6e3576143"],["/posts/9656df9f/index.html","110b8eb07c29628c0bfc85fc06ea49a5"],["/posts/99817e93/index.html","ae5b0ec66243a49b4db6a4aefa3f37ec"],["/posts/9d1414ba/index.html","18bed2bd8b0a9e1a3b81303d07e247b1"],["/posts/a3886b70/index.html","2b0f65a45c81d0adaed2970a62be5b3a"],["/posts/a42e3f6d/index.html","3dbf6b8e5aded57ee6d8394de04ae18f"],["/posts/a9438874/index.html","0b9afed5689b12c6cee100aa2d1b5435"],["/posts/ab3b7c7/index.html","fd0411fa7262736d3debcf13c13f21dd"],["/posts/adb093cd/index.html","515b370b938ec638737cdd24beb67d0e"],["/posts/b4b3bf4e/index.html","70c7c93e31a2c321f53b2cf3b071a528"],["/posts/b8685e49/index.html","ee3ccdc2cd9d9a1cd77762f6bae463b1"],["/posts/baaef441/index.html","55284d3d44572453fab92470211a2bb6"],["/posts/bbd06fa5/index.html","1542c6ac7e508a16c92288541f85b110"],["/posts/be476180/index.html","77d513df95da6be2510d644443e06e8d"],["/posts/c4b6dbb9/index.html","d2983abc6d2ac38c8c8f17e7c1664a73"],["/posts/c98d9940/index.html","af4750b74059d270ffd5eb4f93184c0f"],["/posts/d2331223/index.html","da0557d22df345375841914b159a69ea"],["/posts/d5268b29/index.html","8501e91f4018411fe1780a542fe5e1b1"],["/posts/d7719dab/index.html","89958167803360f73d1fee7036aaf6e5"],["/posts/dcc42dc3/index.html","8ee514f8c62cf1cb39616994819645cc"],["/posts/de4de369/index.html","9b0e9a5d183cc0a390f35b9f3c0e80ce"],["/posts/ea42950b/index.html","ec85957a7f08540342fa8587d7944d3d"],["/posts/f3908263/index.html","3c27df92048264ae890da1e322b04bce"],["/posts/f46b70d8/index.html","0490c77f91f49a7f4f27d233bcbbda3e"],["/posts/f5e730b6/index.html","6e0bd7ac7c2eb6d0c0a54707f05c429c"],["/posts/f6c5d65f/index.html","53aad39d0fb9dce599bef06e878df252"],["/posts/undefined/index.html","3e0f93016968dc29db309d1526db0677"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","3b8a38dbcf2c41fcfdcd4383fc7ce56f"],["/tags/API/index.html","0f67f54b84dcb19ab3ef418bb7c70476"],["/tags/Appium/index.html","3c0ac0a0cfb90b9d3e0a02655f433cce"],["/tags/Charles/index.html","50fe0882b4a726df5578e864bfcae6f5"],["/tags/Hexo/index.html","314ced7b9c39ba644639d04db5f54e4d"],["/tags/MQ/index.html","ed4a903589243c3eecbed35f98ecec8a"],["/tags/MySQL/index.html","a740f3b8c46380a7282a334f6bc29443"],["/tags/Python接口自动化测试/index.html","7a38b2e06bf1bfacc4dda4b7edd4d945"],["/tags/Python自动化/index.html","47bd2f5be43b22a7ba86d26ce24d2e64"],["/tags/Shell脚本/index.html","241fbc978ff52092052d22c7e6e03d60"],["/tags/index.html","7583f8264b3c82f42801dc51c72ec14c"],["/tags/postman/index.html","11031ea87b98009828596ef32c94c3ab"],["/tags/postman/page/2/index.html","cdf0eccbb4510b1024eb4060c172f5fc"],["/tags/postman/page/3/index.html","20cb4ef4b4154762a593b0fb4d24db50"],["/tags/博客/index.html","c204e55da25b0179d3c93ad8bd289302"],["/tags/自动化测试/index.html","92a3c5f5a7a088b00ccf5e33d152f264"]];
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
