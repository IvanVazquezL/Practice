function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function inorderTraversal(root, arr) {
    if (root === null) return;
    inorderTraversal(root.left, arr);
    arr.push(root.val);
    inorderTraversal(root.right, arr);
}

var twoSumBSTs = function(root1, root2, target) {
    const arr1 = [];
    const arr2 = [];

    inorderTraversal(root1, arr1);
    inorderTraversal(root2, arr2);

    let i = 0;
    let j = arr2.length - 1;

    while (i < arr1.length && j >= 0) {
        const sum = arr1[i] + arr2[j];

        if (sum === target) {
            return true;
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }

    return false;
};

function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(4);
    const t11 = new TreeNode(2, t12, t13);

    const t22 = new TreeNode(0);
    const t23 = new TreeNode(3);
    const t21 = new TreeNode(1, t22, t23);

    console.log(twoSumBSTs(t11,t21,5));
}

main();