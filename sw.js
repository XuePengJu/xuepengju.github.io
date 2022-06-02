/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3b58970821703d01a1fb3afc25bafb34"],["/archives/2020/08/index.html","ddc4ab1d3f4b3291059671210802499f"],["/archives/2020/index.html","c2298fd0ac77622ca62be730c1ca512f"],["/archives/2021/02/index.html","497b4e9c64e91fcb3bbc4dffbfe19bb3"],["/archives/2021/03/index.html","4db911c8231913cc355a9460256c615c"],["/archives/2021/05/index.html","2825424b20104a271935ba2236fac326"],["/archives/2021/11/index.html","e7a0c6dc6a69676b1f0e9ac3c13f3ea6"],["/archives/2021/12/index.html","d0ba1e67b5cfdd052523e786c13ea905"],["/archives/2021/12/page/2/index.html","cdb84420e312e2fed67305c1e137b310"],["/archives/2021/index.html","7e33a8568ef6e1069e775c02a0cc8e48"],["/archives/2021/page/2/index.html","4c493d3ba92eedd18839d26cc0e84bbb"],["/archives/2021/page/3/index.html","bf276f70645c71bb49ac61087e6a237d"],["/archives/2022/01/index.html","51e2754144266003f3eca7c2c23b7d62"],["/archives/2022/01/page/2/index.html","b0454ff1e437e6fa1ecc092763a19797"],["/archives/2022/02/index.html","373152f97b7821baefb97a96e6d2c37b"],["/archives/2022/02/page/2/index.html","ee6637e65f0d136f9a66db9f1956aef3"],["/archives/2022/05/index.html","eb9596c93c312341819426220be3da2c"],["/archives/2022/06/index.html","8000fa0d1f517f425be9c60ec37b8a25"],["/archives/2022/index.html","e205620593decf17a53a035ba915054b"],["/archives/2022/page/2/index.html","687e09b6fddf3d7f9ef692522aa2aeda"],["/archives/2022/page/3/index.html","bdf92ba4797127f8bfb5f9cb54dc8114"],["/archives/index.html","03c6c6e18070260ca8d2f3afab46f180"],["/archives/page/2/index.html","2647865526710f0e617b06637610a8b1"],["/archives/page/3/index.html","684876a2f2fa470511d806c83802a835"],["/archives/page/4/index.html","0d23a24dd708051d4367d05c422174a5"],["/archives/page/5/index.html","fbdb5a64386babbbca315f851ae15a07"],["/archives/page/6/index.html","8aaa9c9bb36cab1f9c818b336eaa1b0a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","017d486a7358841ad0aed6f9322bfe60"],["/categories/Charles/index.html","4d44f066bfed20be03d35043684076cc"],["/categories/Hexo/index.html","46cfdef96ed98c61816d0e395c78c35d"],["/categories/MySQL/index.html","56ac2ca56f92a82f51aed99a95fa225f"],["/categories/Python/index.html","d64cac32c7895a4392e5e66087c1ad3a"],["/categories/Python接口自动化测试/index.html","dce60b032ac0ddb21ab3372070f80b92"],["/categories/Python自动化/index.html","e79b47d11b344aa82130c715058ba087"],["/categories/Shell脚本/index.html","d4defb8571f4cae6b7ecebb8bfee0bd0"],["/categories/index.html","79c8f4f5ab0964dbae926f872dba62e2"],["/categories/postman/index.html","aeed85ad6b3414a871dd4529c7d2e176"],["/categories/postman/page/2/index.html","ccef7f13425f5d10e02678b685ddada3"],["/categories/postman/page/3/index.html","becca07622408cbb6a58d1d6a2c6ed94"],["/categories/性能测试/index.html","e7813d2f694499adb17a1bf0c956a6dc"],["/categories/技术积累/index.html","5603b0c33da178407c7b8ddbb137d1a8"],["/categories/简历/index.html","401183f53a2ec8d515606da4e9c53d6b"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","1a54b921e40a21d78c61c5354a3f6bce"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python/1654162983.jpg","1c2eafe83366044ce4a82b7d98695d2e"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","11be1d39c31b3f17c046985dd49767eb"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","a79103f4f8da2aa0158b701068cea6b0"],["/page/3/index.html","f542d5b2c2d2f932db371388abebe7c3"],["/page/4/index.html","ee03f442180657b0439fdadf64d7f5e4"],["/page/5/index.html","2e78d08cbdc9eac188885bb88c691510"],["/page/6/index.html","798429036c572d95b07aca5ded8f1633"],["/posts/2173e2a4/index.html","b08ce7a42d1d5a5f54cf5cf6d1651889"],["/posts/22131793/index.html","893144059a915ca00035832c0fc38c1b"],["/posts/2ab40ef8/index.html","9dd2ad71962abf433bc5c8db2b3061e8"],["/posts/30fa304c/index.html","cb45dacecc004414bdd1511ad438a063"],["/posts/3447541d/index.html","e1f642589b360e9ad63917d55a6eaceb"],["/posts/3447554d/index.html","5bd70c68a7c144b11cacbc58e74f563c"],["/posts/344e3c5b/index.html","07dfb1b019a273aa53a633b93bcd84f4"],["/posts/3457ed69/index.html","f20d599feb32a1ee34bea9ff29e3061a"],["/posts/39cb083c/index.html","86696822ee52a64d55450d5283360259"],["/posts/3ba53770/index.html","f8b5929f7b44d1097ac90166a6af5256"],["/posts/3bd3916a/index.html","06ca2f298a99a0fa951b34b3d721e12f"],["/posts/3e4105ad/index.html","5c1ff52793b22243daeeb721ed1ea93e"],["/posts/42f034cf/index.html","b3273b1918cdf3bf825816a01bb55e4b"],["/posts/43b8c324/index.html","5199eb655d84923dd89b820ff7dfb89d"],["/posts/448d76bd/index.html","cf06ad021d95ac68f1e580228308f4d2"],["/posts/54eecc7d/index.html","b942141d112cdab4cee14f7ad44e02a1"],["/posts/6172e27e/index.html","1286005302606e8d72bae2a9bf2ba564"],["/posts/6556c33b/index.html","47890cf3f54fcf108a50f9948eb6d663"],["/posts/66841aa6/index.html","3196a59186255d0a49519a3fdd074b3d"],["/posts/689fc75c/index.html","16ab04e3eeeca47573395c8af2cc094d"],["/posts/69423a58/index.html","39f9ee0a607d38127d5d215dd5754959"],["/posts/69ae7450/index.html","ac93b3908693a05ed4703bc4cca8214a"],["/posts/6eec70c5/index.html","89865203e0051d9dbabe170204dd2eea"],["/posts/7de15477/index.html","a9944e576bdf90cc966ae4a219161d25"],["/posts/8a00d2ea/index.html","95acad5c2d50a027be90607907b870ff"],["/posts/8aa14a73/index.html","588ccfe503890137c087a1b649c43319"],["/posts/8e85f61/index.html","89edc25e2b38795343bef9d4d8337f6d"],["/posts/96032b58/index.html","dda2cf5427037db4a4d9999bfdb498dc"],["/posts/9656df9f/index.html","0302439951f727f9990c1d0b510fbe01"],["/posts/99817e93/index.html","93289fc9fa8ae5b97629651b0986dc26"],["/posts/9d1414ba/index.html","214445d94058c4e989e8b6dbddf06ec1"],["/posts/a3886b70/index.html","e0b0a42eb1eff3d3c3820a9d3757d2c0"],["/posts/a42e3f6d/index.html","d760d6b0188a1a2f18c3feebf5f39c55"],["/posts/a9438874/index.html","3b57609e2aea211d3b5b661a364eac15"],["/posts/ab3b7c7/index.html","ba63467a1cb53218ab784ba271053db7"],["/posts/adb093cd/index.html","b76a733e737a62861a51f83a19ad7c2f"],["/posts/b4b3bf4e/index.html","b8aea77f0d3eb67596868458fe5bc70a"],["/posts/b8685e49/index.html","9c06d66685346574ae24f6a6b601daca"],["/posts/baaef441/index.html","415d9a87b1d6f63ffc00cb05dcf4a4b8"],["/posts/bbd06fa5/index.html","51ae820c97b8bb72caeee319c71965b7"],["/posts/be476180/index.html","9d5b606b593fb7bfedd4a3a49f4bf79d"],["/posts/c4b6dbb9/index.html","f3ae2271efacae072b37943e7f2d2c56"],["/posts/c98d9940/index.html","bd4bc3b3f6658625cebaeb19784e7b69"],["/posts/d2331223/index.html","9304f635bfce871ae04b4028c45ac7bc"],["/posts/d5268b29/index.html","4f4d89e7da25d24664d661d0cc106646"],["/posts/d7719dab/index.html","01fcfa6504c82ed80a95826bd8dc2b99"],["/posts/dcc42dc3/index.html","c8cc9e55705df84f26e0d325f3ddc99c"],["/posts/de4de369/index.html","65a3badd05c3456c9db86d8cdacbc77a"],["/posts/ea42950b/index.html","9026ec5a52c89fa115da1bd7320656f5"],["/posts/eac202c0/index.html","5515e8ba9352180e1c68f36fad1a156b"],["/posts/f3908263/index.html","e5308a17526e7f00a5c754975418f17e"],["/posts/f46b70d8/index.html","b079b10509a1963abef86a5e42523cc0"],["/posts/f5e730b6/index.html","af31628bddb8181278235c5b3f2fc8eb"],["/posts/f6c5d65f/index.html","e5ce9a7183046179f0af1608f706a11a"],["/posts/undefined/index.html","6388b0d339f2de8d842bd9ed4cf8e81d"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","b32a46dc3ac0b85038eae856d4e275e9"],["/tags/API/index.html","ea6aba4f5c14093aed2c4d5749894f39"],["/tags/Appium/index.html","e4162f50f3d7483ce996bacb964fc3d2"],["/tags/Charles/index.html","db8ea2d0cc62316c7243c8887840f125"],["/tags/Hexo/index.html","28088102a6c9871663e94a7ee613f84d"],["/tags/MQ/index.html","8961993b55b69a5b5f5654d4478861b2"],["/tags/MySQL/index.html","7cb6eaf13c64dfeabc362e0b3e3976a9"],["/tags/Python/index.html","baa4c94027c31b06e339ebf2918ad19b"],["/tags/Python接口自动化测试/index.html","5d1e6506eb24751a5f00606ee2b663a7"],["/tags/Python自动化/index.html","1de47972d8c40eb8ee4f4aac06143cfe"],["/tags/Shell脚本/index.html","61bd21afe03c566db1bdd0d932a70b14"],["/tags/index.html","744eab05b802639c2a55c25eaa2cef39"],["/tags/postman/index.html","82025582944fd4d9538c250f78611fa9"],["/tags/postman/page/2/index.html","c2a033b664224de6dc3ca39412f27308"],["/tags/postman/page/3/index.html","48d16435581f378d79c2df4ffbf25f0d"],["/tags/博客/index.html","5dbe758cf9ac07ea5ff692d76dd4dd12"],["/tags/性能测试/index.html","ebe9eb0f333628dc9163541377b186c9"],["/tags/简历/index.html","389a43f40b00348ed68400a5565c500d"],["/tags/自动化测试/index.html","65aad8c222f117c1bd534675aa9264de"]];
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
