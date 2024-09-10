function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function inOrderDFS(root, arr) {
    if (root === null) return;
    inOrderDFS(root.left, arr);
    arr.push(root.val);
    inOrderDFS(root.right, arr);
}

var findTarget = function(root, target) {
    const arr = [];
    inOrderDFS(root, arr);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) return true;

        if (sum < target) {
            left++;
        } else {
            right--;
        }
        
    }

    return false
};

function main() {
    const t04 = new TreeNode(7);
    const t02 = new TreeNode(4);
    const t01 = new TreeNode(2);
    const t12 = new TreeNode(3, t01, t02);
    const t13 = new TreeNode(6, null, t04);
    const t11 = new TreeNode(5, t12, t13);

    console.log(findTarget(t11, 9));
}

main();