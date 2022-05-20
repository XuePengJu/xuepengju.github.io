/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3d7bc5c541284facd67d4776d08059d3"],["/archives/2020/08/index.html","3d8e91c2969598dd2248c5f5afe3a27f"],["/archives/2020/index.html","6ebd6ae2a6af91ce4e351445f322f028"],["/archives/2021/02/index.html","9db8398632752af1a7206b13e7c2aafa"],["/archives/2021/03/index.html","d29a760816723e9567356ff0a557a8f6"],["/archives/2021/05/index.html","340990779fd3576661fc483cd59af745"],["/archives/2021/11/index.html","619da7fa5904e780c14eac632c84c073"],["/archives/2021/12/index.html","b2b00cb35b911386d2260078f3023859"],["/archives/2021/12/page/2/index.html","0c08a2fbb70aaa51f80ba3cc7a01a85b"],["/archives/2021/index.html","f73d6e9302f23a074172d8d9d4f5cae8"],["/archives/2021/page/2/index.html","7e6eeb73ededdb883e65a613a1c274fd"],["/archives/2021/page/3/index.html","8a1850edf0aa61850a717153639ca99e"],["/archives/2022/01/index.html","5a058b3df94e308653c9e1af18853ea0"],["/archives/2022/01/page/2/index.html","d40189d1b7d115c54ef8553c2692bba5"],["/archives/2022/02/index.html","fdf613ce60eb3f201bcbc373afc01f25"],["/archives/2022/02/page/2/index.html","8637d742ddd3299a104065cf5c976653"],["/archives/2022/05/index.html","829ccae5f5695ac0da07bafdd6044365"],["/archives/2022/index.html","8c434d9499f11adb092fd6ebd4db4692"],["/archives/2022/page/2/index.html","d637fd8be252da0d0c548371af6bd069"],["/archives/2022/page/3/index.html","e1d8eea893c0f20a03e5ba89721f164c"],["/archives/index.html","e2f13af6fb5a89f737df77170f9e9db8"],["/archives/page/2/index.html","e6448260277d98531e660e87826aa3d7"],["/archives/page/3/index.html","201e67565ec09c1085dc375323e1ac6b"],["/archives/page/4/index.html","12237571dfcdccfa3db20254f9567e6c"],["/archives/page/5/index.html","0807e1671721e9bbe06e269e4114844f"],["/archives/page/6/index.html","be330ae46bc665cbf966ff9e0f3bc688"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","03694ad131b8658139161b63b00e852b"],["/categories/Charles/index.html","836b6e4b0ad8a42e349945e16eb91fcc"],["/categories/Hexo/index.html","548a4b6e255011672078587267bf2611"],["/categories/MySQL/index.html","536c2773d1b3350759bbd391fc6abcd6"],["/categories/Python接口自动化测试/index.html","a3f2257662123d9947ac754b133513bc"],["/categories/Python自动化/index.html","542270a2fa116336491b93889c7c99a4"],["/categories/Shell脚本/index.html","b4bc2adf72ca813632654a6fa07a2579"],["/categories/index.html","92197d0e23e15543668856a43124ebe5"],["/categories/postman/index.html","7caa1785d4485555e405a529cfeeb67e"],["/categories/postman/page/2/index.html","cdc459c88642d2c17a111a2490bbce0d"],["/categories/postman/page/3/index.html","7426a090d9c5b8632a270eefff644585"],["/categories/技术积累/index.html","7d27bb650e6136c07b908047c3b91a5c"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","2025c23419afdbecefcc6f72ea563c72"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","34351627481249e94c8bebdbc8e27972"],["/page/3/index.html","a0e4652c392e6ff6129740bf524e36e2"],["/page/4/index.html","8c6af2fca95e172809677dd2028e8955"],["/page/5/index.html","172745be313576695a62e16f66464511"],["/page/6/index.html","1faeee64898ce978ce78f333e0fc7d21"],["/posts/2173e2a4/index.html","dbdec0d685cebb0c1148cc266fe0f7c5"],["/posts/22131793/index.html","8de80d0a171add0de8a643d3d060f1b2"],["/posts/2ab40ef8/index.html","8a0b4818b5138c9bdc76f7d3365ddd50"],["/posts/30fa304c/index.html","ec21974013588368c8f2744addaf3006"],["/posts/3447541d/index.html","0d956308182de7ead409bf07e82dcd73"],["/posts/3447554d/index.html","593b6a37b373cee76d3bdb04422dece9"],["/posts/344e3c5b/index.html","9452b4c66c980e869c43c988aac9ad8e"],["/posts/3457ed69/index.html","78f85e0a3536cb3320372d6efe947caf"],["/posts/39cb083c/index.html","b1273109837a7ec36ae2c6275de96ab8"],["/posts/3ba53770/index.html","7b0491374d3af4b26c937a4e06de286b"],["/posts/3bd3916a/index.html","0bf219a5856c915b6f60397ce3646bf0"],["/posts/3e4105ad/index.html","b796b09d5e85a5daf32f30636794405a"],["/posts/42f034cf/index.html","b4cbe8c8a57eafe25cda57fc94d96797"],["/posts/43b8c324/index.html","f420d4e5813bd21ef607df910e882976"],["/posts/54eecc7d/index.html","d57eab1718c851fe3af981f9f4293b9a"],["/posts/6172e27e/index.html","e5293cc90b8a60031c8f930f5e60093b"],["/posts/6556c33b/index.html","e31456f91e8420f50757c816323b4849"],["/posts/66841aa6/index.html","75e34b2a92462300f613091e412a71ed"],["/posts/689fc75c/index.html","9743118a43bd4560117c59b38af584cb"],["/posts/69423a58/index.html","0a3c6538b994f95a8506f305d6f2f6fe"],["/posts/69ae7450/index.html","b896d48007a246f5b10db38db9277a11"],["/posts/7de15477/index.html","17e513b91359b7b128aad928eb1f0be6"],["/posts/8a00d2ea/index.html","ebfe6ffdaa886345525f58a9c1cedcf2"],["/posts/8aa14a73/index.html","d6f95725cadf3781462c6255edfe11e0"],["/posts/96032b58/index.html","d252dc7ec9cf315a6bd039f904433b8c"],["/posts/9656df9f/index.html","21e7a66e93928f6a56690a71d028c580"],["/posts/99817e93/index.html","c066def408b47de26e558694ab0788ae"],["/posts/9d1414ba/index.html","b2eea7c63a8babb1bd635f4c8463d15e"],["/posts/a3886b70/index.html","8c566da86a8cecc41f0b6910b1e7ecb2"],["/posts/a42e3f6d/index.html","6926b3e4dc73b2a6b6a76119cf1809c9"],["/posts/a9438874/index.html","0160dbca2ddb1c0deaa3207e05defc20"],["/posts/ab3b7c7/index.html","eb08b1c985cc401aaea512d3d447d877"],["/posts/adb093cd/index.html","a95582f0495b014e09627357f764c7fc"],["/posts/b4b3bf4e/index.html","61c04e8df4c5828ea650941668c27083"],["/posts/b8685e49/index.html","9ffb2287af24d83f554dd20beec65a04"],["/posts/baaef441/index.html","413bb903b4a33c73a383d29b90a2aa30"],["/posts/bbd06fa5/index.html","82ce8b338c424f19c6a1a5ab342b79da"],["/posts/be476180/index.html","0207e2d89926e7f978cf85df43c2e94f"],["/posts/c4b6dbb9/index.html","9cb57f1bafec79a28f634ddafa9246b3"],["/posts/c98d9940/index.html","be490e4133f5ddf6281a0077150e1ba0"],["/posts/d2331223/index.html","605367eed717e128112c33b93f81e353"],["/posts/d5268b29/index.html","e625269551e9188b36e073e2c94dd144"],["/posts/d7719dab/index.html","93cda4912ffecaf38cb6b3128bb3e2e2"],["/posts/dcc42dc3/index.html","e4b4764aecacf9cd7f2f18ae03cb82c7"],["/posts/de4de369/index.html","8c3ba42b73549fda9e721675e4afdda7"],["/posts/ea42950b/index.html","f5d9f37814dff2650c1fa431151d65b1"],["/posts/f3908263/index.html","e4be6c224a4b9e1c531dc6373671aa97"],["/posts/f46b70d8/index.html","6b1df6e666bae489f0a827322929c793"],["/posts/f5e730b6/index.html","8fefb75ba3e7b01e1aac6d6343cf957d"],["/posts/f6c5d65f/index.html","ad168ab48d073da8ec330136327f4a03"],["/posts/undefined/index.html","0608d8073c5566c35980d2b4823f35e5"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","6893c7cc81b3cb708cc25fc95618fce9"],["/tags/API/index.html","805190f20116fabd1a7bebac8e1750b3"],["/tags/Appium/index.html","ba75a62318388e50f2b13273daa46afe"],["/tags/Charles/index.html","fab549608f630a22962f6b0649e0955f"],["/tags/Hexo/index.html","92bb61e85dc7f67ae8f706389c8bdc20"],["/tags/MQ/index.html","e5dc67317aa981ed66372589f741cda3"],["/tags/MySQL/index.html","13d430c9f47b1cdcfca347a558b9a60c"],["/tags/Python接口自动化测试/index.html","66c1d3497e88958932970ee8501deb94"],["/tags/Python自动化/index.html","19ffbab9fc447bbf28f06d0c3c6751aa"],["/tags/Shell脚本/index.html","c2f09d20946bce641ba86ed35a66b53f"],["/tags/index.html","27534d3f1859ab34e9a1b8df04a51eb2"],["/tags/postman/index.html","4d32096d01b94a2179e4bec8848bebba"],["/tags/postman/page/2/index.html","aa85e598736f37931da6626881c9254f"],["/tags/postman/page/3/index.html","4ee8732f2f74492cb51c1f493e1eab55"],["/tags/博客/index.html","f545a88401eab0d91714afcd6b5159fd"],["/tags/自动化测试/index.html","73c165996314bd20df226b503afea37a"]];
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
