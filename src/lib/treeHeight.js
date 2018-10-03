'use strict';

module.exports = function treeHeight(tree) {
  let height = 0;
  function traverse(node, nodeHeight) {
    if (node === null) {
      return undefined;
    }
    if (nodeHeight > height) {
      height += 1;
    }
    traverse(node.left, nodeHeight + 1);
    traverse(node.right, nodeHeight + 1);
    return undefined;
  }
  traverse(tree.root, 0);
  return height;
};
