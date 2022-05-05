/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d1072cc750b437a1a2e66d01890601fa"],["/archives/2020/08/index.html","0dc6d12897bbd23d366ca51045c199d4"],["/archives/2020/index.html","740c27dbb0ec0d2d78d96ae0f6447fde"],["/archives/2021/02/index.html","06e3ab5a49e34473c072e0a3284d1d8c"],["/archives/2021/03/index.html","6a35197c9ddbfa5dd1fd0c1751a0c35e"],["/archives/2021/05/index.html","45594f842c52411dcda72d6e2f017145"],["/archives/2021/11/index.html","e655145176654457fca9d717fa646a1a"],["/archives/2021/12/index.html","9558435241e8bce79363bb630fa45074"],["/archives/2021/12/page/2/index.html","1f915bb3c29a66400a13fb043c467830"],["/archives/2021/index.html","ade685b62c42a9ae3db324ae0595b9e2"],["/archives/2021/page/2/index.html","8af5837277f92555df325cfa093b2990"],["/archives/2021/page/3/index.html","ccd20bb96e0050d2e9dba4822c477310"],["/archives/2022/01/index.html","d4e8c5978814aed7e475838f41b93d74"],["/archives/2022/01/page/2/index.html","ee104ed289b8bca0821e2e40abb67fe7"],["/archives/2022/02/index.html","0eedc47a6986ee1c348acd331f6f596e"],["/archives/2022/02/page/2/index.html","e9e7c7ac0c43f782c92c6dc6ff2b9a7a"],["/archives/2022/05/index.html","e553b64ca5d18b9b88e9519ae7502fbe"],["/archives/2022/index.html","9260e36a99ad4509e279d67e7ee657fc"],["/archives/2022/page/2/index.html","4b8ed8a2ad76cf2ca7bd2e47de6c8120"],["/archives/2022/page/3/index.html","67e047868b01e7d4ed2ae41a0d578666"],["/archives/index.html","8c3abb573473b5b1d905e8dd8773036d"],["/archives/page/2/index.html","84cba8c4205c1cdcfbf114203a081f1b"],["/archives/page/3/index.html","a110ffe4a38c8c648d72028e7ee58864"],["/archives/page/4/index.html","9c79ad5039e0f32131ab60f45b277baa"],["/archives/page/5/index.html","0fcc28d5db383a0c4283c64d83473a07"],["/archives/page/6/index.html","8ce982761de2c1634dcab589cb73a8f6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","ffa543463a9fa8df0b85c43b30a26b87"],["/categories/Charles/index.html","5705857be13cc1d9c41496f79daf6699"],["/categories/Hexo/index.html","ff2459c06bd5917396f78c406990886a"],["/categories/MySQL/index.html","a201f13917267d70aaf7700ad5d1674b"],["/categories/Python接口自动化测试/index.html","459080c37d2c71b5f2f8ca5497dffe7f"],["/categories/Python自动化/index.html","8ffab4545d87beb7b6b0efc8be928bec"],["/categories/Shell脚本/index.html","65fe2961993330d38d26ebcc712ad239"],["/categories/index.html","54b359c0681b9484ed1e34cf3c3cff5a"],["/categories/postman/index.html","e6ea7e9d66151bcbeb24b0571a9ad0dd"],["/categories/postman/page/2/index.html","8ef2f3de71604b092ca6c5470b1cc16e"],["/categories/postman/page/3/index.html","58f4aa31af1f72cc4e0b246dde731330"],["/categories/技术积累/index.html","ab7ac7192d3931fa6b0a29b6c405c85a"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","0ab8071310dd458a4a915b8f5559fcb5"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","9f9de74c03cbc79f8c236106d3587141"],["/page/3/index.html","c6151c730f20922e72b44e5cc6a45876"],["/page/4/index.html","b7fb9308b98ab0f4de56235fed795192"],["/page/5/index.html","a3d9092a6418c3a8443827074bb2d324"],["/page/6/index.html","000d9b6d05408599c379d8b8b055c80c"],["/posts/2173e2a4/index.html","c2aca4ad14339f457014b074b96d7aea"],["/posts/22131793/index.html","1502204735e957b701c67bfd4801edb5"],["/posts/2ab40ef8/index.html","923828b2004a9237d64038044da6a38d"],["/posts/30fa304c/index.html","891dc1bee937e35443901a2be66c3aba"],["/posts/3447541d/index.html","10ff8fd5dd72ddfa67dc6093181cea2a"],["/posts/3447554d/index.html","eee8f3c6ce31278c9939a004886928fc"],["/posts/344e3c5b/index.html","af0b6031291ee4f79c85020d92e1e06d"],["/posts/3457ed69/index.html","fbeec7ba2bf7ce5d2508025d13037c21"],["/posts/39cb083c/index.html","83a7ad842325dd5386970353f47b913c"],["/posts/3ba53770/index.html","5aac5dfaa8c383273b8a2a13043a0359"],["/posts/3bd3916a/index.html","0652d40faa8e352bd1ae8d310db3ee26"],["/posts/3e4105ad/index.html","f9f90cb45d0b1fd1f7e66f2696d0a6f9"],["/posts/42f034cf/index.html","b9eb59737fe567a6674cc88348dab96e"],["/posts/43b8c324/index.html","8027f2e3247d927087da916572fd2805"],["/posts/54eecc7d/index.html","801a452f6b9bcd850bfdce70004d5c72"],["/posts/6172e27e/index.html","933648fd6f6ae2acb32833b0f3a25577"],["/posts/6556c33b/index.html","d205453efdd30fe4a87b9b7d2639703a"],["/posts/66841aa6/index.html","1f923f7557d68468ffece61a6c7cb134"],["/posts/689fc75c/index.html","30af2a6d7dbd6c835ed71cc1b238be4b"],["/posts/69423a58/index.html","1c4689b9fbdbb83d9de92f30f7bc0fb8"],["/posts/69ae7450/index.html","125a43dfc25d3ee12fe65a36279d62f0"],["/posts/7de15477/index.html","2983309270a12641a3f5e660d8ce9aab"],["/posts/8a00d2ea/index.html","4ec756658fe4235c673e904267d6a285"],["/posts/8aa14a73/index.html","cfe2a8627a10c89e6c5a2a5e178038ca"],["/posts/96032b58/index.html","68aa119f67d3037294d9a180e399391b"],["/posts/9656df9f/index.html","a207f7ada82193c3b8b81caedb6b57c9"],["/posts/99817e93/index.html","a16374dedbbb5becce66eaa16e38016e"],["/posts/9d1414ba/index.html","ecb3d3d0ca2e3491849d4db3376579bd"],["/posts/a3886b70/index.html","0da7f9c7d4f49830db36d1f0c1002dc4"],["/posts/a42e3f6d/index.html","a5fb272a79349611ed6d57c0c4104113"],["/posts/a9438874/index.html","0cd6ec073b2ec96137f1d81b68b1b23e"],["/posts/ab3b7c7/index.html","f1acd664e3c9673471af840a5cfd2b89"],["/posts/adb093cd/index.html","424e2018469fad76853305a1f9d14660"],["/posts/b4b3bf4e/index.html","68b552e2c18a2a5cccb80c733a828826"],["/posts/b8685e49/index.html","36e50ba941e2878f4951bc0fef512db8"],["/posts/baaef441/index.html","163bdcd2c4013114684b8e1232b0bd49"],["/posts/bbd06fa5/index.html","6affdb4c88ad8bc75efc4c7434b0aff7"],["/posts/be476180/index.html","15d29dcb1b3b726af851f4bfedcd846c"],["/posts/c4b6dbb9/index.html","65751bf466fea38385ba1a41241feb6e"],["/posts/c98d9940/index.html","0dceeb62997d4c8968bea5e6157307e7"],["/posts/d2331223/index.html","4fb3e2c1904569ab805b877dfa22dba7"],["/posts/d5268b29/index.html","890dd7d8366f38feadcfe0f7fa1d1990"],["/posts/d7719dab/index.html","0c041a5b57a339b4dee39dab4866a11f"],["/posts/dcc42dc3/index.html","6e69b39c80ce51cb48c6d3c6b2676e38"],["/posts/de4de369/index.html","0606e7ccbe1ae0c8964f714078b2f82d"],["/posts/ea42950b/index.html","17d433e9455f4e9902798634fcacb5fc"],["/posts/f3908263/index.html","d6125415547979154150c6fa0f46db31"],["/posts/f46b70d8/index.html","e702be4007881415459e9a233a28a3a3"],["/posts/f5e730b6/index.html","cdcd5572a4f3799295255e458a19de6e"],["/posts/f6c5d65f/index.html","43f22c99c929640222648bb09ebeccc4"],["/posts/undefined/index.html","64e46f046d52a53c1317e91a0ff2e078"],["/slider.e37972.js","4f310c6a8d817d2a9b6358d9c44be8d2"],["/sw-register.js","f1a352154af84c8f5736d352cffeb45d"],["/tags/API/index.html","3ece8045151c830bba2ab6e32a0c7c30"],["/tags/Appium/index.html","d336ebbfae6e916d99b605e82579dd3f"],["/tags/Charles/index.html","5c1967427ccf550d7a805a0da876f8cb"],["/tags/Hexo/index.html","5b740c71fe9d275e00f3c8febc2a8cf0"],["/tags/MQ/index.html","6ddd41e0a697239f9755bba279676b60"],["/tags/MySQL/index.html","252fa76252877c595908e0c18daf4da9"],["/tags/Python接口自动化测试/index.html","5cd71462031b18d50a89ea759fbcdb68"],["/tags/Python自动化/index.html","c41a1e55b19015d08cf21793e36089e2"],["/tags/Shell脚本/index.html","01de8de9da285da50d0f8459ece63c70"],["/tags/index.html","51c6079b8f41c48630b8f0a3a19cfaa9"],["/tags/postman/index.html","0120e6ae1334fea17c437e37d83247d5"],["/tags/postman/page/2/index.html","31378d927dcda4d3acccbf3c7dd3ed7c"],["/tags/postman/page/3/index.html","62b23a616063b09cbc702a263999dbdd"],["/tags/博客/index.html","3f93864a4bf06face269e6a3b3e52737"],["/tags/自动化测试/index.html","06af1511bfde87e0a5277a8736003486"]];
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
