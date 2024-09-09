function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isValidBST = function(root) {
    let prev = -Infinity;
    return inorder(root);

    function inorder(node) {
        if (!node) return true;

        if (!inorder(node.left)) {
            return false;
        }

        prev = node.val;
        return inorder(node.right);
    }
};

function printBSTByLevel(root) {
    if (!root) {
        console.log("Empty tree");
        return;
    }

    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let currentLevel = "";

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel += node.val + " ";

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        console.log(currentLevel.trim());
    }
}


function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(3);
    const t11 = new TreeNode(2, t12, t13);

    printBSTByLevel(t11);
    console.log(isValidBST(t11));

}

main();