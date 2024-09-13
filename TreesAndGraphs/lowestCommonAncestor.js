function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var lowestCommonAncestor = function(root, p, q) {
    let answer = null;

    recurseTree(root, p, q);

    return answer;

    function recurseTree(currentNode, pNode, qNode) {
        if (currentNode === null) {
            return false;
        }

        const left = recurseTree(currentNode.left, pNode, qNode) ? 1 : 0;
        const right = recurseTree(currentNode.right, pNode, qNode) ? 1 : 0;
        const mid = (currentNode === pNode || currentNode === qNode) ? 1 : 0;

        if (mid + left + right >= 2) {
            answer = currentNode;
        }

        return mid + left + right > 0;
    }
}

function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(3);
    const t11 = new TreeNode(2, t12, t13);

    console.log(lowestCommonAncestor(t11, t12, t13));
}

main();