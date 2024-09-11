function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isSymmetric = function(root) {
    const queue = [root, root];

    while (queue.length) {
        console.log(queue)
        const t1 = queue.shift();
        const t2 = queue.shift();

        if (t1 === null && t2 === null) {
            continue;
        }

        if (t1 === null || t2 === null) {
            return false;
        }

        if (t1.val !== t2.val) {
            return false;
        }

        queue.push(t1.left, t2.right, t1.right, t2.left);
    }

    return true;
};

function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(1);
    const t11 = new TreeNode(2, t12, t13);

    console.log(isSymmetric(t11));
}

main();