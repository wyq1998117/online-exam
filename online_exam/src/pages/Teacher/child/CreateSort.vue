<template>
  <div class="el-tree-node__content" style="padding-left: 18px;">
    <span class="el-tree-node__expand-icon el-icon-caret-right is-leaf"></span><!----><!---->
    <span class="tree-expand">
      <span class="tree-label" style="display: none;">
        <div class="edit el-input el-input--mini"><!---->
          <input type="text" autocomplete="off" autofocus="autofocus" class="el-input__inner"><!----><!----><!---->
        </div>
      </span>
      <span class="tree-label">
        <span class="tree_ins" style="margin-left: 18px;" >{{msg}}</span>
        <input type="text" placeholder="新增分类" v-model="msg">
      </span>
    </span>
  </div>
</template>

<script>
    export default {
        name: "CreateSort"
    }
</script>

<style scoped>
  .el-tree {
    position: relative;
    cursor: default;
    background: #fff;
    color: #606266;
  }
  .el-tree-node {
    white-space: nowrap;
    outline: 0;
  }
  .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
    background-color: #f0f7ff;
  }

  .el-tree-node__content {
    height: 30px;
  }
  .el-tree-node__content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    height: 26px;
    cursor: pointer;
  }
  .el-tree-node:focus>.el-tree-node__content {
    background-color: #f5f7fa;
  }
  .el-tree-node__expand-icon {
    cursor: pointer;
    color: #c0c4cc;
    margin-left: 5px;
    font-size: 12px;
    transform: rotate(0);
    transition: transform .3s ease-in-out;
  }
</style>
