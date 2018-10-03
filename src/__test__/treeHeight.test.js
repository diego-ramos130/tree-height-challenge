'use strict';

const treeHeight = require('../lib/treeHeight');
const Tree = require('../lib/Tree');
const Node = require('../lib/Node');

describe('treeHeight.js', () => {
  test('in the case that we just make a regular tree with a height of 1, return 1', () => {
    const newTree = new Tree(5);
    newTree.root.left = new Node(4);
    newTree.root.right = new Node(3);
    expect(treeHeight(newTree)).toEqual(1);
  });
  test('in the case of a non-even big tree with a height of 4, return 4',() => {
    const newTree = new Tree(5);
    newTree.root.left = new Node(4);
    newTree.root.left.left = new Node(6);
    newTree.root.right = new Node(3);
    newTree.root.right.right = new Node(2);
    newTree.root.right.right.right = new Node(1);
    newTree.root.right.right.right.right = new Node(0);
    expect(treeHeight(newTree)).toEqual(4);
  });
  test('in the case of a tree with height 0, return 0', () => {
    const newTree = new Tree(5);
    expect(treeHeight(newTree)).toEqual(0);
  });
});
