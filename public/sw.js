/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c49325cdcc810bf5c149d5b8c279e33a"],["/archives/2020/08/index.html","9d94e58561f138d06ef80d4c7af93422"],["/archives/2020/index.html","46af6fe8795a4add5e2f0032dacf6443"],["/archives/2021/02/index.html","b581eb1a94435fd358cf267e0161fbf2"],["/archives/2021/03/index.html","1a00d2decffbafe7cd27724bc079a2cb"],["/archives/2021/05/index.html","e021525014ab5f6a7a45695a22e16f13"],["/archives/2021/11/index.html","83f1ae058104c24d0dddbe3401960496"],["/archives/2021/12/index.html","e57aaa25c84ecba23d3420701481ddc4"],["/archives/2021/12/page/2/index.html","235484fe1293d4b16b8ab522a0ddeed0"],["/archives/2021/index.html","ce06a2ea3c63c43dc20f5f5033fef698"],["/archives/2021/page/2/index.html","3482826f523951776c45f638a92a811d"],["/archives/2021/page/3/index.html","ab8e15ec114c3196c375e31b6794c4c8"],["/archives/2022/01/index.html","b60da7d5a1bd33d8c68c68fa44cc092e"],["/archives/2022/01/page/2/index.html","45bbdb6783a7ee540a3ff85e94b49e34"],["/archives/2022/02/index.html","cdd45f0017eb71b2133cddeccce897fa"],["/archives/2022/02/page/2/index.html","655bb5e501c88fca78d95553723d7486"],["/archives/2022/05/index.html","b87dae1ed5825c368031863f907f53f8"],["/archives/2022/index.html","9f6d718f7b761c343c58d9fba61b8d72"],["/archives/2022/page/2/index.html","0e98e2efdefb644ed07d85f89518b963"],["/archives/2022/page/3/index.html","7d552f04ca874bd4d89902ac2acc77cb"],["/archives/index.html","dd6602e4036e36d90c4a08b273c61300"],["/archives/page/2/index.html","73e58b46a835f5298f7929d7903e9200"],["/archives/page/3/index.html","298bdb51ad842b5f4793d587dc1dd57c"],["/archives/page/4/index.html","fe6bbcf3c2245d42cca5eaa6d02917fd"],["/archives/page/5/index.html","ff4587fb8db1610389c9030704b7eef6"],["/archives/page/6/index.html","dd5fc1762ecd711b44a139e68fb40b6c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","ea575414d97c5af3a5f69935eb8c1c1c"],["/categories/Charles/index.html","d339f969754198f85da1f9aa96e27413"],["/categories/Hexo/index.html","5eab9fddf8c4c1807f80dc9493cea2a5"],["/categories/MySQL/index.html","2c5b54f316ea46f8f25a73c1dcdfdb9f"],["/categories/Python接口自动化测试/index.html","002f6f36755d94e4c37c189d7aef592b"],["/categories/Python自动化/index.html","55e600ec3a641f33720d746b63cd3205"],["/categories/Shell脚本/index.html","219a1728da17b620d24f94e01ec014c5"],["/categories/index.html","0c45a2b69428e563266bf8ee686648ab"],["/categories/postman/index.html","fa7577b90c41f0ed8fd0472b9850c482"],["/categories/postman/page/2/index.html","65628ad4edfa82675da76d766dc73795"],["/categories/postman/page/3/index.html","8e9f9d32f195ae754cfc7246a10b209c"],["/categories/技术积累/index.html","f982d50c8a76ac790561a3488416316b"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","f539b664e33e7fdb78efb1129a9d137e"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","89e4c663f046ad08d7b79081eb8808f5"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","dba63964ef55baca1909c5b82e088d77"],["/page/3/index.html","20c1a0c6a108f15c29d9ebe1bbdd091d"],["/page/4/index.html","ed8d5797ee416aadf08e474bd8deb3cc"],["/page/5/index.html","0e7fdb0abf142d5e72012e803c92e46e"],["/page/6/index.html","2bbc48463346d8b0ce66a859b32128c9"],["/posts/2173e2a4/index.html","be0d04109e61970c326be0c0a528cc3b"],["/posts/22131793/index.html","358831f8652db20fc92c91b9ceef43f6"],["/posts/2ab40ef8/index.html","2c720bef2d31d1fcb487abc2b7ac9cf7"],["/posts/30fa304c/index.html","d587c6bd5067224ca373789991154603"],["/posts/3447541d/index.html","ea53d59ec75b4a499decf795df5a03b2"],["/posts/3447554d/index.html","12a210d601ac7ee6b0b761ac21d35c31"],["/posts/344e3c5b/index.html","288540e2069ef3696b66b1f309b44491"],["/posts/3457ed69/index.html","9c4941c9c2fb3fd9fccb27c7437ff470"],["/posts/39cb083c/index.html","f7e64c6fd61482148e60e8ffa371b884"],["/posts/3ba53770/index.html","09a5ecab5354ca1b0b06b9becfafe505"],["/posts/3bd3916a/index.html","17de928079f00d321b95af6e90aa6f15"],["/posts/3e4105ad/index.html","62e251b40b41ff6f67650557509072ce"],["/posts/42f034cf/index.html","2f6a9cdaf9ed3755d547a8ffe8603a8a"],["/posts/43b8c324/index.html","8e17899e99808440be0b7f2697dd748b"],["/posts/54eecc7d/index.html","f4d8eef57df56b2057a9df4c5d37c471"],["/posts/6172e27e/index.html","41ae0f7d6ef6139492de581e87bde153"],["/posts/6556c33b/index.html","d89f305cd9fde70b03f6333a2ac90b21"],["/posts/66841aa6/index.html","fbcbe858601d98ce91b8a6a93f4a8a99"],["/posts/689fc75c/index.html","3b4e3d46c9c5dd376310b10e55489881"],["/posts/69423a58/index.html","8565f5b2636c2e62400fdc2ff8653ada"],["/posts/69ae7450/index.html","d83582e0a5a417559f1718e6c4ceb775"],["/posts/7de15477/index.html","45741a66f0bdb752132c9845dc1b98c6"],["/posts/8a00d2ea/index.html","432c949569d03d0a9bb638e9caa98366"],["/posts/8aa14a73/index.html","dff59ac516df9f9a2c00d63f38fd92e7"],["/posts/96032b58/index.html","9fb770c2473906530a7da2dd122ede56"],["/posts/9656df9f/index.html","154f56fb472715a0469b72ffde256fd2"],["/posts/99817e93/index.html","db49ea1bce68de2a705e56129bc4c10e"],["/posts/9d1414ba/index.html","91e9b8b23702c4d8e0166a73c281b79d"],["/posts/a3886b70/index.html","f393af358f3db969097884a0f67d5e27"],["/posts/a42e3f6d/index.html","7b0f74ff7a4c22bb4e3332a7e6feac5b"],["/posts/a9438874/index.html","d39f44fd7f4ea5e33170ea72d3f355a0"],["/posts/ab3b7c7/index.html","3c76c01cf787e02bf9449cee64ff5e3d"],["/posts/adb093cd/index.html","8918b8c3f813552f1239e1c52b79f1dc"],["/posts/b4b3bf4e/index.html","520ff906665e3e4818dd5e46eb85a83b"],["/posts/b8685e49/index.html","b51a8f6c3398534723c5766d35ceec2f"],["/posts/baaef441/index.html","66ec9e72cdd8e5201489a7e16d19495d"],["/posts/bbd06fa5/index.html","f0b55430d044a3d3ad55c74e0207afbf"],["/posts/be476180/index.html","7ebd40419018cb2a829b4e86f92813fd"],["/posts/c4b6dbb9/index.html","3510b336986d150ad58eab533efe6216"],["/posts/c98d9940/index.html","28c8fad83efb6872331f8fd3ee0fcbec"],["/posts/d2331223/index.html","d5d0b442f3200a945c7fcfd35404164d"],["/posts/d5268b29/index.html","d2cf7572a9ead43d43027bbf858920f7"],["/posts/d7719dab/index.html","d185c241e4b4d90d49493699eca3081a"],["/posts/dcc42dc3/index.html","0398b1e7b454655cac2ac5a52a1d5a85"],["/posts/de4de369/index.html","35acc784139775e5c3100ef065a17f67"],["/posts/ea42950b/index.html","0015dbcf8020be1839ab899c1587d67f"],["/posts/f3908263/index.html","615770da0de19ae9cb3136cfbda726f9"],["/posts/f46b70d8/index.html","13d9fadcd25b2a3aeb2c562be2fbdbf9"],["/posts/f5e730b6/index.html","75529002974bc9de08cb07aaa933d0b8"],["/posts/f6c5d65f/index.html","04f5155455b272ffb45bfbd97dd65d65"],["/posts/undefined/index.html","916d3260932c748e7a2ba6373ad1b9fd"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","6407da70d15195069da5875b33000512"],["/tags/API/index.html","8a0cbd0c791d6d25feaf31885b00c5df"],["/tags/Appium/index.html","dd78ff5021b58b2550d2cf5205f89162"],["/tags/Charles/index.html","041459a0f3a92483431c93b4b23593d6"],["/tags/Hexo/index.html","135f7dda58472c179d53794903da2062"],["/tags/MQ/index.html","61ffd93a2c64b89e3fad736cf24b4166"],["/tags/MySQL/index.html","95a9595175b874d0c7e13cb3a7fd3f6a"],["/tags/Python接口自动化测试/index.html","dd97f73812ef19d13fa6a9cd83ea9a36"],["/tags/Python自动化/index.html","368e50bd8811376f62a7c1a6911dcc7a"],["/tags/Shell脚本/index.html","3fff7acdb0aa7cb449a91a2e217cfaee"],["/tags/index.html","91521b4a879b86c2e718931bdb947f26"],["/tags/postman/index.html","22316f02d1b77ffea21f6290241fb524"],["/tags/postman/page/2/index.html","65a97df6b9d3095ba2d4ff479a8cc3a2"],["/tags/postman/page/3/index.html","3c95a3188eaec5db518c7941eadc63e1"],["/tags/博客/index.html","d6bc2654be157ca8ac65594403ce2e1e"],["/tags/自动化测试/index.html","63ab3e88539b598225491306f96a4c5f"]];
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
