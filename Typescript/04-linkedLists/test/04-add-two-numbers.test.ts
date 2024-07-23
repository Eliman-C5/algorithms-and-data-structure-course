import { ListNode } from "../src/02-merge-two-sorted-lists";
import { addTwoNumbers } from "../src/04-add-two-numbers";

describe("Exercise 4 from Linked Lists", () => {
  const l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(4);
  l1.next.next.next = new ListNode(6);

  const l2 = new ListNode(5);
  l2.next = new ListNode(2);
  l2.next.next = new ListNode(8);

  it("should return the expected result", () => {
    expect(addTwoNumbers(l1, l2)).toStrictEqual(
      new ListNode(6, new ListNode(4, new ListNode(2, new ListNode(7))))
    );
  });
});
