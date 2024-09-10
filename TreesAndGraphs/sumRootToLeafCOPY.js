function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function preorderDFS(node, currentPath) {
    if (node === null) return 0;

    currentPath += node.val;

    // if it is a leaf
    if (node.left === null && node.right === null) {
        return parseInt(currentPath, 2);
    }

    return preorderDFS(node.left, currentPath) + preorderDFS(node.right, currentPath);
}

var sumRootToLeaf = function(root) {
    return preorderDFS(root, "");
}

function main() {
    const t04 = new TreeNode(1);
    const t03 = new TreeNode(0);
    const t02 = new TreeNode(1);
    const t01 = new TreeNode(0);
    const t12 = new TreeNode(0, t01, t02);
    const t13 = new TreeNode(1, t03, t04);
    const t11 = new TreeNode(1, t12, t13);

    console.log(sumRootToLeaf(t11));
}

main();