<script setup>
import { ref } from 'vue'
const notice_ref = [
  {
    label: `近期3D动画分区、RPG同人游戏分区低质量充数帖子频发，审核近期自行判断定资源质量或删除低质量资源！`
  },
  {
    label: `以后评论一律不加积分，请不要在乱回复“感谢分享”等无用评论（PS：在文章下方点赞可获得1积分，每日签到能获得5-10积分）。`
  },
  {
    label: `以后评论一律不加积分，请不要在乱回复“感谢分享”等无用评论（PS：在文章下方点赞可获得1积分，每日签到能获得5-10积分）。`
  },
  {
    label: `以后评论一律不加积分，请不要在乱回复“感谢分享”等无用评论（PS：在文章下方点赞可获得1积分，每日签到能获得5-10积分）。`
  }
]
const notice = ref(notice_ref);

const mostVisit = [
  {
    label: `【正常向漫画/汉化】风之谷/風の谷のナウシカ 1~7卷【度盘/3.7G】`
  },
  {
    label: `【正常向漫画/汉化】狼と香辛料 (狼与香辛料) 漫画16卷+一本原画集（原站补档）`
  },
  {
    label: `【正常向漫画/汉化】浪客行/バガボンド 全集（附带全彩版）【度盘/16G】`
  },
  {
    label: `【正常向漫画/汉化】狼と香辛料 (狼与香辛料) 漫画16卷+一本原画集（原站补档）`
  },
  {
    label: `【正常向漫画/汉化】浪客行/バガボンド 全集（附带全彩版）【度盘/16G】`
  }
]
const mostVisitRef = ref(mostVisit)


const getTextColor = (index) => {
  if (index === 0) {
    return 'primary'
  } else if (index === 1) {
    return 'success'
  } else if (index === 2) {
    return 'warning'
  } else {
    return 'info'
  }
}
</script>

<template>
  <div class="quick-wrap">
    <div class="title">最多访问</div>
    <div class="content-style">
      <ul>
        <li class="text" v-for="(item, index) in mostVisitRef" :key="index">
          <el-link :underline="false" :type="getTextColor(index)" style="font-size: .8rem">{{index + 1}}. {{item.label}}</el-link>
        </li>
      </ul>
    </div>
    <div class="title">
      快捷导航
    </div>
    <div class="quick-content content-style">
      <el-button type="danger">发帖教程</el-button>
      <el-button type="danger">升级高级作者</el-button>
      <el-button type="danger">招募审核员</el-button>
      <el-button type="danger">可用性监控</el-button>
      <el-button type="danger">加入TG群组</el-button>
    </div>
    <div class="title">公告</div>
    <div class="content-style">
      <ul>
        <li class="text" v-for="(item, index) in notice" :key="index" style="">
          <span>{{`${index + 1}）`}}</span>{{item.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quick-wrap {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  width: 200px;
  .title {
    padding: 1rem .4rem;
    font-size: 1rem;
    font-weight: 600;
  }
  .content-style {
    background: rgba(255, 255, 255, .95);
    padding: 1rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, .1);
    border-radius: 1rem;

    .text {
      font-size: .75rem;
      line-height: 20px;
      margin-bottom: 10px;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
    }

  }
 .quick-content button {
   margin-bottom: 10px;
   width: 100%;
   margin-left: 0;
   border-radius: 10px;
   &:last-child {
     margin-bottom: 0;
   }
 }
}
</style>