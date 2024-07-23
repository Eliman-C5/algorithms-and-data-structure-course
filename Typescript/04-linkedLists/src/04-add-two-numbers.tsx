import { ListNode } from "./02-merge-two-sorted-lists";

/*
 * Escribe un algoritmo que realice la suma de dos listas que representan
 * dos enteros positivos. Las listas están en posición invertida.
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 5->2->8
 *  Output: 6->4->2->7
 *  6421 + 825 = 7246
 */

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result = new ListNode();
  let current = result;
  let carry: number = 0;

  while (l1 || l2) {
    current.next = new ListNode(-1);
    current = current.next;

    let digit = carry;

    if (l1) {
      digit += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      digit += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(digit / 10);
    digit = digit % 10;

    current.val = digit;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return result.next;
}
