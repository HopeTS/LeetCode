
/** Definition for singly-linked list. */
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let newListHead: ListNode | null = null;
    let newList: ListNode | null = null;
    let complete = false;
    let curList1 = list1;
    let curList2 = list2;

    /** Append to newList, return updated arg list (or null if not next) */
    function appendList(list: ListNode): ListNode | null {
        if (!newListHead) {
            // If no list head, construct listHead
            newListHead = new ListNode(list.val)
            newList = newListHead;
        } else {
            if (!newList) {
                throw new Error('newList should not be null if newListHead is not null');
            }
            newList.next = new ListNode(list.val);
            newList = newList.next;
        }

        return list.next || null;
    }

    // Keep appending to the new list until both lists reach the end
    while (!complete) {
        // If curList1 is null but curList2 is not, append curList2 and continue
        if (!curList1 && !!curList2) {
            curList2 = appendList(curList2);
            continue;
        } 

        // If curList2 is null but curList1 is not, append curList1 and continue 
        else if (!curList2 && !!curList1) {
            curList1 = appendList(curList1);
            continue;
        }

        // If both lists are null, newList is complete
        else if (!curList1 && !curList2) {
            complete = true;
            break;
        }

        // If both lists are active, compare values and append smaller one
        else if (curList1 && curList2) {
            curList1.val <= curList2.val ?
                curList1 = appendList(curList1) :
                curList2 = appendList(curList2);
        }
    }

    // If no list, return null
    if (!newListHead) {
        return null
    }

    return newListHead;
};