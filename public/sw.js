/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","843784004befbdf50a018c54bf420e3f"],["/archives/2020/08/index.html","2b6bbedb2fb553b6eca58f993a31aee8"],["/archives/2020/index.html","87484bbc5df4498552bdda54fd7cc534"],["/archives/2021/02/index.html","3d5b6a6441f12c9f967dc8d190a04f9d"],["/archives/2021/03/index.html","7f7bbe127f7ce353b143280717d576f8"],["/archives/2021/05/index.html","e4f634e1c9e59d7d8d0cb3d910c5e7db"],["/archives/2021/11/index.html","cafbb81ab4f5df0caf901ef16af94b15"],["/archives/2021/12/index.html","52eb49cbd9e2cc5b347b462083bdc908"],["/archives/2021/12/page/2/index.html","56d9310f0b215f017a35902d8ca274aa"],["/archives/2021/index.html","783966976d0b30c151a8d24dee388c10"],["/archives/2021/page/2/index.html","e88ecbf57b1751ffef519b7e976d5380"],["/archives/2021/page/3/index.html","2b1f023a1493055974ba7bac957b9749"],["/archives/2022/01/index.html","4553345139a30e7569b359f30605959c"],["/archives/2022/01/page/2/index.html","69c19614652cc9eee7eb41e29bb24b76"],["/archives/2022/02/index.html","4895885412f5a0134d5cc022397a41cc"],["/archives/2022/02/page/2/index.html","bbf228a5a4519d7838252bb8f9e43946"],["/archives/2022/05/index.html","770e974406b12807660512d8f1837997"],["/archives/2022/index.html","a6b3a4affd7cc40668f42e1811f51953"],["/archives/2022/page/2/index.html","2ed5da0bd7d07fec41277be8e84553c0"],["/archives/2022/page/3/index.html","272e0c7ebc12c9e8d4dbb97c1c414a16"],["/archives/index.html","8c32a47c13a874053dd84296b9ba553a"],["/archives/page/2/index.html","ab99375b452022cef7fa291d2823e7e6"],["/archives/page/3/index.html","2aa0fecfdbc2223f0fb006d53efb7ebc"],["/archives/page/4/index.html","271d81b127b8e320500e73bb7e859e87"],["/archives/page/5/index.html","d4da7e97fb0b6c37837d4ab125289c66"],["/archives/page/6/index.html","b2ecfb3924148e3e9ab3eece98f705ee"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","335d8920f15e5033f341ff364a09ba18"],["/categories/Charles/index.html","f1310f911d2486af134fe74e051556c2"],["/categories/Hexo/index.html","efe7d23a37c34fee4c84edb640f2182d"],["/categories/MySQL/index.html","d2b8824e37e8c7ffe0df54fc6e9b597d"],["/categories/Python接口自动化测试/index.html","e66a97b6e434484d0e9a7aa01342addf"],["/categories/Python自动化/index.html","cd1a2f56cf75b531fdc83809620d4402"],["/categories/Shell脚本/index.html","bf4d39d1561619163aac21be0414fcd8"],["/categories/index.html","aedf6a89e3dc4ed50c485d51d8cb4721"],["/categories/postman/index.html","135ce0cad368b00ced35a2ed0c99c16a"],["/categories/postman/page/2/index.html","303b4482871e453f73afbf4b7559398e"],["/categories/postman/page/3/index.html","7bbdc538cb8007657bad326366c32d04"],["/categories/性能测试/index.html","49ba587d632a9f5630e70f226839a6b3"],["/categories/技术积累/index.html","ef16574bd1c22748a0ccb2c379ba54e8"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","f539b664e33e7fdb78efb1129a9d137e"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","e5ecbb04ac83e0207dac12e17eb93cf3"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","ecc49a4a94d77e9d033a11aee967c396"],["/page/3/index.html","7d54c365ba03959553e58413220d7ed0"],["/page/4/index.html","a83c725818fb740450e08c85e891822e"],["/page/5/index.html","084dde5157492440bde46cf21b47f7d5"],["/page/6/index.html","acbfe8ae129a3b2bdb929f1f922879a9"],["/posts/2173e2a4/index.html","abaddab26dee8a0031772f7a92bd2855"],["/posts/22131793/index.html","dbdcd82de7b6f272fbe36a8e1b2bc5a1"],["/posts/2ab40ef8/index.html","6044695479c39648657f89e2cf534851"],["/posts/30fa304c/index.html","fc64445b3b7b3a9eeaf3217053c45b37"],["/posts/3447541d/index.html","a3e8266bc4153f966d8442d8b594634d"],["/posts/3447554d/index.html","c6e041db188c715acc4da57aa63625d1"],["/posts/344e3c5b/index.html","df799687868e22a9777be077aa813f34"],["/posts/3457ed69/index.html","3cd2427b587a68b9c518060c08fbbebb"],["/posts/39cb083c/index.html","67fae739357504386e1e75c5920f586f"],["/posts/3ba53770/index.html","6b31e233c58d9aa83d26074f9d2723a0"],["/posts/3bd3916a/index.html","400b0fb01aff8aeb6fba9ca54ff9510b"],["/posts/3e4105ad/index.html","c4d9b0949eb674c829027bbfaf4bd7da"],["/posts/42f034cf/index.html","3e400d62b1c93fd8662c56cd149464cd"],["/posts/43b8c324/index.html","c022b0a86860d51ab5b5671f9d1dd8c6"],["/posts/54eecc7d/index.html","504572c3d69015c6bf2b63dd1042cd4f"],["/posts/6172e27e/index.html","89024f399c1f229a4395e020d297a073"],["/posts/6556c33b/index.html","f723155c51da0b2793c84af6e25a9f94"],["/posts/66841aa6/index.html","3dcb35e99778975f217fde59985070c8"],["/posts/689fc75c/index.html","28620dbd63c154c048838b0d0492376d"],["/posts/69423a58/index.html","19aa549afbb103f4d70f3e392d1b56ca"],["/posts/69ae7450/index.html","9994eabd26b6f978917947638d5fbb24"],["/posts/7de15477/index.html","d031c52ae3c3c79128ff05b40e35a7ad"],["/posts/8a00d2ea/index.html","a3af234a164534ff7904424bc0488afb"],["/posts/8aa14a73/index.html","2bb91288151a150d9f4d8e0b165464b6"],["/posts/96032b58/index.html","497f34b51eada9f6babfd9341d794d5b"],["/posts/9656df9f/index.html","1851fc06d06136bfc1b31bfc5617dc76"],["/posts/99817e93/index.html","80490df7ec000fccff85b0e80e4acc69"],["/posts/9d1414ba/index.html","abe12cb1b3c0bb7697291f73c6a85ff3"],["/posts/a3886b70/index.html","befca4f5098d09e08f3e03c6faf71dc6"],["/posts/a42e3f6d/index.html","ef10fb02ec7f86837e6325273a4e9091"],["/posts/a9438874/index.html","1dc9f0a9d76fe91384ff22c7d7df2f24"],["/posts/ab3b7c7/index.html","d1aded9b3de9d0936fa7fbf73cab23e7"],["/posts/adb093cd/index.html","24cdcbc83438a4f0d0afcde9807d3f52"],["/posts/b4b3bf4e/index.html","7107a58f58dab3ad7d76f134c8d3296e"],["/posts/b8685e49/index.html","7caa13ef87a12bef6ea299b4ebd2e7eb"],["/posts/baaef441/index.html","9466eaa26cd4741c0c357f32b66af2df"],["/posts/bbd06fa5/index.html","5dc2616b6f471fd05716d2071ae1f729"],["/posts/be476180/index.html","c3a454ae385642adc974af06a9008e9a"],["/posts/c4b6dbb9/index.html","240c428a223ef080c6919521259bc9c5"],["/posts/c98d9940/index.html","1fc206ccbe33a184011cc064d4a5b06a"],["/posts/d2331223/index.html","be4d0ce36a6acf4236173d3ecb0e5b98"],["/posts/d5268b29/index.html","3bfd5701928ff8a2b8ed8eca5273a50e"],["/posts/d7719dab/index.html","e437cf558be47a6fc98a6815c3b66fdf"],["/posts/dcc42dc3/index.html","70dc2cccb1e61afa3b28231b927f9f85"],["/posts/de4de369/index.html","9542b8f72df7f8c40fec22f700bf3351"],["/posts/ea42950b/index.html","58413a948da5fad36497ea85a86a0cab"],["/posts/eac202c0/index.html","228478cb006599fe0b36e9b341d11940"],["/posts/f3908263/index.html","f37f1f93a8ed78e54d6e1589a377f697"],["/posts/f46b70d8/index.html","255f967048d49e5bebf0a10101eabb9f"],["/posts/f5e730b6/index.html","cbbe081b79e6dba047c4455e160c531e"],["/posts/f6c5d65f/index.html","efb76250383193dcfcb3e6ba28a09a0f"],["/posts/undefined/index.html","14b14c92ab10693ca759e737a4ee2913"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","58bdaf327cb31aa082e0c342fa829623"],["/tags/API/index.html","0724f6aa680d02ac7b714ad69eb794fb"],["/tags/Appium/index.html","d97cc334d0097b060b7433fb2e8ba0ad"],["/tags/Charles/index.html","7b39151b950f35d9f20faada2d2ff021"],["/tags/Hexo/index.html","4e5f51aab4c2f0687f2f523dc1ac6fd7"],["/tags/MQ/index.html","f21798df9f445762f64aaf84eb0d6f78"],["/tags/MySQL/index.html","72e631ec779eeb1b38c9a7680fb24755"],["/tags/Python接口自动化测试/index.html","1d5baa59630c1ab0de7b0fa4e5a0e2e5"],["/tags/Python自动化/index.html","8e25344d533330a08fe1e5fbaa8b3f37"],["/tags/Shell脚本/index.html","af626470bebf319cfb8bb1ef80e026cb"],["/tags/index.html","5e9c41b257cd8c76494a5d4506a25782"],["/tags/postman/index.html","80e2413a00aa1e4480c9a69b597b6328"],["/tags/postman/page/2/index.html","c971e43fadd9d6be31c9ca38a0f77cec"],["/tags/postman/page/3/index.html","76da56cd7950130b3d4f5daa3e5ef401"],["/tags/博客/index.html","d60a222058cbe70c7b17a382e08ac6cc"],["/tags/性能测试/index.html","30f17bfd51e53d387a0cb625a3821678"],["/tags/自动化测试/index.html","edb74d6a84214dedbfdb523a7ae55fdd"]];
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
