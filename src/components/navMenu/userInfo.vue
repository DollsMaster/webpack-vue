<script setup>
import {ref} from 'vue'
import {userMenuOption} from "@/config/dictonary";
const navigationBarOptions = ref(userMenuOption)
const dialogVisable = ref(false)
</script>

<template>
  <div class="user-menu" @mouseover="dialogVisable = true" @mouseout="dialogVisable = false">
    <div class="user-menu-avater">
      <img src="../../assets/userAvaer.jpg" alt="">
    </div>
    <div class="user-menu-dialog" :class="[dialogVisable ? 'is-active' : 'is-active']" v-show="dialogVisable">
      <div class="user-menu-title">
        <span>积分：2000</span>
      </div>
      <div class="user-menu-wrap">
        <div class="user-menu-item" v-for="(item, index) in navigationBarOptions" :key="index">
          <div class="user-menu-item_title layout-center">
            <span class="user-menu-item_icon">
              <el-icon size="1rem" style="color: #ffffff;margin: 3px"><TrendCharts /></el-icon>
            </span>
            <span class="user-menu-item_word">{{item.label}}</span>
          </div>
          <ul class="user-menu-item_child">
            <li class="" v-for="(itema, indexa) in item.child">
              <el-icon><CirclePlusFilled /></el-icon>
              <span style="margin-left: 5px">{{itema.label}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-menu {
  position: relative;
}
.user-menu-avater {
  position: relative;
  z-index: 10;
  display: flex;
  margin: .5rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
  width: 2.3rem;
  height: 2.3rem;
}
.is-active {
  animation-name: isActiveAnimation;
  animation-duration: .4s;
}
.user-menu-dialog {
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;

  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 15px 30px 5px rgba(0,0,0,.15);
  .user-menu-title {
    padding: 1rem;
    color: #ffffff;
    border-radius: 10px 10px 0 0;
    background-color: var(--sys-grey-isActive);
    text-align: center;
    span {
      padding: 1rem;
      background-color: rgba(255,255,255,.05);
    }

  }

  .user-menu-wrap {
    padding: .7rem 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    .user-menu-item {
      border-left: 1px solid rgba(0, 0, 0, .05);
    }
    .user-menu-item_title, .user-menu-item_child {
      display: flex;
      flex-direction: column;
      li {
        width: 100%;
        padding: .5rem 0;
        cursor: pointer;
        &:hover {
          color: #ffffff;
          background-color: var(--sys-grey-isActive);
        }
      }
    }
    .user-menu-item_title {
      padding: 0.7rem 1rem;
      .user-menu-item_icon {
        margin-bottom: 10px;
        border-radius: 100%;
        background-color: rgba(0,0,0,.5);
      }
      .user-menu-item_word {
        color: #525e54;
        font-size: .8rem;
      }
    }

    .user-menu-item_child {
      li {
        padding: .5rem 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      span {
        font-size: .75rem;
        white-space: nowrap;
      }
    }
  }
}

@keyframes isActiveAnimation {
  0% {
    transform: scale(0.2, 0.2);
    transform-origin: 100% 10px;
    opacity: 0;
  }
  100% {
    transform: scale(1, 1);
    transform-origin: 100% 10px;
    opacity: 1;
  }
}
</style>