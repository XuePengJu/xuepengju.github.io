/*
 * @Date: 2020-08-23 19:40:51
 * @Author: glassysky
 * @LastEditors: glassysky
 * @LastEditTime: 2020-08-24 12:29:16
 * @Description: 
 */
/**
 * Butterfly
 * galleryGroup and allery
 */

'use strict'

function shuoshuos (args, content) {
  return `
  <div id="primary" class="content-area" style="">
    <main id="main" class="site-main" role="main">
        <div id="shuoshuo_content">
            <ul class="cbp_tmtimeline">
                ${hexo.render.renderSync({text:content, engine:'markdown'}).split('\n').join(' ')}
            </ul>
        </div>
    </main>
  </div>
  `
}

function shuoshuo (args) {
  args = args.join(',').split(',')
  const img_url = args[0]
  const title = args[1]
  const text = args[2]
  const CurTime = args[3]

  return `
    <li> <span class="shuoshuo_author_img"><img src='${img_url}' class="avatar avatar-48" width="48" height="48"></span>
            <div class="cbp_tmlabel" href="">
                <p></p>
                <p><strong>${title}</strong></p>
                <p>${text}<p>
                <p></p>
                <p class="shuoshuo_time"><i class="fa fa-clock-o"></i>
                    ${CurTime}
                </p>
            </div>
    </li>
  `
}

/**
 * 
 * <li> <span class="shuoshuo_author_img"><img src='${img_url}' class="avatar avatar-48" width="48" height="48"></span>
            <div class="cbp_tmlabel" href="">
                <p></p>
                <p><strong>${title}</strong></p>
                <p>${text}<p>
                <p></p>
                <p class="shuoshuo_time"><i class="fa fa-clock-o"></i>
                    ${CurTime}
                </p>
            </div>
    </li>
 */

hexo.extend.tag.register('shuos', shuoshuos, { ends: true })
hexo.extend.tag.register('shuo', shuoshuo)