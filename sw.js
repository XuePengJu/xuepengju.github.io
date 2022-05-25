/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","94f3ff5fedfce626aed0a0359c089da9"],["/archives/2020/08/index.html","04e9fcb586c5e3c76bec0cf83d7c8919"],["/archives/2020/index.html","4416a35de98821bb3adf7031639d56b8"],["/archives/2021/02/index.html","684009163778c836781169fc3788bcda"],["/archives/2021/03/index.html","ea2d3b4556098bfba62220fd587063bd"],["/archives/2021/05/index.html","91fabfd1c25092aadc570c244511a706"],["/archives/2021/11/index.html","fbaf5d22a98caa8a1ecbd84363dd0065"],["/archives/2021/12/index.html","375b5991b14a0a7918aba228d17cb942"],["/archives/2021/12/page/2/index.html","c476ee0b88fdd4260b833819ab066754"],["/archives/2021/index.html","441bacfe20f9c7f8c616d2af03de78ab"],["/archives/2021/page/2/index.html","c53cd3cce7402e9540477fd2ba1e9f33"],["/archives/2021/page/3/index.html","c0375e2d7798241b9cfaf4e2c5985af8"],["/archives/2022/01/index.html","1f13892f63b0e9f6067dd6fa74bb993e"],["/archives/2022/01/page/2/index.html","e8300153e4ce3c417b75ffdae4eb4226"],["/archives/2022/02/index.html","27ff70f4977705af8499deeded745ef8"],["/archives/2022/02/page/2/index.html","38118efd397c4bb225a2fee3d0140e6c"],["/archives/2022/05/index.html","9b37a3f15bef3ce1e2c2abb481d16d38"],["/archives/2022/index.html","2a6cf6088aff08a1c9eea69870c4e9ed"],["/archives/2022/page/2/index.html","7f460533abd34fa486b33987f1ccd4d3"],["/archives/2022/page/3/index.html","09f03b5054ff6db64edb64a86c8b0d51"],["/archives/index.html","18b3e55986d8b06633913fea28df181c"],["/archives/page/2/index.html","6a55d1a35f11fc8cb78bfe9d9ef400fc"],["/archives/page/3/index.html","d2c9c954949db8fccc94d7c5d92ab82b"],["/archives/page/4/index.html","15413a698edc271941a462c5083dc494"],["/archives/page/5/index.html","024d4bc1c4c7c8977dd5d0a5444e0bce"],["/archives/page/6/index.html","0042e92beac510ac905493cc1e3213a8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","abae5c25ddd0e7a23317badd430a9b0b"],["/categories/Charles/index.html","d26bac08c052e3c672d46bcecd264c0e"],["/categories/Hexo/index.html","0ff6cd1e60fbe0c23ca30f408c94b8aa"],["/categories/MySQL/index.html","0be947404c03bf99f2da17b2ee038b2c"],["/categories/Python接口自动化测试/index.html","be39f0fa07cf16b189c4e96c8cc1aece"],["/categories/Python自动化/index.html","dc06121367ca31208d58101b583fb04c"],["/categories/Shell脚本/index.html","593281d4a21a8209c2b39bc659f17494"],["/categories/index.html","2d9d92a2702cc043b8211fb7fd97c526"],["/categories/postman/index.html","936de56b688b8010ff99a45b01d4ea6c"],["/categories/postman/page/2/index.html","84e0539d6f06fa63028b6b26e47157b9"],["/categories/postman/page/3/index.html","92c0e83a67707214b6d2b4f302abf150"],["/categories/性能测试/index.html","c4e506338bb3d46c0981f63d6b92cdee"],["/categories/技术积累/index.html","48018d9fd618ffd0337d8e5e57df3af9"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","f539b664e33e7fdb78efb1129a9d137e"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","650a4faee7c8e7c98f01ea957577106c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","6785e6d59ceae2adff32a85facac4e30"],["/page/3/index.html","cdb4d2916e4859c95e9d561d1b7a019a"],["/page/4/index.html","78673c845469eb9cbcb70689510857d9"],["/page/5/index.html","0baa4c2d8ea8b1a310ea09d5fbf332d4"],["/page/6/index.html","6a9e5cf22033a521170076732ee2d59d"],["/posts/2173e2a4/index.html","432b62a50cabac200b19aecffa5379ce"],["/posts/22131793/index.html","8edaca6c3f79b5697e0a3acb67bbc86a"],["/posts/2ab40ef8/index.html","df29a8eb3b0dad6705ae6b7f7914cbb6"],["/posts/30fa304c/index.html","e0d5c7d4fbc16bc4b4beaa172077770e"],["/posts/3447541d/index.html","08b13225f0d9d2cd1f203c3a356fd3ae"],["/posts/3447554d/index.html","292c803b631a76ab5ad1b980981fb5c2"],["/posts/344e3c5b/index.html","ffcdd1e06bbf443e49d8f4c8d2a0cef5"],["/posts/3457ed69/index.html","f00cec2eee8b27a1b5d04f22e1f8d4c5"],["/posts/39cb083c/index.html","06273b39562b00de22870fe3214f1997"],["/posts/3ba53770/index.html","d70e74859d9579b8f24dbdb83430eb09"],["/posts/3bd3916a/index.html","a36de8f847cb2407441fa7d6d997e4ff"],["/posts/3e4105ad/index.html","d564e4ff5715e170dcca603ee60ee956"],["/posts/42f034cf/index.html","fed67ac924ee9ae56a6fa94ac3441abb"],["/posts/43b8c324/index.html","894edb21fc7d29a3ce74588f62f41bdf"],["/posts/54eecc7d/index.html","d712f934e58c61bed0845fd4b6d37005"],["/posts/6172e27e/index.html","6b0fb6b33382b218eb0c843cca5eb314"],["/posts/6556c33b/index.html","a158233caf41cbeeefd4844acfaf6498"],["/posts/66841aa6/index.html","0ebe1afc224eb5f824e378d751d12059"],["/posts/689fc75c/index.html","9ba81f2c9a805b150b934e1e19c4e45e"],["/posts/69423a58/index.html","5144a41c336c606691c9575c30af5015"],["/posts/69ae7450/index.html","0ef38a5c1cd109fa226935b44082f1cc"],["/posts/7de15477/index.html","a16862f02a8eaad405b1a87f892a2709"],["/posts/8a00d2ea/index.html","1b5afe93514d6c82806cdd6ed43272de"],["/posts/8aa14a73/index.html","38887c90bda076d3ca57f38623a8093c"],["/posts/96032b58/index.html","1a5f415a4bb8b7ac33da65c6e7d0f0f3"],["/posts/9656df9f/index.html","ed0731c9edff476e987217fc9e73094a"],["/posts/99817e93/index.html","5bfe8f2cd1ef9323150e080bd9684952"],["/posts/9d1414ba/index.html","556b7da56359e4017afdc215df2b2201"],["/posts/a3886b70/index.html","23d6a0390d3206f8fdb600fd09021766"],["/posts/a42e3f6d/index.html","f55bda4d0a88bc6de6a7fbd0d3dbcbc8"],["/posts/a9438874/index.html","307d907e35ace8b00735fbccf65f2784"],["/posts/ab3b7c7/index.html","df61a453d0dc60fa40a3e204fd15c6de"],["/posts/adb093cd/index.html","307d2ce2d41303682e03315e16deef45"],["/posts/b4b3bf4e/index.html","ab0b42c69c7b6db427b1174aebe9e43d"],["/posts/b8685e49/index.html","925bb208af8cb31f462e6d74800a4313"],["/posts/baaef441/index.html","23154f3c97f55cc0db4da2e83e24bc8a"],["/posts/bbd06fa5/index.html","cfcde656c90c84f846857a7da49f1f60"],["/posts/be476180/index.html","af340a751b7845acdc6621e5062d18a5"],["/posts/c4b6dbb9/index.html","d5c2e59c5a39fb143549f74dcdbfad89"],["/posts/c98d9940/index.html","044c108af70f54ac0ed57ab29f47d411"],["/posts/d2331223/index.html","ed3c337105b920a94faf5cb4b2033345"],["/posts/d5268b29/index.html","a82da7244b06ff4b3ef56a2e3751103c"],["/posts/d7719dab/index.html","9e3e51ab71f1bfe9c580258cc914ea0b"],["/posts/dcc42dc3/index.html","4a7c3e9b55a197fdc03b6125fccd7eae"],["/posts/de4de369/index.html","dea851605b9d01c24ab6082514f806f9"],["/posts/ea42950b/index.html","6fb569273f4cccf85c22449460f3f532"],["/posts/eac202c0/index.html","23c65bdf7a38aa0c5325fda3e802366d"],["/posts/f3908263/index.html","50d076c5d782f8a459e21ff820d7543d"],["/posts/f46b70d8/index.html","321858ffe675846f374c1275757c8abb"],["/posts/f5e730b6/index.html","05a7b7b04a89d2c178a0da8e86d799b3"],["/posts/f6c5d65f/index.html","306e67dd434700beaf429dd48852cff2"],["/posts/undefined/index.html","faba550d867ac98be512784d3fc6e10f"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","cf802542d8aaf9de04e52d440078db98"],["/tags/API/index.html","2cd3b245cc2745c203d14d85bc7ad6bd"],["/tags/Appium/index.html","18c865594a0e5ca3d1448e3240e4649d"],["/tags/Charles/index.html","62c2f919fe08bcfbc9b748da043e7e7b"],["/tags/Hexo/index.html","72c7df75d58e0774f3651f1a44b9b29b"],["/tags/MQ/index.html","28382b762d472f416767acbaf44632a3"],["/tags/MySQL/index.html","05921f2231df641254695de4bddb09cb"],["/tags/Python接口自动化测试/index.html","88e3fd72fd29b2d744540753e86e9e28"],["/tags/Python自动化/index.html","18c525b24d8e95343e1f4a2f4202e77a"],["/tags/Shell脚本/index.html","679e1ddbc94dcd9702eaf130e3bfb9e9"],["/tags/index.html","fa1152005088381b7c14a318a41e6fb6"],["/tags/postman/index.html","a539cff07cd62fc8e3f02441e8814bc7"],["/tags/postman/page/2/index.html","a042e7e83010299977f379aa404c67d1"],["/tags/postman/page/3/index.html","faeb39545d2acd33276148e94714a1ee"],["/tags/博客/index.html","8d25c5e29da6d62ac0732176e5d6295c"],["/tags/性能测试/index.html","963fa6c0d465c6de44585deeab88ff3d"],["/tags/自动化测试/index.html","303635ed8a401dd027a101f13813ba8e"]];
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
