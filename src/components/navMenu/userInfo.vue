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
    <div class="user-menu-dialog" :class="[dialogVisable ? 'is-active' : 'is-active']" v-show="true">
      <div class="user-menu-title">
        <span>积分：2000</span>
      </div>
      <div class="user-menu-wrap">
        <div class="user-menu-item" v-for="(item, index) in navigationBarOptions" :key="index">
          <div class="user-menu-item_title layout-center">{{item.label}}</div>
          <ul class="user-menu-item_child">
            <li class="layout-center" v-for="(itema, indexa) in item.child">
              <span>{{itema.label}}</span>
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
  animation-duration: .8s;
}
.user-menu-dialog {
  position: absolute;
  top: 0;
  right: 0;
  width: 30rem;
  height: 20rem;
  border: solid 1px red;
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
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    .user-menu-item {
      width: 20%;
      height: 100%;
      border: solid 1px green;
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