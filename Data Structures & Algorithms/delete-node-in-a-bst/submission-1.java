/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        if(root==null) return null;
        if(key>root.val) {
            root.right = deleteNode(root.right, key);
        }
        else if(key<root.val) {
            root.left = deleteNode(root.left, key);
        }
        else{
            //Case 1 & 2, root has 0 or one child;
            if(root.left==null) return root.right;
            else if(root.right==null) return root.left;
            //Case 2, root has no child -> find inorder successor 
            TreeNode successor = root.right;
            while(successor.left!=null) {
                successor = successor.left;
            }
            //Copy its value
            root.val = successor.val;
            root.right = deleteNode(root.right, successor.val);
        }
        return root;    
    }
}